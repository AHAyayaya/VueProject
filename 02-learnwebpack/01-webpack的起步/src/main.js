//1.commonJS的模块化规范
const {add,mul} = require('./utils.js')

console.log(add(20,30))
console.log(mul(20,30))


//2.ES6的模块化规范
import {name,age,height} from './info';

console.log(name,age,height)