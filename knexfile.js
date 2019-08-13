// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: "./db/carsdb.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds:{
      directory: './db/seeds'
    }

  },
  
// var pg = require('knex')({client: 'pg'});
// exports.up = function(knex, Promise) {
//     // VIN idnum,
//     // make chevy,
//     // model 6969,
//     // mileage 45000,
//     // status salvage,
//    knex.schema.createtable("cars");
//    knex('cars').insert({VIN:'idnum'}).returning('*').toString();
//    knex('cars').insert({Make: 'Camaro' }).returning('*').toString();
//    knex('cars').insert({model:"SS"}).returning('*').toString();
//    knex('cars').insert({mileage:"45000"}).returning('*').toString();
//    knex('cars').insert({status:"salvage"}).returning('*').toString();


// };

// exports.down = function(knex) {
  
// };
// // The client for this API is a car dealer who has provided the following specs:

// // - The critical information for each car is the VIN, make, model, and mileage. 
// // - They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known. 

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
