// You're exhausted after a long day and heading to bed, but you still have to set the alarm clock
// on your phone to timeToSet . You already have one you set the day before to setTime , so
// all you have to do is update it.
// To set your alarm, you can scroll through hours and minutes upwards or downwards. One
// shift changes an hour or minute value by one. The values are organized cyclically, which
// means that dragging 0 minutes downwards turns it into 59 , and dragging 59 upwards turns
// it into 0 (similarly, 0 hours can become 23 in one shift and vice versa).

// You want to set the alarm clock without any extra effort, so you need to calculate the minimum
// number of shifts required to turn setTime into timeToSet .

// Example
// • For setTime = "07:30" and timeToSet = "08:00" , the output should be
// alarmClock(setTime, timeToSet) = 31 .
// Shifting hours upwards once will change the alarm to "08:30" , and shifting
// minutes 30 times downwards will change it to "08:00" .
// • For setTime = "23:45" and timeToSet = "08:00" , the output should be
// alarmClock(setTime, timeToSet) = 24 .
// You can shift hours upwards 9 times to change the alarm to "08:45" , and shift
// minutes upwards 15 times to change it to "08:00" .

// Input/Output
// • [execution time limit] 4 seconds (js)
// • [input] string setTime

// Internal

// Time your alarm clock is set to in the "hh:mm" format.
// Guaranteed constraints:
// 0 ≤ hh ≤ 23 ,
// 0 ≤ mm ≤ 59 .
// • [input] string timeToSet
// Time you want to set alarm to given in the same format as setTime .
// Guaranteed constraints:
// 0 ≤ hh ≤ 23 ,
// 0 ≤ mm ≤ 59 .
// • c[output] integer
// The minimum number of shifts required to change setTime to timeToSet .

// var hoursToMatch = 3;
// var currentHour = 23;
// var upShiftCount = 0;
//var mins=0;

//THE CODE

const alarm = function (setTime, timeToSet) {
  //vars of current alarm time
  var currentAlarm_Hour = parseInt(setTime[0] + setTime[1]);
  var currentAlarm_Min = parseInt(
    setTime[setTime.length - 2] + setTime[setTime.length - 1]
  );

  // vars of alarm to set
  var alarmToSet_Hour = parseInt(timeToSet[0] + timeToSet[1]);
  var alarmToSet_Min = parseInt(
    timeToSet[timeToSet.length - 2] + timeToSet[timeToSet.length - 1]
  );

 //console.log(alarmToSet_Hour)

  // 0 ≤ hh ≤ 23 ,
  // 0 ≤ mm ≤ 59 .

  if (
    alarmToSet_Hour <= 23 &&
    currentAlarm_Hour <= 23 &&
    alarmToSet_Min <= 59 &&
    currentAlarm_Min <= 59
  ) {
    console.log("hurrah");
     // checking min hour shifts
  var minHourShiftCount;

  if (
    upwardShiftCounter_Hours(currentAlarm_Hour, alarmToSet_Hour) >
    downwardShiftCounter_Hours(currentAlarm_Hour, alarmToSet_Hour)
  ) {
    minHourShiftCount = downwardShiftCounter_Hours(
      currentAlarm_Hour,
      alarmToSet_Hour
    );
  } else {
    minHourShiftCount = upwardShiftCounter_Hours(
      currentAlarm_Hour,
      alarmToSet_Hour
    );
  }

  //console.log(minHourShiftCount)

  //console.log(currentAlarm_Min, alarmToSet_Min)

  // checking minimum minutes shifts
  var minMinutesShiftCount;

  if (
    upwardShiftCounter_Min(currentAlarm_Min, alarmToSet_Min) >
    downwardShiftCounter_Min(currentAlarm_Min, alarmToSet_Min)
  ) {
    minMinutesShiftCount = downwardShiftCounter_Min(
      currentAlarm_Min,
      alarmToSet_Min
    );
  } else {
    minMinutesShiftCount = upwardShiftCounter_Min(
      currentAlarm_Min,
      alarmToSet_Min
    );
  }
  //console.log(upwardShiftCounter_Min(currentAlarm_Min, alarmToSet_Min))

  return minHourShiftCount + minMinutesShiftCount;
  } else {
    
   return 'wrong input';
  }

 
};
//"07:30" and timeToSet = "08:00"
console.log(alarm("07:30", "08:00"));

// SHIFTING PROCCESS

// Counting upward shifts of hours
function upwardShiftCounter_Hours(currentHour, hoursToMatch) {
  var upShiftCount_Hours = 0;
  for (let i = currentHour; i < 25; i++) {
    if (hoursToMatch == i) {
      break;
    }
    if (i === 24) {
      i = 0;
    }

    upShiftCount_Hours++;

    //console.log(i)
  }
  //console.log(upShiftCount_Hours);
  return upShiftCount_Hours;
}
//upwardShiftCounter_Hours(3, 2);

// Counting downWard shifts of hours    1          23
function downwardShiftCounter_Hours(currentHour, hoursToMatch) {
  let downShiftCount_Hours = 0;
  for (let i = currentHour; i < 25; i--) {
    if (hoursToMatch == i) {
      break;
    }
    if (i === 0) {
      i = 24;
    }

    downShiftCount_Hours++;

    //console.log(i)
  }
  //console.log(downShiftCount_Hours);
  return downShiftCount_Hours;
}
//downwardShiftCounter_Hours(1, 23);

// min upwards shift counter    30             0
function upwardShiftCounter_Min(currentMin, minsToMatch) {
  let upwardShiftCount_Min = 0;
  for (let i = currentMin; i < 61; i++) {
    if (i === 60) {
      i = 0;
    }
    if (minsToMatch == i) {
      break;
    }

    upwardShiftCount_Min++;

    //console.log(i)
  }
  // console.log(upwardShiftCount_Min);
  return upwardShiftCount_Min;
}
//upwardShiftCounter_Min(0, 30);

// down upwards shift counter min
function downwardShiftCounter_Min(currentMin, minsToMatch) {
  let downwardShiftCount_Min = 0;
  for (let i = currentMin; i < 61; i--) {
    if (minsToMatch == i) {
      break;
    }

    if (i === 0) {
      i = 60;
    }

    downwardShiftCount_Min++;

    //console.log(i)
  }
  // console.log(downwardShiftCount_Min);
  return downwardShiftCount_Min;
}
//downwardShiftCounter_Min(5, 1);
