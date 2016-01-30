var koa = require('koa');
var app = module.exports = koa();
var koahbs = require('koa-hbs');

app.use(koahbs.middleware({
  viewPath: __dirname + '/views',
  partialsPath: __dirname + '/views/partials',
  defaultLayout: 'main'
}));

require('./routes')(app);

if (!module.parent) app.listen(process.env.PORT || 3000);