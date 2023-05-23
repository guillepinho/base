import httpRequests from './apiRequest';

const USER = '/user';

const routes = {
  user: {
    create: (payload) => httpRequests.post(`${USER}/create`, payload),
    login: (payload) => httpRequests.post(`${USER}/login`, payload),
  },
};

export default routes;
