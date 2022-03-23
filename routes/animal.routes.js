const express = require('express');
const {faker} = require('@faker-js/faker');
const _ = require('lodash');
const router = express.Router();



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
                findName: faker.name.findName(),
                animalName: faker.name.firstName(),
                city: faker.address.city(),
                streetAddress: faker.address.streetAddress(),
                phoneNumber: faker.phone.phoneNumber(),
                data: faker.date.past(),
                email: faker.internet.email(),
                animalImg: faker.image.animals(400, 600, true),
                description: faker.lorem.paragraph()
            };
        })
    );
});

module.exports = router;
