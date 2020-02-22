# Canvas and Moodle Helper
A Chrome extension that changes some things I don't like about Canvas and Moodle.

### What is this?
At the University of Colorado Boulder, instructors use two online services for distributing and collecting homework, publishing grades, and sending announcements.
However, after using these extensively, I have found things I do not like about both of the services.
This Chrome extension fixes both by modifying the web pages.

### Changes to Canvas
- On a page like the one below, the document that you are viewing is shown in a tiny window on the page.
  This makes it hard to read since you have to scroll frequently to view the full page.
  The only way to make the document bigger is to either enter fullscreen mode, or download the document.
  ![Canvas Document Before](screenshots/Canvas%20Document%20Before.png)
  This extension adds an "Open In New Tab" button (shown below), which opens the document in a new tab. 
  ![Canvas Document After](screenshots/Canvas%20Document%20After.png)
- On a page like the one below, clicking on a file opens it in the current tab, and clicking "open in new tab" will download the file to your computer.
  ![Canvas File Before](screenshots/Canvas%20File%20Before.png)
  This extension adds an "Open In New Tab" button (shown below), which actually opens the document in a new tab instead of downloading it.
  ![Canvas File After](screenshots/Canvas%20File%20After.png)

### Changes to Moodle
- On a page like the one below, clicking on the "Homework Assignment.pdf" link will automatically download the PDF to your computer.
  This clutters up your downloads folder.
  This extension converts these links into "new tab" links so they do not download automatically.
  Downloading is still possible by clicking the download button on the new tab that opens.
  ![Moodle Homework Download](screenshots/Moodle%20Homework%20Download.png)
- On a page like the one below, select elements on the quiz you are reviewing are greyed out and only the answer you chose is shown.
  This extension allows you to click on the greyed out select element and view the other answers, including the ones you did not choose.
  ![Moodle Select](screenshots/Moodle%20Select.png)
  
### How To Install
1. Clone this repository into any location on your computer.
2. Open Chrome and navigate to the URL `chrome://extensions/`.
3. If not already on, turn on "Developer mode" at the top right.
4. Click "Load unpacked" at the top left.
5. Select the directory this repository was cloned into.
