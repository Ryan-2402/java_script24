const accountId = 653783
let accountEmail = "ryan@google.com"
var accountPassword = "12345678"
accountCity = "mysore"
let accountstate;

// accountId = 2  not allowed

accountEmail = "sr@fh.com"
accountPassword = "5656565"
accountCity = "bengalure"
console.log(accountId);
/*
prefer not used var
beacause of issue in block scope and function scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity,accountstate])