# Documentation for Compotool Materials Calculator Webpage

## Table of Contents

* TODO's for Webmaster of Compotool.com
* Notes on HTML
* Notes on CSS
* Notes on JS
* Notes on PHP


### TODO's for Webmaster of Compotool.com

The website is packaged within a folder which includes its own `assets` folder, `bower_components`, `node_modules` folder and with other necessary web pages. The entire code base is also available [here]()

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

