


const http=require('http')
const fs=require('fs')
const url=require('url')


const myServer=http.createServer((req,res)=>{
    if (req.url==='/favicon.ico') return  res.end()
    const log=`${Date.now()} ${req.url} new req received\n`
    const myUrl=url.parse(req.url,true)
    console.log(myUrl)

    fs.appendFile('log.txt',log,(err)=>{
        switch(myUrl.pathname){
            case '/':
                res.end('home page');
                break;
            case '/about':
                const username=myUrl.query.myname
                res.end(`hi, ${username}`);
                break;
            case '/search':
                const search=myUrl.query.search_query
                res.end('here are your results for '+search)
                break
            default:
                res.end('not found 404');
                break;
        }
        // res.end('server started')
    })

})
myServer.listen(8000,()=>console.log('server started'))