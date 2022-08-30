const { User } = require('../models');

const userData = [{
        username: 'Egwene',
        password: 'egwene'

    },
    {
        username: 'Samuel',
        password: 'samuel'
    },
    {
        username: 'Rand',
        password: 'rand'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;