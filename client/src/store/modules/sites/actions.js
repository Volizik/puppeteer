export default {
  addSite: async ({commit}, payload) => {
    await fetch(`${process.env.VUE_APP_API_URL}/add_site`, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(response => {
          console.log(response)
          commit('addSite', response)
      })
      .catch(e => console.log(e))
  }
};
