import { showMessage } from 'react-native-flash-message';

export const showErrorMsg = (msgStr) =>
  showMessage({
    message: msgStr,
    type: 'danger',
  });

export const showSuccessMsg = (msgStr) =>
  showMessage({
    message: msgStr,
    type: 'success',
  });

export const showWarningMsg = (msgStr) =>
  showMessage({
    message: msgStr,
    type: 'warning',
  });
