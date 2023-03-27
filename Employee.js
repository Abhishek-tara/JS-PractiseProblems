const IS_ABSENT = 0;
const IS_PARTTIME = 1;
const IS_FULLTIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_pER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 10;
const MAX_HR_IN_MONTH = 100;


//let empCheck = Math.floor(Math.random() * 10) % 2;

// if(empCheck == IS_ABSENT)
// {
//     console.log("employee is absent");
// }
// else{
//     console.log("emplopyee is present");
// }

// switch (empCheck) {
//     case IS_PARTTIME:
//         empHRs = PART_TIME_HOURS;
//         break;
//     case IS_FULLTIME:
//         empHRs = FULL_TIME_HOURS;
//         break;

// }

function getWorkingHrs(empCheck) {
    switch (empCheck) {
        case IS_PARTTIME:
            return PART_TIME_HOURS;

        case IS_FULLTIME:
            return FULL_TIME_HOURS;

        default:
            return 0;


    }
}
function calcDailyWage(empHRs)
{
    return empHRs * WAGE_pER_HOUR;
}
let empHRs =0;
let totalempHRs = 0;
let totalWorkingDays = 0;
let empDailywageArr = new Array();
let empDailywageMap = new Map();

while(totalempHRs <= MAX_HR_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHRs = getWorkingHrs(empCheck);
    totalempHRs += empHRs;
    empDailywageArr.push(calcDailyWage(empHRs));
    empDailywageMap.set(totalWorkingDays,calcDailyWage(empHRs));


}
console.log(empDailywageMap);

let empWage = calcDailyWage(totalempHRs);
console.log("Total days:" + totalWorkingDays + " Total Hrs:" + totalempHRs + " empWage:" + empWage);