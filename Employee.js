const IS_ABSENT = 0;
const IS_PARTTIME = 1;
const IS_FULLTIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS =8;
const WAGE_pER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 2;


let empCheck = Math.floor(Math.random()*10)%2;

if(empCheck == IS_ABSENT)
{
    console.log("employee is absent");
}
else{
    console.log("emplopyee is present");
}

switch(empCheck)
{
    case IS_PARTTIME:
    empHRs = PART_TIME_HOURS;
    break;
    case IS_FULLTIME:
    empHRs = FULL_TIME_HOURS;
    break;

}

function getWorkingHrs(empCheck)
{
    switch(empCheck)
{
    case IS_PARTTIME:
        return PART_TIME_HOURS;

    case IS_FULLTIME:
        return FULL_TIME_HOURS;

    default:
        return 0;


}
}

// let empHRs = 0;
let empHRs = getWorkingHrs(empCheck);
let empWage = empHRs * WAGE_pER_HOUR;
console.log("employee wage: " + empWage);