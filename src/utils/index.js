import { transform, isEqual, isObject } from 'lodash';

import { API_HOST } from '../config/endpoints';


export const objectDifference = (object, base) => transform(object, (result, value, key) => {
  if (!isEqual(value, base[key])) {
    // eslint-disable-next-line no-param-reassign
    result[key] = isObject(value) && isObject(base[key])
      ? objectDifference(value, base[key])
      : value;
  }
});

export const joinUrlWithParam = (locale) => `${API_HOST}/${locale}`;

export default {
  objectDifference,
  joinUrlWithParam,
};
