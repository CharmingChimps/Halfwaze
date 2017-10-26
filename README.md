# Halfwaze

> Find activities for you and your friend half way between your locations!

## Team

  - __Development Team Members__: 
    - Alec Draymore - Full Stack Engineer
    - Chetanpreet Malhi - Full Stack Engineer
    - Walter Shub - Full Stack Engineer

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

- Try out the live demo of Halfwaze [here](https://halfwaze-v2.herokuapp.com/)!

## Requirements

- Node 6.11.x

## Development

To run a local instance ...

Run ```npm install``` to install all node modules.

Add a file ```Halfwaze\server\config.js```. It must contain: 
```
  module.exports = {
    google: {
      APIKEY: 'YOUR_KEY',
    },
    darksky: 'YOUR_KEY',
    yelpClientID: 'YOUR_ID',
    yelpClientSecret: 'YOUR_KEY',
  };
```

Run ```npm start``` to start the server.

In a separate terminal window, run ```webpack -d --watch``` to start webpack.

\*You may need to ```npm install -g webpack```.

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

to run a local instance from within root:
```sh
npm run react-dev
npm run server-dev
mongod
```

## Screenshot

![](images/halfwaze.png?raw=true)

## Technology Stack

![](images/techstack.jpg?raw=true)
