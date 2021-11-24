import React, { useEffect, useRef } from "react";
import { LogBox, StatusBar } from 'react-native'
import { store } from './store'
import { Provider } from 'react-redux';
import messaging from "@react-native-firebase/messaging";
import NotificationPopup from "react-native-push-notification-popup";
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen'
import { useDispatch } from 'react-redux'

import AppNavigator from './navigation'
import * as Navigator from './navigation/RootNavigation';
import { NotificationIcon } from "./assets/icons";
import { userSessionChangeState } from "./actions/userSession";

LogBox.ignoreAllLogs(true)
StatusBar.setTranslucent(true)
StatusBar.setBackgroundColor('#00000000')
StatusBar.setBarStyle('dark-content')

const MainRouting = (props) => {

  const dispatch = useDispatch()

  const popupRef = useRef(null);
  let notificationOpenedAppListener = useRef(null).current
  let initialNotificationListener = useRef(null).current
  let notificationListener = useRef(null).current

  useEffect(() => {
    SplashScreen.hide();
    createNotificationListenersLatest();

    return () => {
      notificationOpenedAppListener = null
      initialNotificationListener = null
      notificationListener = null
    }
  }, []);

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    console.log("requestUserPermission", "enabled", enabled);
  };
  const createNotificationListenersLatest = async () => {
    await requestUserPermission();

    notificationOpenedAppListener = messaging().onNotificationOpenedApp(
      async (remoteMessage) => {
        if (remoteMessage) {
          console.log("notificationOpenedAppListener-remoteMessage", JSON.stringify(remoteMessage))
        }
      }
    );

    initialNotificationListener = messaging().getInitialNotification().then(async remoteMessage => {
      if (remoteMessage) {
        console.log("initialNotificationListener-remoteMessage", JSON.stringify(remoteMessage))
      }
    }).catch((error) => {
      console.log("initialNotificationListener-error", error)
    });

    notificationListener = messaging().onMessage(async (remoteMessage) => {
      console.log(
        "createNotificationListenersLatest",
        "notificationListener-remoteMessage",
        JSON.stringify(remoteMessage)
      );
      const { notification } = remoteMessage;
      const { title, body } = notification;
      showNotification(title, body);
    });
  };

  const handleNotification = (title, body) => {
    Navigator.navigate("AfterSplash", {
      screen: "NotificationsScreen"
    })
  };

  const showNotification = (title, body) => {
    dispatch(userSessionChangeState({ notification_status: 1 }))
    if (popupRef.current) {
      popupRef.current.show({
        onPress: () => handleNotification(title, body),
        appIconSource: NotificationIcon,
        appTitle: "Onion",
        timeText: "Now",
        title: title,
        body: body,
        slideOutTime: 5000,
      });
    }
  };

  return (
    <>
      <AppNavigator />
      <NotificationPopup ref={popupRef} style={{ zIndex: 99 }} />
      <FlashMessage position="bottom" floating={true} />
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainRouting />
    </Provider>
  );
};

export default App