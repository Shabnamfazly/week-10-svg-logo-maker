const inqiurer = require("inquirer")
const Shape= require('./lib/shape')
const {writeFile}= require ("fs/promises")

const questions = [
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
]

function init(){
    inqiurer.prompt(questions).then(data=>{
        let svgLogo=new Shape(data.title,data.title_color,data.shape,data.shape_color)
        writeFile('logo.svg',svgLogo.render())
    })
}