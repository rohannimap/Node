const fs = require("fs")

const textIn =  fs.readFileSync('./test.txt',"utf-8");
// console.log(textIn);
const newFile = `hello this new file for testing in that taken textaIN FILR DATA ${textIn} and at ${Date.now()}`
fs.writeFileSync("./outputNewfile",newFile)


// non blocking and asyncero...
// fs.readFile('./star.txt','utf-8',(err,data)=>{
//     console.log(data);
// })
fs.readFile('./star.txt','utf-8',(err,data1)=>{
    fs.readFile(`${data1}`,'utf-8',(err,data2)=>{
        console.log(data1);
        
    })
    // console.log(data);
})
// console.log();



