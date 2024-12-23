const os = require("os")
 

// // custom modules
console.log(os);
 console.log(os.homedir());//C:\Users\senap
 console.log(os.hostname());// SHIBANEE_LENOVO
 console.log(os.platform());//win32
 console.log(os.release());//10.0.22631
 console.log(os.userInfo());//[Object: null prototype] {
  //uid: -1,
  //gid: -1,
  //username: 'senap',
 // homedir: 'C:\\Users\\senap',
  //shell: nul
  // }
 
console.log(os.userInfo().username);//senap
console.log(os.totalmem());//8301043712
console.log(os.freemem());//564473856





