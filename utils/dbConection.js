const  mongose  = require('mongoose');
const uri = 'mongodb+srv://dev:GPxt9k7Q5oBlg2Iw@cluster0.ouzc6.mongodb.net/products?retryWrites=true&w=majority';

exports.con = async () => {
    try {
        await mongose.connect(uri);  
        console.log('Successfull conection');
    } catch (error) {
        console.log(error); 
    }
};
