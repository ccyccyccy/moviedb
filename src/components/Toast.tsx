import { ToastAndroid } from 'react-native';

export const Toast = {
  show: (message: string, duration = ToastAndroid.SHORT) => {
    ToastAndroid.show(message, duration);
  },
};
