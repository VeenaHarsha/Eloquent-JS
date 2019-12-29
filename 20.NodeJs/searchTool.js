// const {statSync,readdirSync,readFileSync} = require('fs')
// let grep = new RegExp(process.argv[2])
// for(let arg of process.argv.slice(3)){
//     getFileMatches(arg)
// }

// async function getFileMatches(file) {
//     let s = statSync(file)
//     if(s.isDirectory()){
//         for(let f of readdirSync(file)){
//             getFileMatches(file + "/" + f)
//         }
//      } else if(grep.test(readFileSync(file,'utf8'))){
//         console.log(file)
//       }
        
// }

const {stat,readdir,readFile} = require('fs').promises

let grep = new RegExp(process.argv[2])
for(let arg of process.argv.slice(3)){
    getFileMatches(arg)
}

async function getFileMatches(file) {
    let s = await stat(file)
    if(s.isDirectory()){
        for(let f of readdir(file)){
            getFileMatches(file + "/" + f)
        }
     }else if(grep.test(file)){
         console.log(file)
     }
}
