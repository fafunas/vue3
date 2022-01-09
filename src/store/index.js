import { createStore } from 'vuex'
import  Axios from 'axios'
import axios from 'axios'

export default createStore({

  state: {
    comidas:[]
  },

  getters: {
    comidas: state => state.comida
  },

  mutations: {
    COMIDAS(state,payload){
      state.comidas = payload
    },
    AGREGAR_COMIDAS(state,payload){
      state.comidas.push(payload)
    }
  },

  actions: {
    obtenerComidas(context){
      Axios.get("https://61b24f08c8d4640017aaf359.mockapi.io/comidas")
      .then ((data)=>{
        context.commit("COMIDAS", data.data)
      })
    },

    agregarComida(context,payload){
      axios.post('https://61b24f08c8d4640017aaf359.mockapi.io/comidas',payload)
      .then((data)=>{
        context.commit('AGREGAR_COMIDAS',data.data)
      })
    }
  },

  modules: {
  }
})
