import {createStore} from 'vuex';
import {api_url} from "@/_config";
import axios from 'axios';

export const store = createStore({
  state: {
    status: '',
    services: [],
    loadingServices: true,
  },
  actions: {
    loadServices({
               commit
             }) {
      axios.get(api_url + 'services').then((response) => {
        console.log(response.data, this)
        commit('updateServices', response.data.services)
        commit('changeLoadingServicesState', false)
      })
    }
  },
  mutations: {
    updateServices(state, services) {
      state.services = services
    },
    changeLoadingServicesState(state, loading) {
      state.loading = loading
    }
  }
});
