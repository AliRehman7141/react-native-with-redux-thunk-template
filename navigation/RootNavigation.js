import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export const navigate = (name = '', params = {}) => {
  // Perform navigation if the app has mounted
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
};

export const goBack = () => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.goBack();
  }
};

export const push = (...args) => {
  navigationRef.current?.dispatch(StackActions.push(...args));
};

export const reset = (...args) => {
  navigationRef.current?.dispatch(StackActions.reset(...args));
};
