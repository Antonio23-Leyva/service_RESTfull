const express = require('express');
const router = express().router();
const useModel = require('./controllers/products');


/* Add one product 
 parameters: name, price, size
*/

useModel.addProduct({name:'drink',price:17,size:72});