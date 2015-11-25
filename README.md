# expandToolbox
## What tool did I choose?
For this challenge of expanding my toolbox, I found a javascript framework called [BespokeJS](http://markdalgleish.com/presentations/bespoke.js/). It is an online presentation tool that allows you to create streamlined presentations with no dependencies, where you can use plugins and style to give it some really cool effects in no time. I also used [GulpJS](http://gulpjs.com/), a framework that uses node to virtually build your files for you. Once you do this correctly, you barely have to write any code!
## Why would someone want to use BespokeJS?
BespokeJS is a really simple tool that helps you create a presentation online, where anyone can access it and view it anywhere, instead of sending a link to a presentation within an application. It also allows you to utilize plugins and effects that couldn't otherwise be used in other presentation applications. And when used with GulpJS, most of the complicated code is taken care of for you. It is time efficient and produces a really cool product!
## What are some limitations to BespokeJS?
There are a few drawbacks to using BespokeJS. It is still a pretty new framework, and there is not a huge community surrounding it. I also ran into a few problems because the documentation is so limited, and is essentially restricted to just GitHub accounts. It would have been a lot easier if there was some type of site with actual documentation on the framework that was clear and easy to find. 

There is a public GitHub repository for BespokeJS, listed [here](https://github.com/bespokejs/bespoke.git). The last commit to this repository was September 29, and there are currently 4 issues that are being addressed by the creator of the repository.
## What did I create with BespokeJS?
I created an informational website that is a presentation that explains why you should become an Informatics major. Check out the site [here](http://students.washington.edu/jessie23/info343/expandToolbox/presentation-directory/dist/#title-page)! It utilizies a few of the plugins that you can use with BespokeJS that adds a little flare to your presentation. I also utilized GulpJS to help me build my presentation.
## To get started: 
1. To get npm (to use in your terminal or command line), download [node.js](https://nodejs.org/en/download/)
2. Once you have npm installed, use the command: npm install -g generator-bespoke in the terminal or command line using an account the correct privileges (i.e. root or sudo)
3. Now you need to make a new presentation:
  * mkdir presentation-directory (name it what you want)
  * Change into that directory (cd presentation-directory)
4. Then start the Bespoke Generator using the command:  yo bespoke
5. To build your presentation or to create a local server using LiveReload, you will need to install [GulpJS](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md). Below are commands that you can use to build a static site, push to GitHub pages, or start a local server to see and test your presentation:
  * Build a static site: gulp
  * Push to GitHub pages: gulp deploy
  * To start a local server (I used this): gulp serve
6. Now, open your presentation-directory in your IDE and work on the files of main.js, main.styl, and index.jade (not html!) Wa-lah! You are finished

## Tips/Learn More
  * Install all of the plugins using the command line/terminal, and make sure it is in the right folder
    * To view all of the available bespoke plugins, click [here](https://github.com/bespokejs) or    [here](https://www.npmjs.com/search?q=bespoke+)
  * Here are some helpful links:
    * [Bespoke generator help](https://www.npmjs.com/search?q=bespoke+)
    * [Presentation Example](http://markdalgleish.com/presentations/bespoke.js/)
    * [Plugins](https://www.npmjs.com/search?q=bespoke+)
    * [More plugins](https://github.com/bespokejs) 
