// Event emiter example
// const EventEmitter = require('events');

// const customEmiter = new EventEmitter();

// // Subscribe first before calling emit 
// customEmiter.on("Event", (data)=> console.log(data))
// setInterval(()=> customEmiter.emit("Event", "Hello world"), 3000)

// Read streams example
// const {createReadStream} = require('fs')

// // Default size is 64kB
// const stream = createReadStream("../content/new_file.txt", {'encoding':'utf-8'})
// stream.on('data', (response)=>console.log(response))

// stream.on('error', (err)=>{
//     console.log(err)
// })

// Read stream with HTTP server
const httpServer = require('http')
const {createReadStream} = require('fs')

const server = httpServer.createServer((req, res)=>{
    fileStream = createReadStream("../content/new_file.txt", {'encoding':'utf-8'})
    fileStream.on('open', (data)=>{
        fileStream.pipe(res);
    })
    fileStream.on('error', ()=>{
        res.end("Error is observed")
    })
    }).listen(5001)
