export default {
    getAllSites: async ({commit}) => {
        await fetch(`${process.env.VUE_APP_API_URL}/sites`)
            .then(response => response.json())
            .then(response => {
                commit('setSites', response)
            })
            .catch(e => console.log(e))
    },
    addSite: async ({commit}, payload) => {
        await fetch(`${process.env.VUE_APP_API_URL}/sites/add`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(response => {
                commit('addSite', response)
            })
            .catch(e => console.log(e))
    },
    startBot: async () => {
        await fetch(`${process.env.VUE_APP_API_URL}/bot/start`, {
            method: 'POST'
        }).catch(e => console.log(e))
    },
    stopBot: async () => {
        await fetch(`${process.env.VUE_APP_API_URL}/bot/stop`, {
            method: 'POST'
        }).catch(e => console.log(e))
    }
};
