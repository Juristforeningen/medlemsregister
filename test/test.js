// var assert = require('assert');
var app = require('../app.js');
var request = require('supertest').agent(app.listen());

describe('App', function () {
  it('index should contain Juristforeningen', function (done) {
    request
    .get('/')
    .expect(200)
    .expect(/Juristforeningen/, done);
  });
});