//cinema-catalog.test.js
const test = require('tape');
const supertest = require('supertest');
const movies = require('./cinema-catalog');
const server = require("../server/server");
const repository = require("../repository/repository");

function runTests() {

    var app = null;

    server.start(movies, repository, (err, app) => {
        var cityId = null;
        var movieId = null;
        var cinemaId = null;

        test('GET /cities', (t) => {
            supertest(app)
                .get('/cities')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    if (res.body && res.body.length > 0) cityId = res.body[1]._id;
                    t.error(err, 'No errors')
                    t.assert(res.body && res.body.length > 0, "All Cities returned")
                    t.end()
                })
        })



        //end of server start 
    })

}
       

module.exports = {runTests}