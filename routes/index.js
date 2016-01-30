module.exports = function (app) {
  var Router 		= require('koa-router');
  var router = new Router();

  router
  .get('/', function *() {
    yield this.render('register');
  })
  .get('/login', function *() {
    yield this.render('login');
  })
  .get('/recover', function *() {
    yield this.render('recover');
  })
  .get('/members', function *() {
    yield this.render('members');
  })
  .get('/bli-medlem', function *() {
    yield this.render('bli-medlem');
  })
  .get('/calendar', function *() {
    yield this.render('calendar');
  })
  .get('/change', function *() {
    yield this.render('change');
  });

  app.use(router.middleware());
};
