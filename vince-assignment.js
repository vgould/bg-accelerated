/*
////////////////////////////////////////////////////////////////// 
Task 1: Repeating Numbers

Expected output:
1111111111
11, 222
10101010, 343434343434, 9292
*/

var repeatNumbers = function(data) {
 
    var lists = [];

    // loop through the data values
    for (var i = 0; i < data.length; i++) {

        var entry = data[i];
        var list = [];

        // concatenate the values into an array
        for (var j = 0; j < entry[1]; j++) {
            list += entry[0];
        }

        // add a "," between each list (but not in front or at the end)
        if (i > 0)
            lists += ',';

        // build the complete string of values
        lists += list;
    }

    return lists;
  };
  
  
  console.log("\nTask 1: Repeating Numbers\n");
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


  /*
  //////////////////////////////////////////////////////////////////
  Task 2: Conditional Sums

  Expected Output:
  6
  9
  144
  0
  */

  var conditionalSum = function(values, condition) {
 
    var sum  = 0;
    var even = false;

    // set up even or odd in one place
    if (condition === 'even')
        even = true;
    else if (condition === 'odd')
        even = false;

    // loop through the list of values
    for (i = 0; i < values.length; i++) {

        if (even)
        {
            // sum only even values
            if (!(values[i] % 2))
                sum += values[i];
        } else if (!even) {
            // sum only odd values
            if (values[i] % 2)
                sum += values[i];
        }
    }

    return sum;
  };

  console.log("\nTask 2: Conditional Sums\n");
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));

/*
//////////////////////////////////////////////////////////////////
Task 3: Talking Calendar

Convert string "YYYY/MM/DD" to "Monthname Day+suffix, Year"

Expected Output:
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/

var talkingCalendar = function(date) {

    // get the components from date
    var year  = date.slice(0,4);
    var month = date.slice(5,7) - 1;     // array index starts at 0
    var day   = parseInt(date.slice(8)); // remove any leading 0s

    // build an array of month names
    var monthName = ["January", 
                    "February", 
                    "March", 
                    "April", 
                    "May", 
                    "June", 
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December"];
    
    // create the correct day suffix
    var suffix = null;

    switch (day) {
        case 1:
        case 21:
        case 31:
            suffix = 'st';
            break;
        case 2:
        case 22:
            suffix = 'nd';
            break;
        case 3:
        case 23:
            suffix = 'rd';
            break;
        default:
            suffix = 'th';
            break;
    }

    // build the new date format string
    dateString = monthName[month] + " " + day + suffix +", " + year;

    return dateString;
  };
  
  console.log("\nTask 3: Talking Calendars\n");
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));
  
/*
/////////////////////////////////////////////////////////////////
Task 4: Challenge Calculator (v1.0)

Expected Output
{ twoDollar: 1, dime: 1, penny: 3 }
{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

var calculateChange = function(total, cash) {
    
    var change = cash - total;

    var dollars   = parseInt(change/100);
    var remainder = change % 100;

    console.log("dollars   = " + dollars);
    console.log("remainder = " + remainder);


    var myObj = {};

    console.log("before $20 - change = " + change);

    if (change >= 2000) {
        twenties = parseInt(change / 2000);
        change = (change % 2000);
        myObj.twentyDollar = twenties;
    }

    console.log("before $10 - change = " + change);

    if (change >= 1000) {
        tens = parseInt(change / 1000);
        change = (change % 1000);
        myObj.ten = tens;
    }

    console.log("before $5 - change = " + change);

    if (change >= 500) {
        fives = parseInt(change / 500);
        change = (change % 500);
        myObj.fiveDollar = tens;
    }

    console.log("before $2 - change = " + change);

    if (change >= 200) {
        twos = parseInt(change / 200);
        change = (change % 200);
        myObj.twoDollar = twos;
    }

    console.log("before $1 - change = " + change);

    if (change >= 100) {
        ones = parseInt(change / 100);
        change = (change % 100);
        myObj.dollar = ones;
    }

    console.log("before 25c - change = " + change);

    if (change >= 25) {
        quarters = parseInt(change / 25);
        change = (change % 25);
        myObj.quarter = quarters;
    }

    console.log("before 10c - change = " + change);

    if (change >= 10) {
        dimes = parseInt(change / 10);
        change = (change % 10);
        myObj.dime = dimes;
    }

    console.log("before 5c - change = " + change);

    if (change >= 5) {
        nickels = parseInt(change / 5);
        change = (change % 5);
        myObj.nickel = nickels;
    }

    console.log("before 1c - change = " + change);

    if (change > 0) {
        myObj.penny = change;
    }


    return myObj;
  };
  
  console.log("\nTask 4: Challenge Calculator\n");
  //console.log(calculateChange(1, 5001));

  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));
*/
  

/////////////////////////////////////////////////////////////////
/* Task 4: Challenge Calculator (v2.0)

Expected Output
{ twoDollar: 1, dime: 1, penny: 3 }
{ ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/

var calculateChange = function(total, cash) {

    // create array of denomination values (in cents)
    var denominations = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
    
    // create array to hold counts for each denomination
    var count  = [];
  
    // create an object to hold change-denominations
    var denomsObj = {};

    var change = cash - total;

    while (change > 0) {
 
        // loop through each denomination
        for( i = 0; i < denominations.length; i++) {

            // get the count for each denomination
            count[i] = parseInt(change / denominations[i]);

            // build the change-denominations object
            if (count[i] > 0)
            {
                switch (i) {
                    case 0:
                        denomsObj.twenty = count[i];
                        break;
                    case 1:
                        denomsObj.ten = count[i];
                        break;
                    case 2:
                        denomsObj.five = count[i];
                        break;
                    case 3:
                        denomsObj.twoDollar = count[i];
                        break;
                    case 4:
                        denomsObj.dollar = count[i];
                        break;
                    case 5:
                        denomsObj.quarter = count[i];
                        break;
                    case 6:
                        denomsObj.dime = count[i];
                        break;
                    case 7:
                        denomsObj.nickel = count[i];
                        break;
                    default:
                        denomsObj.penny = change;
                }
            }

            // calculate change remaining
            if (count[i] > 0)
                change = change % (count[i] * denominations[i]);
        }
    }

    return denomsObj;

  };

  console.log("\nTask 4: Challenge Calculator (v2.0)\n");

  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));
  