import { CREATE_NOTIFICATION, GET_USER_NOTIFICATIONS } from './ActionType';

// Action creator for creating a new notification
export const createNotification = (data) => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:5454/api/notifications/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data.jwt,
      },
      body: JSON.stringify(data.data),
    });

    const resData = await res.json();

    dispatch({ type: CREATE_NOTIFICATION, payload: resData });
  } catch (error) {
    console.log('Error - ', error);
  }
};

// Action creator for getting notifications for a specific user
export const getUserNotifications = (data) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5454/api/notifications/user/${data.userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + data.jwt,
      },
    });

    const resData = await res.json();

    dispatch({ type: GET_USER_NOTIFICATIONS, payload: resData });
  } catch (error) {
    console.log('Error - ', error);
  }
};