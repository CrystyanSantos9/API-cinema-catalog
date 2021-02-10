require('dotenv-safe').config()
require('./config/mongodb.test').runTests();
require('./repository/repository.test').runTests();
require('./api/cinema-catalog.test').runTests()

