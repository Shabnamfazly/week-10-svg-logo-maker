const Circle = require("./circle");

class Shape{
    constructor(title,titleColor,shape,shapeColor){
        this.title=title,
        this.titleColor=titleColor,
        this.shape=shape,
        this.shapeColor=shapeColor

    }

    render(){
        let shape;
        if(this.shape==="circle"){
            shape= new Circle(this.titleColor);
        } else if (this.shape==="triangle"){
            shape= new Triangle(this.titleColor)
        } else if(this.shape==="square"){
            shape= new Square(this.titleColor)
        }

        return `
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()} 
        <text x="150" y="150" font-size="60" text-anchor="middle" fill=${this.titleColor}>${this.title}</text>
        </svg>
        `
    }
}
module.exports=Shape