var Controller = require('./../controllers/controller');


module.exports = function(app){
//get routes
  app.get('/', Controller.index);
}
