const bcrypt = require("bcrypt");
const password = "123455";

const hashCode = bcrypt.hashSync(password,10);

// const result = bcrypt.compareSync("123456", hashCode);

// console.log(result);

console.log(hashCode);