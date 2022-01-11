# react-native-with-redux-thunk-template
this template contains react": "17.0.1", react native: "0.64.2", redux-thunk, firebase-notifications, firebase-crashlytics, bottom-tabs, drawer, and vector icons.

# Getting Started

## Prerequisites

You'll need [Node](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/en/) and Watchman installed for iOS on MacBook (`brew install watchman`)

### Setting up iOS

1. iOS development environment:

Follow the official docs [here](https://reactnative.dev/docs/environment-setup). Select "React Native CLI Quickstart" tab

Download Xcode version 13. You can find all available versions of Xcode at [Apple's Developer Portal 🔐](http://developer.apple.com/download/more/).

Ask your mentor to add you on the [firebase.console](https://console.firebase.google.com/project/onion-app-e3149/settings/iam) to be able to release.

### Setting up Android

1. Android development environment:

Follow the official docs [here](https://reactnative.dev/docs/environment-setup). Select "React Native CLI Quickstart" tab

2. Create a virtual device:

[Create a virtual device](https://developer.android.com/studio/run/managing-avds) on which to run the Android app.

### Install dependencies
```sh
yarn install
```
##### For ios install pods too
```sh
cd ios && pod install && cd ..
```

## Run the app

Start the react-native bundler:

```sh
yarn start
```

### Run the iOS app

Ask for your apple developer account to be added on the project and login with your apple id under settings/accounts/apple Id

Open the app in Xcode:

```sh
open Onion.xcworkspace
```

From Xcode, run the app by hitting `Product > Run` (or ⌘R). This will start the Onion app in an iOS simulator, pointed at Onion's staging environment.

### Run the Android app

```sh
yarn android
```

This will start the Onion app in an Android emulator, pointed at Onion's staging environment.

## Connect a device

#### iOS
We use Xcode's auto-codesigning. It should magically "just work" if you log in to Xcode with an iTunes account
which is on the `Shuja Ahmad` team. When you connect an iPhone to your machine, Xcode will prompt you to join a team, If you have to choose a team, choose `Shuja Ahmad`.

#### Android
1. On your Android device go to Settings > About Phone
2. Find the 'Build number' menu item and tap it 5 times to enable developer mode.
3. Now go to Settings > System > Developer Options, and turn on 'USB Debugging'
4. Connect your device to your computer via USB cable. After a moment the device should show a prompt for you to allow USB debugging for your computer. Press yes.
5. After that run `yarn android` from within the eigen directory. This will build the app, install it on your device, and run it.
