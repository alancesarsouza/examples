const baseUrl = 'http://localhost:3030';

export const API_HOST = baseUrl;

const user = {
  index: {
    url: 'users',
    method: 'GET',
  },

  create: {
    url: 'users',
    method: 'POST',
  },

  update: {
    url: 'users/:user_id',
    method: 'PUT',
  },

  show: {
    url: 'users/:user_id',
    method: 'GET',
  },

  destroy: {
    url: 'users/:user_id',
    method: 'DELETE',
  },
};

const applications = {
  index: {
    url: 'applications',
    method: 'GET',
  },

  create: {
    url: 'applications',
    method: 'POST',
  },

  update: {
    url: 'applications/:application_id',
    method: 'PUT',
  },

  show: {
    url: 'applications/:application_id',
    method: 'GET',
  },

  destroy: {
    url: 'applications/:application_id',
    method: 'DELETE',
  },
};

export const endpoints = {
  user,
  applications,
};

export default {
  endpoints,
  API_HOST,
};
