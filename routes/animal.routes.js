const express = require('express');
const {faker} = require('@faker-js/faker');
const _ = require('lodash');
const request = require('request');
const axios = require("axios");
const router = express.Router();
const animals = require('random-animals-api');
const config = require('../config/default.json')
const {response} = require("express");


router.get('/',  function (req, res, next) {
    const count = req.query.count;
    if (!count) {
        return res
            .status(400)
            .send({errorMsg: 'count query parameter is missing.'});
    }
    res.send(
        _.times(count,  () => {
            return {
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                streetAddress: faker.address.streetAddress(),
                phoneNumber: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                userImg: faker.image.animals(400, 600, true)
            };
        })
    );
});

/*
router.get('/img', async (req, res) => {
    let response = await axios.get('https://aws.random.cat/meow');
    console.log(response.data.file)
    res.json({img: response.data.file})
})
*/

module.exports = router;
