import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  eventMotto: {
    style: { display: "" , animation: "",opacity: ""}
  },
  eventCover1: {
    style: { display: "",opacity: ""}
  },  
  eventInput0: {
    style: { display: "",opacity: "", top: ""},
    classList: {add: Function},
    value: ""
  },
  eventSection0: {
    style: { display: "",opacity: "",top: ""}
  },
  eventCover: {
    style: { display: "",opacity: ""}
  },
  eventTitle: {
    style: {top:""}
  }
}
export default new Vuex.Store({
  
  state,
  mutations: {
    
  },
  actions: {

  },
  modules: {

  }
})