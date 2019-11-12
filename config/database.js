// POSTGRE POOL
var { Pool } = require('pg');

module.exports = () => {
    // POOL CONFIG
    let pool = new Pool({
        user: 'fuafediflrqxjy',
        password: '18f46088b62751ebb9f8129ab96232aae756c64108ac8babbc14639a0ae346dc',
        host: 'ec2-107-21-126-201.compute-1.amazonaws.com',
        port: 5432,
        database: 'daq10bp74mmn86',
        max: 10,
        idleTimeoutMillis: 30000,
        ssl: true
    });

    return pool;
};