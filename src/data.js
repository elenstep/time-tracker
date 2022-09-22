import IconWork from "./images/icon-work.svg";
import IconPlay from "./images/icon-play.svg";
import IconStudy from "./images/icon-study.svg";
import IconExercise from "./images/icon-exercise.svg";
import IconSocial from "./images/icon-social.svg";
import IconSelfCare from "./images/icon-self-care.svg";

export const data = [
  {
    title: "Work",
    image: IconWork,
    color: "light-red-work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      }
    }
  },
  {
    title: "Play",
    color: "soft-blue",
    image: IconPlay,
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      }
    }
  },
  {
    title: "Study",
    image: IconStudy,
    color: "light-red-study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      }
    }
  },
  {
    title: "Exercise",
    image: IconExercise,
    color: "lime-green",
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      }
    }
  },
  {
    title: 'Social',
    color: "violet",
    image:IconSocial,
    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }
    }
  },
  {
    title: "Self Care",
    color: "soft-orange",
    image: IconSelfCare,
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }
    }
  }
]