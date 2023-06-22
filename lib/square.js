const Shape=require("./shape");

class Square extends Shape{
    constructor(color){
        super(color)
        this.color=color;
    }
    setColor(color){
        this.color=color
    }

    render (){
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}
module.exports=Square