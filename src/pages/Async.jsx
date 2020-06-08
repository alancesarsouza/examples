import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import applications from '../redux/applications/applications.actions';
import { applicationsSelectors } from '../redux/selectors';


const Async = () => {
  const dispatch = useDispatch();
  const app = useSelector(applicationsSelectors.getApplicationId);

  const execute = () => {
    dispatch(applications.addForeignKey({ config: { user: 'TEST', id: 5 } }));
  };

  React.useEffect(() => {
    if (!app) {
      dispatch(applications.fetchApplicationForId({ id: 1 }));
    }
  }, [app, dispatch]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <button onClick={execute}>CLICK</button>
        <pre>{app && JSON.stringify(app, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Async;
