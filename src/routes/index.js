const newsRouter = require('./news');
const siteRotuer = require('./site');
function route(app){

    app.use('/news',newsRouter);
     
    app.use('/',siteRotuer);
   
}
module.exports = route;