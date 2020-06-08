import constants from './applications.constants';

const updateApplication = ({ application }) => ({
  type: constants.SET_APPLICATION,
  payload: { application },
});

// SAGA
const createApplication = ({ application }) => ({
  type: constants.CREATE_APPLICATION,
  payload: { application },
});


const fetchApplicationForId = ({ id }) => ({
  type: constants.FETCH_APPLICATION,
  payload: { id },
});

const removeApplication = ({ id }) => ({
  type: constants.DESTROY_APPLICATION,
  payload: { id },
});

// application : { endpoint: '/users', id: 2}
// key: 'company_id'
// id: 7
const addForeignKey = ({ config }) => ({
  type: constants.ADD_FOREIGN_KEY,
  payload: { config },
});

const removeForeignKey = ({ application, key, id }) => ({
  type: constants.DESTROY_FOREIGN_KEY,
  payload: { application, key, id },
});

export default {
  createApplication,
  fetchApplicationForId,
  removeApplication,
  addForeignKey,
  removeForeignKey,
  updateApplication,
};
