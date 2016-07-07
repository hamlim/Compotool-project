# Documentation for Compotool Materials Calculator Webpage

## Table of Contents

* TODO's for Webmaster of Compotool.com
* Notes on HTML
* Notes on CSS
* Notes on JS
* Notes on PHP


### TODO's for Webmaster of Compotool.com

The website is packaged within a folder which includes its own `assets` folder, `bower_components`, `node_modules` folder and with other necessary web pages. The files can also all be found on the github repo for the project [here](https://github.com/hamlim/Compotool-project). The `gh-pages` is the most up to date branch, and the website is all within the Dev folder. A link to the running version of the website is [here](198.211.105.97) (This link may change in the future).

The file structure is as follows:
```
* node_modules {for grunt}
* assets
    * css
        * prod {for production files}
        * src {for development files}
    * img
    * js
        * prod {for production files}
        * src {for development files}
* bower_components {for Fetch and Promise polyfills}
* vendor {for Composer and PHPMailer plugin}
bower.json {bower information}
composer.lock {Composer file}
composer.json {Composer file}
docs.md {this file}
Gruntfile.js {for Grunt}
index.html {The main file of the webpage, can be retitled with some caveats (see below) }
mailer.php {the main PHP file for sending an email for Request for Quote feature (see Notes on PHP)}
package.json {used for NodeJS packages}
```

You will need to edit the following things:
* filename of `index.html`
* Line 1271 in `./assets/js/prod/main.js` `window.location.href = "./index.html#thanks-modal";` change the 'index.html' part of the string with the new filename for the HTML document
* Add in the links to the other website pages to the `<nav></nav>` elements on `index.html` (Lines 22-67 in index.html)
* Change the `toAddress` to whatever static email address you want the emails sent to (found on line 1249 in ./assets/js/prod/main.js)

### Notes on HTML

There is only one HTML file included in the folder, it is the main page for the project. To rename it to another name please see the notes above.

### Notes on CSS

All the css is written in SCSS source files (./assets/css/src/), if you want to edit the CSS, you can use grunt to compile the source files with the default grunt command `grunt default`. None of it should interfere with other pages as the classes are all in BEM like formating.

### Notes on JS

The JS is the most vital part of the project, it is written in ES6 and transpiled to ES5 using grunt, if any edits need to be made they can be made within the ./assets/js/src/main.js file and transpiled in grunt with `grunt default` or `grunt es6`.

### Notes on PHP

For development I set up an email account for sending the emails about the quotes that users will want. The email address is `compotoolmailer@gmail.com` and is set up with some basic security defaults so that the PHPMailer class can use it and it's SMTP settings to send emails, if you have another option of sending emails (sendmail etc) all you need to do is parse the input from the AJAX post request from main.js which is an object like:
```JSON
{
    "toAddress": "email@email.com",
    "subject": "Email subject line",
    "message": "Email body"
}
```

