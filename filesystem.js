let fs=require('fs')
// read and write sync
let contenu=fs.readFileSync('text.txt', 'utf8')
console.log(contenu)
fs.writeFileSync('text.txt',"hello world")


// // read and write async

let contenua=fs.readFiles('text.txt', 'utf8',(err,data)=>{
    if(err)
    console.log("le erreur est" , err)
    else console.log("la data est ",data)})