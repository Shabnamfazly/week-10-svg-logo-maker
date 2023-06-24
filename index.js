const inquirer = require("inquirer")
const Circle= require('./lib/circle')
const Square= require('./lib/square')
const Triangle= require('./lib/triangle')
const SVG= require('./lib/svg')
const fs=require("fs")


const writeToFile=(fileName,responses)=>{
fs.writeFile(fileName,responses,(err)=>{
    err?console.log(err):console.log("generated logo")
})
}

const questions = ()=>{
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the text"
        },
        {
            type: "input",
            name: "title_color",
            message: "Enter the text color"
        },
        {
            type: "list",
            name: "shape",
            message: "Select the shape",
            choices: ["circle", "triangle","square"],
        },
        {
            type: "input",
            name: "shape_color",
            message: "Enter the color of the shape"
        }
    ]).then((responses) => {
        let logo;
        switch (responses.shape) {
          case "circle":
            logo = new Circle();
            break;
          case "triangle":
            logo = new Triangle();
            break;
          case "square":
            logo = new Square();
            break;
        }
        logo.setColor(responses.shape_color);
        const myLogo = new SVG();
        myLogo.setShape(logo);
        myLogo.setText(responses.title,responses.title_color)
        
        if(responses.title.length>3){
            console.log("title must be less than three characters")
            questions()
        }else{
            writeToFile("logo.svg",myLogo.render())
        }

    })
}
questions()
    


// function init(){
//     inqiurer.prompt(questions).then(data=>{
//         let svgLogo=new Shape(data.title,data.title_color,data.shape,data.shape_color)
//         writeFile('logo.svg',svgLogo.render())
//     })
// }
// init()