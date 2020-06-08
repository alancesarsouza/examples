import API from '../API';

import { endpoints } from '../../config/endpoints';
import { joinUrlWithParam } from '../../utils';

export const getEndpoint = (which) => endpoints.applications[which];

export const _createApplication = ({
  application,
} = {}) => {
  const ENDPOINT = getEndpoint('create');

  return API({
    baseURL: joinUrlWithParam(ENDPOINT.url),
    method: ENDPOINT.method,
    data: application,
  });
};

export const _fetchApplication = ({ id }) => {
  const ENDPOINT = getEndpoint('show');
  console.log('API', ENDPOINT);

  return API({
    baseURL: joinUrlWithParam(ENDPOINT.url.replace(':application_id', id)),
    method: ENDPOINT.method,
  });
};

export const _removeApplication = ({ id }) => {
  const ENDPOINT = getEndpoint('destroy');

  return API({
    baseURL: joinUrlWithParam(ENDPOINT.url.replace(':application_id', id)),
    method: ENDPOINT.method,
  });
};

export const _updateApplication = ({
  application,
  id,
} = {}) => {
  const ENDPOINT = getEndpoint('update');

  return API({
    baseURL: joinUrlWithParam(ENDPOINT.url.replace(':application_id', id)),
    method: ENDPOINT.method,
    data: application,
  });
};

export default {
  _createApplication,
  _fetchApplication,
  _removeApplication,
  _updateApplication,
};
