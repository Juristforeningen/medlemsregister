var app = require('../app.js');
var request = require('supertest').agent(app.listen());

describe('Website', function () {

  it('index should contain Juristforeningen', function (done) {
    request
    .get('/')
    .expect(200)
    .expect(/Juristforeningen/, done);
  });

  it('index should contain Registrer', function (done) {
    request
    .get('/')
    .expect(200)
    .expect(/Registrer/, done);
  });

  it('login should contain Log in', function (done) {
    request
    .get('/login')
    .expect(200)
    .expect(/Logg inn/, done);
  });

  it('recover should contain Glemt passord', function (done) {
    request
    .get('/recover')
    .expect(200)
    .expect(/Glemt passord/, done);
  });

  it('change should contain Endre passord', function (done) {
    request
    .get('/change')
    .expect(200)
    .expect(/Endre passord/, done);
  });

  it('bli-medlem should contain Bli medlem', function (done) {
    request
    .get('/bli-medlem')
    .expect(200)
    .expect(/Bli medlem/, done);
  });

});