import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css';

Vue.use(Vuex)
Vue.use(Buefy)

export default new Vuex.Store({
  state: {
    phoneNo: '',
    beacons: ['iot16', 'iot31'],
    lastSeen: {
      zone: 1,
      time: 2110
    },
    // CHANGE THIS VALUE TO THE URL WHERE THE API IS BEING CALLED
    webApiUrl: 'lostwebsvc:8880'
  },
  mutations: {
    SET_PHONE_NO(state, phoneNo){
      state.phoneNo = phoneNo
    },
    SET_BEACON_DETAILS(state, payload){
      console.log(payload)
    }
  },
  actions: {

  },
})
