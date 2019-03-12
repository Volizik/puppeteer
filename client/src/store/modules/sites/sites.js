import getters from './getters';
import actions from './actions';
import mutations from './mutations';
const state = {
  sitesList: [
    {
      logo: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png',
      name: 'Google',
      url: 'www.google.com',
      views: '10',
      scroll: '20',
      status: 'Выполнено'
    }
  ]
};
export default {
  state,
  getters,
  actions,
  mutations
};
