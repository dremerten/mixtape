export const CLEAR_ALL_ALERTS = 'CLEAR_ALL_ALERTS';
export const RECEIVE_ALERT = 'RECEIVE_ALERT';

export const clearAllAlerts = () => ({
  type: CLEAR_ALL_ALERTS
});

// export const receiveAlert = alert => ({
//   type: RECEIVE_ALERT, alert
// });

// export const receiveAndClearAlert = alert => dispatch => {
//   dispatch(receiveAlert(alert));
//   setTimeout(() => dispatch(clearAlerts()), 2000);
// };
