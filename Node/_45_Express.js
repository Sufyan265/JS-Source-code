// is tra hm is function ko use kr k 1 server bnaa skty he ↓ 
const express = require('express')
 
// html file ko atach krny k liya pahly "path" require kre ↓ 
const path = require("path")

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('This is server')
})


// "/" kaa use kr k agar hm "home" type kre gy to screen pr "Home" chal jay ga ↓ 
app.get('/home', (req, res) => {
  res.send('Home')
})

// is tra hm html file ko bhi server me send kr skty he (pahly uper )
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})


app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/contact', (req, res) => {
  res.send('Contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
