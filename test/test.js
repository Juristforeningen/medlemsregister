var app = require('../app.js');
var request = require('supertest').agent(app.listen());

describe('Hello Juristforeningen', function () {
  it('should say "Hello Juristforeningen"', function (done) {
    request
    .get('/')
    .expect(200)
    .expect('Hello Juristforeningen', done);
  });
});