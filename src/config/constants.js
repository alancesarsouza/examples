
import messages from './messages';

export const NAME_APPLICATION = 'EXAMPLES_APPLICATION';
const project = '/projeto';

const routes = {
  project,
  async: `${project}/assincronas`,
  componentsPage: `${project}/components`,
};

export { routes };
export { messages };

export default {
  NAME_APPLICATION,
  messages,
  routes,
};
