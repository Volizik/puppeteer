export default {
  addSite: async ({commit}, payload) => {
    console.log(payload)
    commit('addSite', payload)
  }
};
