import constants from './applications.constants';

const initialState = {
  application: null,
  loading: false,
  dialog: { visible: false },
  errorDialog: { visible: false },
};

const reducer = (state = { ...initialState }, { type, payload }) => {
  switch (type) {
    case constants.SET_APPLICATION: {
      return { ...state, application: payload.application };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
