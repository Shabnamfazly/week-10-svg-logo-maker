const SVG=require("../lib/svg")


test ("renders a svg element",()=>{
    const svg=new SVG()
    const e=`<svg width="300" height="200"></svg>`
    expect(svg.render()).toEqual(e)
})