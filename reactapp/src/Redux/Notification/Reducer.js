import { CREATE_NOTIFICATION, GET_USER_NOTIFICATIONS } from "./ActionType";

const initialState = {
  createdPost: null,
  userPost: [],
  reqUserPost: [],
  unsavePost: [],
  singlePost: null,
  deletedPost: null,
  notifications: [], // Include the notifications array
};

export const notificationReducer = (store = initialState, { type, payload }) => {
  if (type === CREATE_NEW_POST) {
    return { ...store, createdPost: payload };
  } else if (type === GET_USER_POST) {
    return { ...store, userPost: payload };
  } else if (type === LIKE_POST) {
    return { ...store, likePost: payload };
  } else if (type === REQ_USER_POST) {
    return { ...store, reqUserPost: payload };
  } else if (type === UNSAVE_POST) {
    return { ...store, unsavePost: payload };
  } else if (type === GET_SINGLE_POST) {
    return { ...store, singlePost: payload };
  } else if (type === DELETE_POST) {
    return { ...store, deletedPost: payload };
  } else if (type === CREATE_NOTIFICATION) {
    return { ...store, notifications: [payload, ...store.notifications] };
  } else if (type === GET_USER_NOTIFICATIONS) {
    return { ...store, notifications: payload };
  }

  return store;
};
