
import messages from './messages';

export const NAME_APPLICATION = 'EXAMPLES_APPLICATION';
const register = '/register'
const projects = '/projects'


const routes = {
  projects,
  async: `${projects}/assincronas`,
  register,
  login: `${register}/login`
};


export { routes };
export { messages };

export default {
  NAME_APPLICATION,
  messages,
  routes,
};
