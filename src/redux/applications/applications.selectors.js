import { NAME_APPLICATION } from '../../config/constants';

const getApplication = (store) => store[NAME_APPLICATION];
const getApplicationId = (store) => getApplication(store).application;

export default {
  getApplication,
  getApplicationId,
};
