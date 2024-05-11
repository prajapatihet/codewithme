const accountId = 14456;
let accountEmail = 'xyz@gmail.com';
var accountPass = '12345';
// If we do not assign any value to variable then JS automatically consider as undefined as default
let accountState;

accountCity = "Vadodara"


// This won't be change in future as it is declared as const earlier
// accountId = 2686;

console.log(accountId);

// Don't use var keyword beacause of issue in block scope and functional scope

accountEmail = 'abc@gmail.com';
accountPass = '123456789';
accountCity = "VDR";

console.table([accountId, accountEmail, accountPass, accountCity]);