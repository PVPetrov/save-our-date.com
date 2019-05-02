import * as c from '../constants/user';

const initState = {
  name: 'Unknown user'
};

const user = (state = initState, { data, type }) => {
  switch (type) {
    case c.SET_USER:
      return {
        ...state,
        // eslint-disable-next-line linebreak-style
        name: data
      };
    default:
      return state;
  }
};

export default user;
