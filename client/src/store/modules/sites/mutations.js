export default {
  addSite: (state, payload) => state.sitesList.push(payload),
  setSites: (state, payload) => state.sitesList = payload,
  deleteSite: (state, id) => state.sitesList = state.sitesList.filter(site => site.id !== id),
};
