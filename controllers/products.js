const modelProduct = require('../models/product');
const app = require('express');
const router = app.Router();

/*

 Add one product 
 parameters: name, price, size
*
 */

router.post('/orc/v1/products', async(req, res) => {
    try {
        const createProduct = new modelProduct(req.body);       
        const result = await createProduct.save();
        res.status(201).json({error:false, data:result});
    }   catch (error) {
        res.status(500).json({error: true, data: []});
    }
});

/* 
 */

router.get('/', async(req,res) => {
    try {
        const dataProduct = await modelProduct.find();
        return res.json({error:false, data:dataProduct});
    } catch (error) {
        res.statusCode(500).json({error: true, data: []});
    }
});



// exports.addProduct = async (newProduct) => {
//     try {
//         const createProduct = new modelProduct(newProduct);       
//         const result = await createProduct.save();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// };

/* Update one product */
exports.updateProduct = async (findProduct, data) => {
    try {
        const searchProduct = await modelProduct.updateOne({name: findProduct}, {
            $set: {
                price : data
            } 
        });
        console.log(`${searchProduct.matchedCount} document matched`);
        console.log(`${searchProduct.modifiedCount} modified document`);
    } catch (error) {
        console.log(error);
    }
};

/* Delete one product */
exports.deleteProduct = async (search) => {
    try {
        const searchProduct = await modelProduct.deleteOne({name: search});
        console.log(searchProduct);
    } catch (error) {
        console.log(error);
    }
};

/* Get all products */
exports.getProducts = async () => {
    try {
        const users = await modelProduct.find();
        console.log(`[====== Todos los productos ======]\n
            ${users}`);
    } catch (err) {
        console.log(err);
    }
};
