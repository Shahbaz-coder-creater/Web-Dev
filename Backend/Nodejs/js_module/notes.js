// | CommonJS                                         | ES Modules                                     |
// | ------------------------------------------------ | ---------------------------------------------- |
// | `module.exports = login`                         | `export default login`                         |
// | `const login = require("./second")`              | `import login from "./second.js"`              |
// | `module.exports = { login, payment }`            | `export { login, payment }`                    |
// | `const { login, payment } = require("./second")` | `import { login, payment } from "./second.js"` |


// Important Rules
// module.exports ➜ require()
// export default ➜ import variableName from ".filename.."
// export {} ➜ import { variableName } from ".filename.."
// CommonJS aur ES Modules ko ek hi file me mix nahi karna chahiye.
// Default Export ek file me sirf 1 ho sakta hai.
// Named Export ek file me kitne bhi ho sakte hain.