const findDay = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  0: "Sunday"
};

const findTime = function() {
  const timeMap = {};

  for (let i = 0; i <= 24; i++) {
    if (i > 17 || i < 4) {
      timeMap[i] = 'Night';
    } else if (i > 11) {
      timeMap[i] = 'Afternoon';
    } else if (i > 4) {
      timeMap[i] = 'Morning';
    }
  }

  return timeMap;
};

const findDescription = {
  'weeekendEveningDescriptions': [
    'Turn Up',
    'Energy',
    'Bangers',
    'Party',
    'Pregame'
  ],
  'morningDescriptions': [
    'Wake Up',
    'Rise',
    'Breakfast',
  ],
  'eveningDescriptions': [
    'Wind Down',
    'Relaxation',
    'Snooze'
  ],
  'defaultDescriptions': [
    'Jams',
    'Beats',
    'Hits'
  ]
};

const findRandIndex = function(num, array) {
  return num % array.length;
};

export const setHeader = function() {
  let dateObject = new Date();
  let day = findDay[dateObject.getDay()];
  let time = findTime()[dateObject.getHours()];
  let description;


  if (time.match(/Evening|Night/)) {
    if (day.match(/Friday|Saturday/)) {
      // Choose a random index based on the hour of the day.

      let i = findRandIndex(dateObject.getHours(), findDescription.weeekendEveningDescriptions);
      description = findDescription.weeekendEveningDescriptions[i];
    } else {
      let i = findRandIndex(dateObject.getHours(), findDescription.weeekendEveningDescriptions);
      description = findDescription.eveningDescriptions[i];
    }
  } else if (time == 'Morning') {
    let i = findRandIndex(dateObject.getHours(), findDescription.morningDescriptions);
    description = findDescription.morningDescriptions[i];
  } else {
    let i = findRandIndex(dateObject.getHours(), findDescription.defaultDescriptions);
    description = findDescription.defaultDescriptions[i];
  }

  return [day, time, description].join(' ');
};
