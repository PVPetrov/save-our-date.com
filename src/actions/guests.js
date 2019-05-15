/* eslint-disable arrow-parens */
import * as c from '../constants/guests';
import * as api from '../service/api';

export const getGuests = () => async dispatch => {
    dispatch({ type: c.GET_GUESTS });
    try {
        const { data } = await api.getGuests();
        dispatch({ type: c.GET_GUESTS_SUCCESS, data });
    } catch (err) {
        dispatch({ type: c.GET_GUESTS_ERROR });
    }
};

export const upadteGuest = guest => async dispatch => {
    dispatch({ type: c.UPDATE_GUEST });
    try {
        const updatedGuest = { ...guest, coming: !guest.coming };
        await api.updateGuest(updatedGuest);
        dispatch({ type: c.UPDATE_GUEST_SUCCESS, data: updatedGuest });
    } catch (err) {
        dispatch({ type: c.UPDATE_GUEST_ERROR });
    }
};
