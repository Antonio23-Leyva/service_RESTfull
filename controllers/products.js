const modelProduct = require('../models/product');
const express = require('express');

/*
 Add one product 
 */

exports.addProduct = async(req, res) => {
    try {
        const result = await modelProduct.create(req.body);
        res.status(201).json({
            status:'transaction sucessfull...', 
            data: {
                result
            }
        });
    }   catch (error) {
        res.status(500).json({
            status: 'transaction failed', 
            message: error
        });
    }
};


/* Update one product */
exports.updateProduct = async(req, res) => {
    try {
        const results = await modelProduct.updateOne({ _id: req.params.id },
            {
                $set: req.body
            }
        );
        res.status(201).json({
            status:'transaction sucessfull...',
            data: {
                results
            }
        });
        
    } catch (error) {
        res.status(500).json({
            status:'transaction failed', 
            message: error
        });
    }
};

/* Delete one product */
exports.deleteProduct = async (req, res) => {
    try {
        const results = await modelProduct.deleteOne(req.body.id);
        res.status(201).json({
            status:'transaction sucessfull...', 
            data: {
                results
            }
        });
    } catch (error) {
        res.status(500).json({
            status:'transaction failed', 
            message: error
        });
    }
};

/* Get all products */
exports.getProducts = async (req,res) => {
    try {
        const results = await modelProduct.find();
        res.status(201).json({
            status:'transaction sucessfull...', 
            data: {
                results
            }
        });
    } catch (err) {
        res.status(500).json({
            status:'transaction failed',
            message: err
        });
    }
};
