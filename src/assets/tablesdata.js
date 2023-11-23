import {
    Table2Available,
    Table2Booked,
    Table2Pending,
    Table4Available,
    Table4Booked,
    Table4Pending,
    Table6Available,
    Table6Booked,
    Table6Pending,
    Table8Available,
    Table8Booked,
    Table8Pending,
    Table10Available,
    Table10Booked,
    Table10Pending,
    TABLE_STATE
} from './tablesImages'
const tables = [];
tables.push({chairsCount:2,state:TABLE_STATE.AVAILABLE,tablesImage:Table2Available});
tables.push({chairsCount:2,state:TABLE_STATE.BOOKED,tablesImage:Table2Booked});
tables.push({chairsCount:2,state:TABLE_STATE.PENDING,tablesImage:Table2Pending});
tables.push({chairsCount:4,state:TABLE_STATE.AVAILABLE,tablesImage:Table4Available});
tables.push({chairsCount:4,state:TABLE_STATE.BOOKED,tablesImage:Table4Booked});
tables.push({chairsCount:4,state:TABLE_STATE.PENDING,tablesImage:Table4Pending});
tables.push({chairsCount:6,state:TABLE_STATE.AVAILABLE,tablesImage:Table6Available});
tables.push({chairsCount:6,state:TABLE_STATE.BOOKED,tablesImage:Table6Booked});
tables.push({chairsCount:6,state:TABLE_STATE.PENDING,tablesImage:Table6Pending});
tables.push({chairsCount:8,state:TABLE_STATE.AVAILABLE,tablesImage:Table8Available});
tables.push({chairsCount:8,state:TABLE_STATE.BOOKED,tablesImage:Table8Booked});
tables.push({chairsCount:8,state:TABLE_STATE.PENDING,tablesImage:Table8Pending});
tables.push({chairsCount:10,state:TABLE_STATE.AVAILABLE,tablesImage:Table10Available});
tables.push({chairsCount:10,state:TABLE_STATE.BOOKED,tablesImage:Table10Booked});
tables.push({chairsCount:10,state:TABLE_STATE.PENDING,tablesImage:Table10Pending});
function getWorkTimes(open,close){
    var startTime = new Date('2000-01-01 ' + open);
    var endTime = new Date('2000-01-01 ' + close);
    var hoursArray = [];
    var currentHour = new Date(startTime);
    while (currentHour <= endTime) {
        var formattedHour = currentHour.getHours() + ':' +
                            (currentHour.getMinutes() < 10 ? '0' : '') + currentHour.getMinutes() +
                            ' ' + (currentHour.getHours() >= 12 ? '' : 'am');
        hoursArray.push(formattedHour);
        currentHour.setTime(currentHour.getTime() + 60 * 60 * 1000);
    }
    return hoursArray;
}

function getRandomNumbers(max,tableguestNum){
const numbers = []
for (let i = 0; i < 2; i++) {
    const randomNumber = Math.floor(Math.random() * max)
    max -= randomNumber < 0 ? 0 : randomNumber
    numbers.push(randomNumber < 0 ? 0 : randomNumber)
}
numbers.push(max)
    var availibleTables = Array.from({length:numbers[0]}).fill({state:TABLE_STATE.AVAILABLE ,table:tables.find((table) => table.chairsCount === tableguestNum && table.state === TABLE_STATE.AVAILABLE).tablesImage});
    var bookedTables = Array.from({length:numbers[1]}).fill({state:TABLE_STATE.BOOKED,table:tables.find((table) => table.chairsCount === tableguestNum && table.state === TABLE_STATE.BOOKED).tablesImage})
    var pendingTables = Array.from({length:numbers[2]}).fill({state:TABLE_STATE.PENDING,table:tables.find((table) => table.chairsCount === tableguestNum && table.state === TABLE_STATE.PENDING).tablesImage});
    var totaltables = availibleTables.concat(bookedTables,pendingTables);
    return totaltables;
}
function getRandomTableDate(){
    let tablesData =  new Map();
    console.log("tables were generated")
    tablesData.set('2',getRandomNumbers(12,2))
    tablesData.set('4',getRandomNumbers(10,4))
    tablesData.set('6',getRandomNumbers(8,6))
    tablesData.set('8',getRandomNumbers(6,8))
    tablesData.set('10',getRandomNumbers(4,10))
    return tablesData;
}

export  {getRandomTableDate,getWorkTimes};