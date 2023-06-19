const Shape=require("./shape");

class Circle extends Shape{
    constructor(color){
        this.color=color;
    }

    render (){
        return ` <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill='${this.color}' />`
    }
}