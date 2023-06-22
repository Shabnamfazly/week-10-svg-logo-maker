const Shape=require("./shape");

class Triangle extends Shape{
    constructor(color){
        super(color)
        this.color=color;
    }
setColor(color){
    this.color=color
}
    render (){
        return `<polygon points="150,18 244,182 56,182" fill='${this.color}' />`
    }
}
module.exports=Triangle