var express = require('express')
const path = require('path')
var app = express()
var fs  = require('fs')

app.set('view engine', 'ejs')
app.set('views' ,'./views')

app.use('/rs', express.static('public'))
app.get('/', function (req, res, next) 
{
    message = "Welcome"
    res.render('home', {message: message})
})

app.get('/stream/' ,function(req,res)
{
    var id  = req.query.id;
    if (id === null || id === undefined || id === '') 
    {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<center><h1>Not found </h1></center>");
        res.end();
        return;
    }
    const path = 'videos/video.mp4'
    fs.stat(path, (err, stat) => 
    {
        if (err !== null && err.code === 'ENOENT') 
        {
            res.sendStatus(404);
        }
        const fileSize = stat.size
        const range = req.headers.range
        if (range) 
        {
            const parts = range.replace(/bytes=/, "").split("-");
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize-1;
            const chunksize = (end-start)+1;
            const file = fs.createReadStream(path, {start, end});
            const head = 
            {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4',
            }
            res.writeHead(206, head);
            file.pipe(res);
        } 
        else 
        {
            const head = 
            {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4',
            }
    
            res.writeHead(200, head);
            fs.createReadStream(path).pipe(res);
        }
    })
})

app.get('/watch/:id' ,function(req,res)
{
    var id  = req.query.id;
    video = {"title" : "Video", "url" :  req.protocol+"://"+req.get('host')+"/stream?id="+id}
    res.render('watch', {video : video})
})

app.listen(5151);