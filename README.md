# WebdriverIO | Cucumber | Docker | CircleCI | Travis CI
<sup>Live Build Status:</sup><br />
[![CircleCI](https://circleci.com/gh/rehmanuet/WebdriverIO-Cucumber-Dockerized.svg?style=svg&circle-token=bf079e74605c86c569a605e53262ec2803ef14ac)](https://github.com/rehmanuet/WebdriverIO-Cucumber-Dockerized/blob/master/README.md)[![CircleCI](https://circleci.com/gh/rehmanuet/WebdriverIO-Cucumber-Dockerized.svg?style=shield&circle-token=bf079e74605c86c569a605e53262ec2803ef14ac)](https://github.com/rehmanuet/WebdriverIO-Cucumber-Dockerized/blob/master/README.md)[![GitHub](https://github.com/rehmanuet/WebdriverIO-Cucumber-Dockerized/workflows/CI/badge.svg)](https://github.com/rehmanuet/WebdriverIO-Cucumber-Dockerized/actions)[![Build Status](https://travis-ci.org/rehmanuet/WebdriverIO-Cucumber-Dockerized.svg?branch=master)](https://travis-ci.org/rehmanuet/WebdriverIO-Cucumber-Dockerized)


POC of WebdriverIO on React-Based application with Mocha, Cucumber, ChaiJS and Allure
<meta property="og:image" content="https://github.com/rehmanuet/DataEssential/blob/master/junk/pre.png?raw=true"/>
## Stack

<img src="https://img.stackshare.io/service/4185/webdriver.io.png?raw=true?raw=true" width="90" height="90" /><img src="https://cdn.freebiesupply.com/logos/large/2x/cucumber-logo-png-transparent.png?raw=true" width="90" height="90" /><img src="https://camo.githubusercontent.com/c14c2f174870d15a031245b3d3cd57f648e50fb2/68747470733a2f2f7777772e706172616469676d616469676974616c2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031372f30322f312e706e67?raw=true" height="90"/><img src="https://i.pinimg.com/originals/48/4d/9a/484d9a03c676a55671a9d257a48c4378.png?raw=true?raw=true" width="110" height="80" /><img src="https://images.ctfassets.net/k62me4xboi1l/55FkKC6k4E6I80qOOu2A0M/4b03468aed1c04a639acfa2c513cbcae/angular-sdk-03.svg" width="110" height="90" /><img src="https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png?raw=true" width="90" height="90" /><img src="https://travis-ci.org/images/logos/TravisCI-Mascot-1.png?raw=true" width="90" height="90" />

## Features

```
Test Application: ReactJS 
Design Pattern: Page Object Model (3-Layers)
Assertion: Chai Assertion with Promises Handling
Framework: Mocha Framework and Jasmine Framework
BDD: Cucumber
Reporter: Allure Report and Spec Reporter
Runner: Local (Native Chrome Driver) and Selenium Standalone Server
Container: Docker
CICD: CircleCI, Travis CI and GitHub Action Pipeline
```


## Getting Started

These instructions will get you a copy of the project up and running on your local machine or Docker Container for development and testing purposes.

### Prerequisites


```
1- VS Code or WebStorm By JetBeans - IDE
2- Node.js Library
```

### Installing (Let's Get Started)

A step by step procedure to run the project on local machine

```
1) Clone the repo with "git clone https://github.com/rehmanuet/WebdriverIO-Cucumber-Dockerized.git"
2) Open the cloned directory in VS Code.
3) Execute "npm install" (It'll download all the dependencies mentioned in package.json)
```

## Execution on Local Machine (Peanut Butter)

### To run Cucumber based test (Framework: Mocha, Reporting: Allure)
```
npm run local_cucumber_test
```

### To run Kayak's Flow (Framework: Mocha, Reporting: Allure)
```
npm run local_kayak_test
```

## Reporting (Spec and Allure Reporter)

###### Allure Reporter

```
npm run show_report
```

<img src="https://raw.githubusercontent.com/rehmanuet/DataEssential/master/junk/Allure_Report.JPG?raw=true" width="900" height="400" />

###### Spec Reporter

<img src="https://raw.githubusercontent.com/rehmanuet/DataEssential/master/junk/spec%20reporter.JPG?raw=true" width="900"/>


========================================

## Running WebdriverIO Tests on Docker (Things about get little dirty)


Now time has come to show you how to use docker to run tests. Here I would setup a Selenium Standalone server on docker and run the tests.

### Prerequisites

Docker needs to be installed on your machine. One can download it from [Docker's website](https://www.docker.com) and follow the [documentation](https://docs.docker.com/) accordingly.
It is assumed that , one knows the basics of Docker for this tutorial unless you live in stone-age :D .

### Setup
To ensure Docker is installed sucessfully , type :
``` shell
docker -v
```
and one would see a similar output , depending on the version of docker installed :
``` shell
C:\Users\abdur.rehman>docker -v
Docker version 19.03.2, build 6a30dfc
``` 

### Step 0 - Download the docker images for node v10 and Selenium Standalone Server

``` shell
docker pull node:10
docker pull vvoyer/selenium-standalone:latest
```
One could pull 'node-firefox' if they want to work with firefox node (Personally I hate firefox, So goddamn slow). 
For more information about the different images one can work with , please look at [Docker Selenium Images List](https://github.com/SeleniumHQ/docker-selenium/blob/master/README.md)


### Step 1 - Build the Docker Container
``` shell
docker build .
```

Keep calm , It will take sometime to get ready.

### Step 2 - Compose Docker file
``` shell
docker-compose build

```

### Step 3 - Initializing Docker and Running the tests

``` shell
docker-compose up
```
<img src="https://github.com/rehmanuet/DataEssential/blob/master/junk/docker.PNG?raw=true" width="900"/>




_contact:`rehmanuet[at]yahoo[dot]com`_ *or* _[LinkedIn](https://www.linkedin.com/in/rehmanuet/)_
