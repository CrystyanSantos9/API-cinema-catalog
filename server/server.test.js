const test = require('tape');
const server = require('./server');
const assert = require('assert');

function apiMock(app, repo){
    console.log("do nothing");
}



function runTests(){
    test('Server Start',(t)=>{
        server.start(apiMock, null,(err,srv)=>{ //dependencias api, repositorio e um callback
            t.assert(!err && srv, "Server started") // se não deu erro e retornou um callback
            t.end();
        })
    })

    test('Server Stop',(t)=>{
        t.assert(server.stop(),"Server stopped");
        t.end();
    })
}



module.exports = {runTests}