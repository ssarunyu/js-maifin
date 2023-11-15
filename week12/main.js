// Common JS
// const { echo, sum, MAX_VALUE } = require('./utills.js')

// ES module
import { echo, sum, MAX_VALUE } from './libs/utills.js'
// import customName, { echo, MAX_VALUE } from './utills.js'

console.log(echo('hello world'))

const rootNode = window.document
console.log(rootNode)
console.log(rootNode.nodeType)
console.log(rootNode.nodeValue)

console.log(document.documentElement)
console.log(document.documentElement.nodeName)

console.log(document.body)
console.log(document.head)
console.log(document.title)

const headElement = document.head
const headChildren = headElement.childNodes
console.log(headChildren)
headChildren.forEach((hc) => {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})

// Parent relationship
const headParentNode = headElement.parentNode
const headParentElement = headElement.parentElement
console.log(headParentNode)
console.log(headParentElement)

// Sibling relationship
const headSibling = headElement.previousSibling
const headElementSibling = headElement.previousElementSibling
console.log(headSibling)
console.log(headElementSibling)
const headNextSibling = headElement.nextSibling
const headNextElementSibling = headElement.nextElementSibling
console.log(`It's will be #text because whitespace (enter between head and body tag)`, headNextSibling)
console.log(headNextElementSibling)