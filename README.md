# live-chat
A simple live chat application written in Vue, using [Firebase](https://firebase.google.com) (Firestore and Authentication) as a back-end.

## Before you set it up
- Create a Firebase project and enable the Email/Password authentication service.

- Copy the config object of your Firebase object.

- In your project directory, create a file named `apiKey.js` inside `src/firebase/`, and paste the config object in it, exporting it as default.
Obviously, for security reasons, the file has been ignored in `.gitignore`.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
