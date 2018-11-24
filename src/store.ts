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
    lastSeen: {
      phoneNo: '',
      zone: 1,
      time: 0
    },
    // CHANGE THIS VALUE TO THE URL WHERE THE API IS BEING CALLED
    webApiUrl: '13.250.105.63:8080'
  },
  mutations: {
    SET_LAST_SEEN(state, payload) {
      state.lastSeen = payload
    },
  },
  actions: {
    queryTracker(context, payload) {
      axios
        .get(context.state.webApiUrl + '/tracker', {
          params: {
            number: payload
          }
        }).then(res => {
          context.commit('SET_LAST_SEEN', {
            phoneNo: payload,
            zone: res.data.id.charAt(1),
            time: res.data.lastSeen
          })
        }).catch(err => {
          console.log(err)
          context.commit('SET_LAST_SEEN', {
            phoneNo: payload,
            zone: 2,
            time: 2359
          })
        })
    }
  },
})
