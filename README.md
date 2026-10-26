# Leader Week Log

A free, private weekly tracker for leadership development. Set SMART goals with milestones, build daily habits, choose your top priorities each week, review your progress every Sunday and download a weekly PDF report.

It was built for participants in the Aspire Leaders Program, but anyone can use it.

**Open the tracker:** https://fizzamubeen.github.io/leader-week-log/

No sign-up, and it works on phones and computers. On Android you can also install it as an app (see below).

## Features

| Feature | What it does |
|---|---|
| Week score | A live score at the top showing how many habit days you've completed against your targets, plus priorities done, best streak, goal deadline and your week rating. |
| SMART goals | Add one or more goals. Write each in one sentence, fill in Specific, Measurable, Attainable and Relevant, and set a start date and deadline. Press **Save goal** to turn it into a summary card, and **Edit** to change it later. |
| Milestones | Break each goal into checkpoints and tick them off. Progress bars show milestones completed and time used. |
| Daily habits | Add habits, give each a target number of days per week, and tap each day you complete it. Rename habits or change targets at any time. |
| Top priorities | Add as many priorities as you need for each week and mark them done. |
| Weekly review | Rate your week from 1 (tough) to 5 (great) and answer review questions. You can write your own questions in Settings. |
| Insights | An 8-week chart of habit and priority completion, and a 28-day history strip for each habit. |
| Custom dates | Switch from **Week** to **Custom dates** and choose any start and end date (up to 92 days), or a quick pick: last 7, 14 or 30 days, this month, last month, or your goal's dates. The score, habit grid, priorities, reviews and insights all follow your dates. |
| PDF report | One click downloads a formatted report for the week or custom dates you're viewing: summary, goals, milestones, habits, priorities, review notes and a week-by-week trend. |
| Save and backup | Changes save automatically, and a **Save** button saves on demand. The status at the top shows when your work was last saved. Download a backup file and open it on any device to restore your log. |
| Customise | Add your name for the report, choose an accent colour, show or hide sections, and edit review questions. |

## How to use it

1. **Open the link above.** The tracker starts with example data so you can see how it works.
2. **Press _Start my own log_** to clear the examples.
3. **Open _Settings_** and add your name. It appears on your weekly report.
4. **Write your SMART goal.** Use the Aspire format: _"Over the next [timeframe], I will improve my [leadership behaviour] by [specific actions], and I will measure my progress through [indicators]."_ Add 3–5 milestones, then press **Save goal**.
5. **Add 2–4 habits** that move the goal forward, for example "Plan tomorrow's top task" with a target of 5 days a week.
6. **Tap a day's box** each time you complete a habit.
7. **Every Monday,** write your priorities for the week.
8. **Every Sunday,** rate your week, answer the review questions and press **PDF report**.
9. **To review a longer stretch,** switch the header to **Custom dates**, pick your dates and download a progress report.
10. **Once a week,** go to **Settings → Download backup** and keep the file somewhere safe.

Use the arrows in the header to move between weeks, or **Custom dates** to look at any period.

### Moving to another device

1. On your current device, open **Settings → Download backup**.
2. Send the backup file to yourself, for example by email.
3. On the new device, open the tracker, go to **Settings → Open backup file** and choose the file.

## Get it on Android

There are two ways. Both keep your data on your phone.

**Option 1: Install from Chrome (quickest, updates itself)**
1. Open https://fizzamubeen.github.io/leader-week-log/ in Chrome.
2. Tap **Install app** in the top bar, or Chrome's menu (⋮) → **Install app** / **Add to Home screen**.
3. Leader Week Log now opens from your home screen like any app, and works offline.

**Option 2: Download the Android app (APK)**
1. On your phone, open the [latest release](https://github.com/FizzaMubeen/leader-week-log/releases/latest) and tap **LeaderWeekLog.apk**.
2. Open the downloaded file. If Android asks, allow your browser or Files app to **install unknown apps**.
3. Tap **Install**, then **Open**.

In the app, **PDF report** and **Download backup** open your phone's share sheet, so you can save the file to Files or Google Drive, or send it by email or WhatsApp.

The app is not on Google Play yet. Android may show a warning because it comes from outside the Play Store; this is normal for apps installed directly.

## iPhone

Open the tracker in Safari, tap **Share → Add to Home Screen**.

## Privacy

There is no account, no server and no tracking. Everything you type is stored in your own browser. Nobody else, including the person who shared the link, can see your entries. The PDF report is created on your device.

Clearing your browser data, or using a private window, will erase your log, so download a backup regularly. If your browser blocks storage, the status at the top tells you.

## Accessibility

- Works with keyboard only, with visible focus outlines.
- Every checkbox and button has a label for screen readers, and save messages are announced.
- Follows your device's light or dark mode.
- Respects the "reduce motion" setting.
- Destructive actions such as removing a goal or erasing data need a second click to confirm.

## Run your own copy

The whole app is a single file, `index.html`, plus `manifest.webmanifest`, `sw.js` (offline support) and the `icons` folder. It loads fonts from Google Fonts and the PDF library (jsPDF 2.5.1) from cdnjs.

- **Use it locally:** download `index.html` and open it in any browser.
- **Host your own copy:** fork this repository, then go to **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save. Your copy will be live at `https://<your-username>.github.io/leader-week-log/` within a minute or two.

### How the Android app is built

The `android-app` folder wraps the same `index.html` with [Capacitor](https://capacitorjs.com) 6. The PDF library is bundled so the app works offline, and the Filesystem and Share plugins handle saving files. The workflow in `.github/workflows/android.yml` builds the APK on every change and publishes it as a GitHub release.

To publish signed releases from your fork, add two repository secrets: `KEYSTORE_BASE64` (your keystore file, base64-encoded, with key alias `leaderweeklog`) and `KEYSTORE_PASSWORD`. Without them, the workflow publishes a test build.

Backups from the first version of the tracker can be opened in this version. They are converted automatically.

## Feedback

Ideas or problems? [Open an issue](https://github.com/FizzaMubeen/leader-week-log/issues).

## Built by

Fizza Mubeen, Aspire Leaders Program, Cohort 4 (2026) · [fizzamubeen.com](https://fizzamubeen.com)
