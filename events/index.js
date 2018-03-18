import { getRndInteger } from '../utilities'
const delayTime = 2000

export const randomEvent = (
  increasePeriod,
  improveStatus,
  setEvent,
  addEvent,
  setPause
) => {
  const random = getRndInteger(1, 16)

  switch (random) {
    case 1:
      meditate(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 2:
      enlighten(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 3:
      openWindow(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 4:
      sunburn(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 5:
      closeWindow(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 6:
      lookAtCherprang(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 7:
      sleep(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 8:
      overSleep(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 9:
      nap(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 10:
      eat(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 11:
      dropMama(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 12:
      luckyDraw(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 13:
      work(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 14:
      play(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 15:
      error(increasePeriod, improveStatus, setEvent, setPause)
      break
    case 16:
      morePlay(increasePeriod, improveStatus, setEvent, setPause)
      break
    // case 17:
    //   callForYakiniku(increasePeriod, improveStatus, setEvent, setPause)
    //   break
    // case 18:
    //   talkWithGirlfriend(increasePeriod, improveStatus, setEvent, setPause)
    //   break
    // case 19:
    //   argue(increasePeriod, improveStatus, setEvent, setPause)
    //   break
    // case 20:
    //   smell(increasePeriod, improveStatus, setEvent, setPause)
    //   break
    // case 21:
    //   eatLay(increasePeriod, improveStatus, setEvent, setPause)
    //   break
    // case 22:
    //   playRecorder(increasePeriod, improveStatus, setEvent, setPause)
    //   break
    // case 23:
    //   draw(increasePeriod, improveStatus, setEvent, setPause)
    //   break
    // case 24:
    //   burn(increasePeriod, improveStatus, setEvent, setPause)
    //   break
    // case 25:
    //   lookAtGundam(increasePeriod, improveStatus, setEvent, setPause)
    //   break
    default:
      meditate(increasePeriod, improveStatus, setEvent, setPause)
      break
  }

  addEvent('somethingElse')
}

export const defaultEvent = improveStatus => {
  improveStatus({
    energy: -5,
    fullness: -9,
    happiness: -1,
    money: 0
  })
}

// Self //

export const meditate = (increasePeriod, improveStatus, setEvent, setPause) => {
  setEvent('meditate')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 5,
    money: 0
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

export const enlighten = (
  increasePeriod,
  improveStatus,
  setEvent,
  setPause
) => {
  setEvent('meditate')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 100,
    fullness: 100,
    happiness: 100,
    money: 0
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

// Window //

export const openWindow = (
  increasePeriod,
  improveStatus,
  setEvent,
  setPause
) => {
  setEvent('openWindow')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 15,
    money: 0
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

export const sunburn = (increasePeriod, improveStatus, setEvent, setPause) => {
  setEvent('sunburn')
  defaultEvent(improveStatus)
  improveStatus({
    energy: -10,
    fullness: 0,
    happiness: -20,
    money: 0
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

export const closeWindow = (
  increasePeriod,
  improveStatus,
  setEvent,
  setPause
) => {
  setEvent('closeWindow')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 0,
    money: 0
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

// Idol Poster //

export const lookAtCherprang = (
  increasePeriod,
  improveStatus,
  setEvent,
  setPause
) => {
  setEvent('lookAtCherprang')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 10,
    money: 0
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

// Bed //

export const sleep = (increasePeriod, improveStatus, setEvent, setPause) => {
  setEvent('sleep')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 71,
    fullness: 0,
    happiness: 0,
    money: 0
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod(2)
    setPause(false)
  }, delayTime)
}

export const overSleep = (
  increasePeriod,
  improveStatus,
  setEvent,
  setPause
) => {
  setEvent('sleep')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 80,
    fullness: 0,
    happiness: 0,
    money: 0
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod(3)
    setPause(false)
  }, delayTime)
}

export const nap = (increasePeriod, improveStatus, setEvent, setPause) => {
  setEvent('nap')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 30,
    fullness: 0,
    happiness: 0,
    money: 0
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

// Mama Pack //

export const eat = (increasePeriod, improveStatus, setEvent, setPause) => {
  setEvent('eat')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 0,
    fullness: 25,
    happiness: 0,
    money: -20
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

export const dropMama = (increasePeriod, improveStatus, setEvent, setPause) => {
  setEvent('dropMama')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: -10,
    money: -20
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

export const luckyDraw = (
  increasePeriod,
  improveStatus,
  setEvent,
  setPause
) => {
  setEvent('luckyDraw')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 0,
    money: 2000
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

// Computer //

export const work = (increasePeriod, improveStatus, setEvent, setPause) => {
  setEvent('work')
  defaultEvent(improveStatus)
  improveStatus({
    energy: -18,
    fullness: 0,
    happiness: -10,
    money: 160
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

export const play = (increasePeriod, improveStatus, setEvent, setPause) => {
  setEvent('play')
  defaultEvent(improveStatus)
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 25,
    money: 0
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

export const error = (increasePeriod, improveStatus, setEvent, setPause) => {
  setEvent('error')
  defaultEvent(improveStatus)
  improveStatus({
    energy: -5,
    fullness: 0,
    happiness: -15,
    money: -100
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod()
    setPause(false)
  }, delayTime)
}

export const morePlay = (increasePeriod, improveStatus, setEvent, setPause) => {
  setEvent('morePlay')
  defaultEvent(improveStatus)
  improveStatus({
    energy: -5,
    fullness: 0,
    happiness: 40,
    money: 0
  })

  setPause(true)
  setTimeout(() => {
    increasePeriod(2)
    setPause(false)
  }, delayTime)
}

// Phone //

// export const callForYakiniku = (
//   increasePeriod,
//   improveStatus,
//   setEvent,
//   setPause
// ) => {
//   setEvent('callForYakiniku')
//   defaultEvent(improveStatus)
//   improveStatus({
//     energy: 0,
//     fullness: 35,
//     happiness: 50,
//     money: -500
//   })

//   setPause(true)
//   setTimeout(() => {
//     increasePeriod()
//     setPause(false)
//   }, delayTime)
// }

// export const talkWithGirlfriend = (
//   increasePeriod,
//   improveStatus,
//   setEvent,
//   setPause
// ) => {
//   setEvent('talkWithGirlfriend')
//   defaultEvent(improveStatus)
//   improveStatus({
//     energy: 0,
//     fullness: 0,
//     happiness: 20,
//     money: 0
//   })

//   setPause(true)
//   setTimeout(() => {
//     increasePeriod()
//     setPause(false)
//   }, delayTime)
// }

// export const argue = (increasePeriod, improveStatus, setEvent, setPause) => {
//   setEvent('argue')
//   defaultEvent(improveStatus)
//   improveStatus({
//     energy: -30,
//     fullness: 0,
//     happiness: -30,
//     money: 0
//   })

//   setPause(true)
//   setTimeout(() => {
//     increasePeriod(2)
//     setPause(false)
//   }, delayTime)
// }

// // Sock //

// export const smell = (increasePeriod, improveStatus, setEvent, setPause) => {
//   setEvent('smell')
//   defaultEvent(improveStatus)
//   improveStatus({
//     energy: 0,
//     fullness: 0,
//     happiness: -10,
//     money: 0
//   })

//   setPause(true)
//   setTimeout(() => {
//     increasePeriod()
//     setPause(false)
//   }, delayTime)
// }

// // Lay //

// export const eatLay = (increasePeriod, improveStatus, setEvent, setPause) => {
//   setEvent('eatLay')
//   defaultEvent(improveStatus)
//   improveStatus({
//     energy: 5,
//     fullness: 15,
//     happiness: 5,
//     money: -20
//   })

//   setPause(true)
//   setTimeout(() => {
//     increasePeriod()
//     setPause(false)
//   }, delayTime)
// }

// // Recorder //

// export const playRecorder = (
//   increasePeriod,
//   improveStatus,
//   setEvent,
//   setPause
// ) => {
//   setEvent('playRecorder')
//   defaultEvent(improveStatus)
//   improveStatus({
//     energy: 0,
//     fullness: 0,
//     happiness: 15,
//     money: 0
//   })

//   setPause(true)
//   setTimeout(() => {
//     increasePeriod()
//     setPause(false)
//   }, delayTime)
// }

// // Paper / Workdesk //

// export const draw = (increasePeriod, improveStatus, setEvent, setPause) => {
//   setEvent('draw')
//   defaultEvent(improveStatus)
//   improveStatus({
//     energy: -12,
//     fullness: 0,
//     happiness: -8,
//     money: 120
//   })

//   setPause(true)
//   setTimeout(() => {
//     increasePeriod()
//     setPause(false)
//   }, delayTime)
// }

// export const burn = (increasePeriod, improveStatus, setEvent, setPause) => {
//   const random = Math.random()

//   if (random < 0.5) {
//     setEvent('burn')
//   } else {
//     setEvent('burn2')
//   }

//   defaultEvent(improveStatus)
//   improveStatus({
//     energy: 0,
//     fullness: 0,
//     happiness: 15,
//     money: 0
//   })

//   setPause(true)
//   setTimeout(() => {
//     increasePeriod()
//     setPause(false)
//   }, delayTime)
// }

// // Figure Gundam //

// export const lookAtGundam = (
//   increasePeriod,
//   improveStatus,
//   setEvent,
//   setPause
// ) => {
//   setEvent('lookAtGundam')
//   defaultEvent(improveStatus)
//   improveStatus({
//     energy: 0,
//     fullness: 0,
//     happiness: 15,
//     money: 0
//   })

//   setPause(true)
//   setTimeout(() => {
//     increasePeriod()
//     setPause(false)
//   }, delayTime)
// }
