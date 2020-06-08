import API from '../API';

import { endpoints } from '../../config/endpoints';
import { joinUrlWithParam } from '../../utils';

export const getEndpoint = (which) => endpoints.user[which];

export const createUser = ({
  user,
} = {}) => {
  const ENDPOINT = getEndpoint('create');

  return API({
    baseURL: joinUrlWithParam(ENDPOINT.url),
    method: ENDPOINT.method,
    data: user,
  });
};

export const getUsers = () => {
  const ENDPOINT = getEndpoint('index');

  return API({
    baseURL: joinUrlWithParam(ENDPOINT.url),
    method: ENDPOINT.method,
  });
};

export const removeUser = ({ id }) => {
  const ENDPOINT = getEndpoint('destroy');

  return API({
    baseURL: joinUrlWithParam(ENDPOINT.url.replace(':user_id', id)),
    method: ENDPOINT.method,
  });
};


export const updateUser = ({
  user,
  id,
} = {}) => {
  const ENDPOINT = getEndpoint('update');

  return API({
    baseURL: joinUrlWithParam(ENDPOINT.url.replace(':user_id', id)),
    method: ENDPOINT.method,
    data: user,
  });
};

export default {
  createUser,
  getUsers,
  removeUser,
  updateUser,
};
