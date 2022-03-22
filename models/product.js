const mongooseClient = require('mongoose');


const uri = 'mongodb+srv://dev:GPxt9k7Q5oBlg2Iw@cluster0.ouzc6.mongodb.net/products?retryWrites=true&w=majority';

mongooseClient.connect(uri);

const productSchema = new mongooseClient.Schema({
    name : String,
    price : Number,
    size: Number

});

const productModel = mongooseClient.model('products', productSchema);

module.exports = productModel;