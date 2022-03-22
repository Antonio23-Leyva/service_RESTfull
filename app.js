const express = require('express');
const routeModel = require('./routes/index');
const app = express();


app.use(express.json());
app.use('/api/v1/products', routeModel);


app.listen(3001, () =>{
    console.log('server running port:3001');
});








/* Add one product 
 parameters: name, price, size
*/

// useModel.addProduct({name:'drink',price:17,size:72});