import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css';
import feathersVuex from 'feathers-vuex'
import feathersClient from './feathers-client.js'

const { service, FeathersVuex } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex)
Vue.use(Buefy)
Vue.use(FeathersVuex)

export default new Vuex.Store({
  state: {
    phoneNo: '',
    beacons: ['iot16', 'iot31'],
    lastSeen: {
      zone: 1,
      time: 2110
    }
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
  plugins: [
    service('pi'),
    service('stone')
  ]
})
