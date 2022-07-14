const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./DB/message.sqlite"
    },
    useNullAsDefault:true
});
knex.raw("select sqlite_version()").then(()=> {
    console.log('sqlite connection OK');
});
module.exports = knex;