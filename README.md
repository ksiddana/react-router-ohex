# OHEx

## What is OHEx? ##

OHEx contains several React applications that makes use of React Tabs, [React Router v4](https://reacttraining.com/react-router/) and [webpack](https://webpack.js.org/guides/getting-started/) to build a large React Application. The advantages of using React are not immediately understood when you are building tiny applications, however when you put these together to build a really a large application, you begin to see the larger picture, its code reuse and modularity aspects come in handy.

Checkout a live working [Github Demo](https://ohex.herokuapp.com/).

### Setup & Installation ###

Go ahead and clone the git repository as shown below. Install all npm dependencies requires for react-router-ohex application.

```
 $ git clone git@github.com:ksiddana/react-router-ohex.git
 $ cd react-router-ohex
 $ npm install
```
#### Development Build ####

```
$ npm run dev
```

The application can be started by using the `npm run dev` command. This is the development build that is used for debugging. The development build is deployed on `$PORT = 4000`

Hop over to your browser and go to [localhost:4000](http://localhost:4000)



#### Production build ####

To build a production build run the following `npm` command. This will create a `bundle.js` file which is deployed for production. The production build is serverd on `$PORT = 3000`

```
$ npm run build
$ npm run prod
```

Hop over to your browser and open [localhost:3000](http://localhost:3000)

### Contact

* Karun Siddana
