import Vuex from 'vuex'

const calcStatus = (status, improve) => {
  status += improve

  if (status > 100) {
    return 100
  } else if (status < 0) {
    return 0
  } else {
    return status
  }
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      status: {
        energy: 100,
        fullness: 100,
        happiness: 100,
        money: 500
      },
      prevStatus: {
        energy: 100,
        fullness: 100,
        happiness: 100,
        money: 500
      }
    },
    getters: {
      getStatus: state => {
        return {
          energy: state.status.energy,
          fullness: state.status.fullness,
          happiness: state.status.happiness,
          money: state.status.money
        }
      },
      getPrevStatus: state => {
        return {
          energy: state.prevStatus.energy,
          fullness: state.prevStatus.fullness,
          happiness: state.prevStatus.happiness,
          money: state.prevStatus.money
        }
      }
    },
    mutations: {
      setStatus(state, { energy, fullness, happiness, money }) {
        state.prevStatus = state.status

        const newStatus = {
          energy: calcStatus(state.status.energy, energy),
          fullness: calcStatus(state.status.fullness, fullness),
          happiness: calcStatus(state.status.happiness, happiness),
          money: calcStatus(state.status.money, money)
        }

        state.status = newStatus
      }
    },
    actions: {
      improveStatus({ commit }, payload) {
        commit('setStatus', payload)
      }
    }
  })
}

export default createStore
