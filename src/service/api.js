import axios from 'axios';
import { apiUrl } from '../constants';

export const getGuests = () => axios(apiUrl);

export const updateGuest = guest => axios({
  method: 'PUT',
  baseURL: apiUrl,
  data: guest
});
