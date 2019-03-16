export default {
  addSite: (state, payload) => state.sitesList.push(payload),
  setSites: (state, payload) => state.sitesList = payload
};
