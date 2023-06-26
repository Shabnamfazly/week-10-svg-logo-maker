const SVG=require("../lib/svg")


test ("renders a svg element",()=>{
    const svg=new SVG()
    const e=`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    expect(svg.render()).toEqual(e)
})