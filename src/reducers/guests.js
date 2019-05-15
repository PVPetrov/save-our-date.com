import { combineReducers } from 'redux';
import * as c from '../constants/guests';

const all = (state = [], { type, data }) => {
  switch (type) {
    case c.GET_GUESTS_SUCCESS:
      return data;
    case c.UPDATE_GUEST_SUCCESS:
      return state.map((g) => {
        if (g.id === data.id) return data;
        return g;
      });
    default:
      return state;
  }
};

const loading = (state = false, { type }) => {
  switch (type) {
    case c.GET_GUESTS:
      return true;
    case c.GET_GUESTS_SUCCESS:
    case c.GET_GUESTS_ERROR:
      return false;
    default:
      return state;
  }
};

export default combineReducers({ all, loading });
