//files

const fs=require('fs')


// fs.writeFileSync('./test.txt',"hi vishnusai")

// fs.writeFile('./test.txt','hello',(err)=>{})

// const data= fs.readFileSync('./test.txt','utf-8')
// console.log(data)

// fs.readFile('./test.txt','utf-8',(err,res)=>{
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log(res)
//     }

// })

// fs.appendFileSync('./test.txt',`${Date.now()}hi there\n`)

// fs.cpSync('./test.txt','./copy.txt')
// fs.unlinkSync('./copy.txt')

// const data=fs.statSync('./test.txt')
// console.log(data)

// fs.mkdirSync('my-docs/a/b/c')
// fs.mkdirSync('hello/a/c' ,{recursive:true})
fs.rmdirSync('hello',{recursive:true,force:true})