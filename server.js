const app = require('./app');
const mongoose = require('mongoose');


mongoose.set('strictQuery' , false);

require('dotenv').config({path:'variables.env'});



mongoose.connect(process.env.DATABASE, {useNewUrlParser:true, useUnifiedTopology:true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error' , (error) => {
     console.log("ERROR: " + error.message);

})

app.set('port',process.env.PORT);
const server = app.listen(app.get('port'),() =>{
    console.log("SERVIDOR RODANDO NA PORTA: " + server.address().port);
});
 