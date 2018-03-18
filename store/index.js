import Vuex from 'vuex'
import filter from 'lodash/filter'
import { calcStatus } from '../utilities'

const createStore = () => {
  return new Vuex.Store({
    state: {
      day: 1,
      newDay: false,
      period: 1,
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
      },
      fixcost: 240,
      lowEnergyDays: 0,
      lowFullnessDays: 0,
      lowHappinessDays: 0,
      lowMoneyDays: 0,
      nowEvent: 'eat',
      events: ['start'],
      pause: false,
      objects: [
        'bed',
        'mama',
        'phone',
        'computer',
        'window',
        'recorder',
        'paper',
        'self',
        'fidget',
        'clock',
        'mat',
        'sun',
        'lay',
        'pot',
        'sock',
        'cherphang',
        'pig'
      ]
    },
    getters: {
      getDay: state => {
        return state.day
      },
      getNewDay: state => {
        return state.newDay
      },
      getPeriod: state => {
        return state.period
      },
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
      },
      getFixcost: state => {
        return state.fixcost
      },
      getLowEnergyDays: state => {
        return state.lowEnergyDays
      },
      getLowFullnessDays: state => {
        return state.lowFullnessDays
      },
      getLowHappinessDays: state => {
        return state.lowHappinessDays
      },
      getLowMoneyDays: state => {
        return state.lowMoneyDays
      },
      getNowEvent: state => {
        return state.nowEvent
      },
      getEvents: state => {
        return state.events
      },
      getPause: state => {
        return state.pause
      },
      getObjects: state => {
        return state.objects
      }
    },
    mutations: {
      setStartGame(state) {
        state.day = 1
        state.newDay = false
        state.period = 1
        state.status = {
          energy: 100,
          fullness: 100,
          happiness: 100,
          money: 500
        }
        state.prevStatus = {
          energy: 100,
          fullness: 100,
          happiness: 100,
          money: 500
        }
        state.fixcost = 240
        state.lowEnergyDays = 0
        state.lowFullnessDays = 0
        state.lowHappinessDays = 0
        state.lowMoneyDays = 0
        state.nowEvent = 'eat'
        state.events = ['start']
        state.pause = false
        state.objects = [
          'bed',
          'mama',
          'phone',
          'computer',
          'window',
          'recorder',
          'paper',
          'self',
          'fidget',
          'clock',
          'mat',
          'sun',
          'lay',
          'pot',
          'sock',
          'cherphang',
          'pig'
        ]
      },
      setPeroid(state, period) {
        let newPeriod = state.period + period

        if (newPeriod > 8) {
          state.day++
          state.newDay = true
          state.period = newPeriod % 8
        } else {
          state.period = newPeriod
        }
      },
      setNewDay(state, newDay) {
        state.newday = newDay
      },
      setStatus(state, { energy, fullness, happiness, money }) {
        state.prevStatus = state.status

        const newStatus = {
          energy: calcStatus(state.status.energy, energy),
          fullness: calcStatus(state.status.fullness, fullness),
          happiness: calcStatus(state.status.happiness, happiness),
          money: state.status.money + money
        }

        state.status = newStatus
      },
      setEnergy(state, energy) {
        state.prevStatus = state.status

        const newStatus = {
          energy: calcStatus(state.status.energy, energy),
          fullness: calcStatus(state.status.fullness, 0),
          happiness: calcStatus(state.status.happiness, 0),
          money: state.status.money + 0
        }

        state.status = newStatus
      },
      setFullness(state, fullness) {
        state.prevStatus = state.status

        const newStatus = {
          energy: calcStatus(state.status.energy, 0),
          fullness: calcStatus(state.status.fullness, fullness),
          happiness: calcStatus(state.status.happiness, 0),
          money: state.status.money + 0
        }

        state.status = newStatus
      },
      setHappiness(state, happiness) {
        state.prevStatus = state.status

        const newStatus = {
          energy: calcStatus(state.status.energy, 0),
          fullness: calcStatus(state.status.fullness, 0),
          happiness: calcStatus(state.status.happiness, happiness),
          money: state.status.money + 0
        }

        state.status = newStatus
      },
      setMoney(state, money) {
        state.prevStatus = state.status

        const newStatus = {
          energy: calcStatus(state.status.energy, 0),
          fullness: calcStatus(state.status.fullness, 0),
          happiness: calcStatus(state.status.happiness, 0),
          money: state.status.money + money
        }

        state.status = newStatus
      },
      setFixcost(state, fixcost) {
        state.fixcost = fixcost
      },
      setLowEnergyDays(state, energy) {
        if (energy) {
          state.lowEnergyDays += energy
        } else {
          state.lowEnergyDays = 0
        }
      },
      setLowFullnessDays(state, fullness) {
        if (fullness) {
          state.lowFullnessDays += fullness
        } else {
          state.lowFullnessDays = 0
        }
      },
      setLowHappinessDays(state, happiness) {
        if (happiness) {
          state.lowHappinessDays += happiness
        } else {
          state.lowHappinessDays = 0
        }
      },
      setLowMoneyDays(state, money) {
        if (money) {
          state.lowMoneyDays += money
        } else {
          state.lowMoneyDays = 0
        }
      },
      setNowEvent(state, event) {
        state.nowEvent = event
      },
      addNewEvent(state, event) {
        state.events.push(event)
      },
      removeNewEvent(state, event) {
        state.events = filter(state.events, e => e !== event)
      },
      setStatePause(state, pause) {
        state.pause = pause
      },
      setStateObjects(state, objects) {
        state.objects = objects
      },
      removeStateObject(state, object) {
        state.objects = filter(state.objects, o => o !== object)
      }
    },
    actions: {
      setStart({ commit }) {
        commit('setStartGame')
      },
      increasePeriod({ commit }, period = 1) {
        commit('setPeroid', period)
      },
      setOldDay({ commit }) {
        commit('setNewDay', false)
      },
      improveStatus({ commit }, payload) {
        commit('setStatus', payload)
      },
      improveEnergy({ commit }, energy) {
        commit('setEnergy', energy)
      },
      improveFullness({ commit }, fullness) {
        commit('setFullness', fullness)
      },
      improveHappiness({ commit }, happiness) {
        commit('setHappiness', happiness)
      },
      improveMoney({ commit }, money) {
        commit('setMoney', money)
      },
      changeFixcost({ commit }, fixcost) {
        commit('setFixcost', fixcost)
      },
      increaseLowEnergyDays({ commit }, energy) {
        commit('setLowEnergyDays', energy)
      },
      increaseLowFullnessDays({ commit }, fullness) {
        commit('setLowFullnessDays', fullness)
      },
      increaseLowHappinessDays({ commit }, happiness) {
        commit('setLowHappinessDays', happiness)
      },
      increaseLowMoneyDays({ commit }, money) {
        commit('setLowMoneyDays', money)
      },
      setEvent({ commit }, event) {
        commit('setNowEvent', event)
      },
      addEvent({ commit }, event) {
        commit('addNewEvent', event)
      },
      removeEvent({ commit }, event) {
        commit('removeNewEvent', event)
      },
      setPause({ commit }, pause) {
        commit('setStatePause', pause)
      },
      setObjects({ commit }, objects) {
        commit('setStateObjects', objects)
      },
      removeObject({ commit }, object) {
        commit('removeStateObject', object)
      }
    }
  })
}

export default createStore
