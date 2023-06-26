const Circle = require("../lib/circle")
const Square = require("../lib/square")
const Triangle = require("../lib/triangle")

describe("Circle",()=>{
    test ("renders circle blue",()=>{
        const shape=new Circle()
        const e=` <circle cx=\"150\" cy=\"100\" r=\"80\"  fill='blue' />`
        shape.setColor("blue")
        expect(shape.render()).toEqual(e)
    })
})

describe("Square",()=>{
    test("renders blue square",()=>{
const shape= new Square()
const e=`<rect x="90" y="40" width="120" height="120" fill="blue" />`
shape.setColor("blue")
expect(shape.render()).toEqual(e)
    })
})

describe("Triangle",()=>{
    test("renders blue triangle",()=>{
const shape= new Triangle()
const e=`<polygon points="150,18 244,182 56,182" fill='blue' />`
shape.setColor("blue")
expect(shape.render()).toEqual(e)
    })
})
