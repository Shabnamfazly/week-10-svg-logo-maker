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
        return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`
    }
}
module.exports=Square