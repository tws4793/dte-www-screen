import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Vuex)
Vue.use(Buefy)

export default new Vuex.Store({
  state: {
    beacons: ['iotsmusg16', 'iotsmusg31'],
    webApiUrl: 'http://13.250.122.106:8080' // CHANGE THIS VALUE TO THE URL WHERE THE API IS BEING CALLED
  },
  mutations: {
  },
  actions: {
  },
})
