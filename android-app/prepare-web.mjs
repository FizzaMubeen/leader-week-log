// Copies the web app into www/ and makes it work offline inside the Android app:
// the PDF library and Capacitor runtime are bundled instead of loaded from the internet.
import { mkdirSync, copyFileSync, readFileSync, writeFileSync, cpSync, rmSync } from 'node:fs';

const root = '..';
rmSync('www', { recursive: true, force: true });
mkdirSync('www', { recursive: true });
cpSync(`${root}/icons`, 'www/icons', { recursive: true });
copyFileSync('node_modules/jspdf/dist/jspdf.umd.min.js', 'www/jspdf.umd.min.js');
copyFileSync('node_modules/@capacitor/core/dist/capacitor.js', 'www/capacitor.js');

let html = readFileSync(`${root}/index.html`, 'utf8');
const cdn = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>';
if (!html.includes(cdn) || !html.includes('<!--native-runtime-->')) throw new Error('index.html markers not found');
html = html.replace(cdn, '<script src="jspdf.umd.min.js"></script>')
           .replace('<!--native-runtime-->', '<script src="capacitor.js"></script>')
           .replace('<link rel="manifest" href="manifest.webmanifest">', '');
writeFileSync('www/index.html', html);
console.log('www/ ready');
