# Watto

>After Anakin Skywalker left Watto high and dry after winning the pod racing championships and going off to train as a jedi with Liam Neeson, he needed a new way to make credits. He is starting a used spaceship dealership, and obviously will need a sleek new web application to spread the word across the galaxy.

## To Run/Develop Locally
In terminal:
1. `git clone https://github.com/istobarton/watto.git`
2. `cd watto` 
3. `npm install`
4.  One of the following
  * `npm start` to serve the project locally
  * `npm run hmr` to develop with hmr: [hot module redeploy](https://medium.com/@beeman/tutorial-enable-hmr-in-angular-cli-apps-1b0d13b80130)
5. Visit `http://localhost:4200/` in your browser.

## Linting

Run `ng lint` to run [typescript linting](https://palantir.github.io/tslint/) checks. Helpful for clean code.

# About this project

## Creation
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

I am familiar with Angular 2 since we recently started using it to develop a new application at our company. I decided utilize and expand my current Angular 2 knowledge with this project. There were several things that the Angular Cli did not have built in right out of the gate that I needed to add: 
* HMR: Hot Module Redeploy (see link above) for rapid development. This is particularly helpful for Angular 2's interdependencies and for styling development.
* Routing: Both routing endpoints and restrictions needed to be added. 
* Common base URL. By default, requests are made to localhost, expecting a full-stack app. This had to be overriden for the spaceships endpoint.

## Development Philosophy

There are a lot of things that I wanted to accomplish with this app that I was unsure I would be able to accomplish within the week. My general development philosophy is to break things into the smalled (MVP) accomplishments possible and commit as I hack through them. Bugs, implementation issues, etc arise as a natural part of the process. Trying to bite off too much makes for sloppy, anxious development, and makes it difficult to read a commit history.

>ABC: Always Be Committing

So, you'll see a long commit history for me. Along with that history, you can see this README adjusting with to-do's and notes on my development process. I've kept a list of my known bugs and nice-to-haves so that you can get an idea of how I would improve this project as I moved forward. 

My project is also deployed here: https://istobarton-watto.netlify.com
(Note: You'll see a bug listed below for the image load-time in deployment.)

# Future Development

## Known Bugs
* Long load time in deployed environment - sprites?
* Better dynamic sizing for mobile devices w/ images
* e2e broken by routing

## Nice to Have
* Redux for State
* ID's for routing per spaceship ('spaceship/t-65-x-wing-starfighter')
* Routing pre-rendering (for image delays)
* ImgUrl from Server
* Google Image Search Display in lieu of images?
* scss replaces css
* unit testing



