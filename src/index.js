const express = require('express');
const app = express();
const morgan=require('morgan');
const path=require('path');
const { engine } = require ('express-handlebars');
const { dirname } = require('path');
const port = 3001;
app.use(express.static(path.join(__dirname,'resources/public')));
console.log(__dirname);
// http logger
app.use(morgan('combined'));
//  template engine
app.engine('hbs',engine({
  extname:'hbs'
}));
app.set('view engine','hbs');
// set view
app.set('views',path.join(__dirname,'resources/views'))
app.get('/', (req, res) => {
  res.render('home')
  // res.send('<html><head></head><body><h1>Hello World!</h1></body></html>')
})
app.get('/news', (req, res) => {
  res.render('new')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})