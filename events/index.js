const delayTime = 3000

export const ramdomEvent = (
  increasePeriod,
  improveStatus,
  setEvent,
  addEvent
) => {}

// Self //

export const meditate = (increasePeriod, improveStatus, setEvent) => {
  setEvent('meditate')
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 5,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

export const enlighten = (increasePeriod, improveStatus, setEvent) => {
  setEvent('enlighten')
  improveStatus({
    energy: 100,
    fullness: 100,
    happiness: 100,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

// Window //

export const openWindow = (increasePeriod, improveStatus, setEvent) => {
  setEvent('openWindow')
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 15,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

export const sunburn = (increasePeriod, improveStatus, setEvent) => {
  setEvent('sunburn')
  improveStatus({
    energy: -10,
    fullness: 0,
    happiness: -20,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

export const closeWindow = (increasePeriod, improveStatus, setEvent) => {
  setEvent('sunburn')
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 0,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

// Idol Poster //

export const lookAtCherprang = (increasePeriod, improveStatus, setEvent) => {
  setEvent('lookAtCherprang')
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 10,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

// Bed //

export const sleep = (increasePeriod, improveStatus, setEvent) => {
  setEvent('sleep')
  improveStatus({
    energy: 71,
    fullness: 0,
    happiness: 0,
    money: 0
  })

  setTimeout(() => {
    increasePeriod(2)
  }, delayTime)
}

export const overSleep = (increasePeriod, improveStatus, setEvent) => {
  setEvent('overSleep')
  improveStatus({
    energy: 80,
    fullness: 0,
    happiness: 0,
    money: 0
  })

  setTimeout(() => {
    increasePeriod(3)
  }, delayTime)
}

export const nap = (increasePeriod, improveStatus, setEvent) => {
  setEvent('nap')
  improveStatus({
    energy: 30,
    fullness: 0,
    happiness: 0,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

// Mama Pack //

export const eat = (increasePeriod, improveStatus, setEvent) => {
  setEvent('eat')
  improveStatus({
    energy: 0,
    fullness: 25,
    happiness: 0,
    money: -20
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

export const dropMama = (increasePeriod, improveStatus, setEvent) => {
  setEvent('dropMama')
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: -10,
    money: -20
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

export const luckyDraw = (increasePeriod, improveStatus, setEvent) => {
  setEvent('luckyDraw')
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 0,
    money: 2000
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

// Computer //

export const work = (increasePeriod, improveStatus, setEvent) => {
  setEvent('work')
  improveStatus({
    energy: -16,
    fullness: 0,
    happiness: -9,
    money: 160
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

export const play = (increasePeriod, improveStatus, setEvent) => {
  setEvent('play')
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 25,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

export const error = (increasePeriod, improveStatus, setEvent) => {
  setEvent('error')
  improveStatus({
    energy: -5,
    fullness: 0,
    happiness: -15,
    money: -100
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

export const morePlay = (increasePeriod, improveStatus, setEvent) => {
  setEvent('morePlay')
  improveStatus({
    energy: -5,
    fullness: 0,
    happiness: 40,
    money: 0
  })

  setTimeout(() => {
    increasePeriod(2)
  }, delayTime)
}

// Phone //

export const callForYakiniku = (increasePeriod, improveStatus, setEvent) => {
  setEvent('callForYakiniku')
  improveStatus({
    energy: 0,
    fullness: 35,
    happiness: 50,
    money: -500
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

export const talkWithGirlfriend = (increasePeriod, improveStatus, setEvent) => {
  setEvent('talkWithGirlfriend')
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 20,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

export const argue = (increasePeriod, improveStatus, setEvent) => {
  setEvent('argue')
  improveStatus({
    energy: -30,
    fullness: 0,
    happiness: -30,
    money: 0
  })

  setTimeout(() => {
    increasePeriod(2)
  }, delayTime)
}

// Sock //

export const smell = (increasePeriod, improveStatus, setEvent) => {
  setEvent('smell')
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: -10,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

// Lay //

export const eatLay = (increasePeriod, improveStatus, setEvent) => {
  setEvent('eatLay')
  improveStatus({
    energy: 5,
    fullness: 15,
    happiness: 5,
    money: -20
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

// Recorder //

export const playRecorder = (increasePeriod, improveStatus, setEvent) => {
  setEvent('playRecorder')
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 15,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

// Paper / Workdesk //

export const draw = (increasePeriod, improveStatus, setEvent) => {
  setEvent('draw')
  improveStatus({
    energy: -12,
    fullness: 0,
    happiness: -8,
    money: 120
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

export const burn = (increasePeriod, improveStatus, setEvent) => {
  const random = Math.random()

  if (random < 0.5) {
    setEvent('burn')
  } else {
    setEvent('burn2')
  }

  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 15,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}

// Figure Gundam //

export const lookAtGundam = (increasePeriod, improveStatus, setEvent) => {
  setEvent('lookAtGundam')
  improveStatus({
    energy: 0,
    fullness: 0,
    happiness: 15,
    money: 0
  })

  setTimeout(() => {
    increasePeriod()
  }, delayTime)
}
