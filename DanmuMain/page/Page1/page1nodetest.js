//先npm install express
const { response } = require('express');
const express = require('express')
const app = express()
const port = 8099
 
app.use(express.static(__dirname + '/'));
 
app.get('/event', (req, res) => {
    try {
        res.writeHead(200, { "Cache-Control": "no-cache", 'Content-Type': 'text/event-stream' });
        setInterval(() => {
            const data = {
                now: +new Date()
            }
            res.write(  // 命名事件
                'event:' + '\n' +
                'data:' + JSON.stringify(data) + '\n' +
                'retry:' + '2000' + '\n' +
                'id:' + '12345' + '\n\n'
              )
        }, 2000)
    } catch (error) {
        console.log(error)
    }
    
})
 
app.listen(port, () => {
    console.log('监听'+ port + '端口中。。。')
})