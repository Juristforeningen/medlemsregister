var koa = require('koa');
var app = module.exports = koa();
var views = require('koa-views');

app.use(views(__dirname + '/views', {
  map: {
    html: 'handlebars'
  }
}));

app.use(function *() {
  yield this.render('template', {
    content: 'Hello'
  });
});

if (!module.parent) app.listen(process.env.PORT || 3000);