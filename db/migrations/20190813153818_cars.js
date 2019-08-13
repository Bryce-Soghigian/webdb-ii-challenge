

exports.up = function(knex, Promise) {


    return knex.schema
    .createTable("carz",tbl => {
        tbl.increments()
        //criticals
        //notNullable === included in yup
        tbl.text("VIN",100).notNullable().unique();
        tbl.text("make").notNullable();
        tbl.text("model").notNullable();
        tbl.integer("mileage").notNullable();
        tbl.text("transtype");
        tbl.text("status");
    })

    // VIN idnum,
    // make chevy,
    // model 6969,
    // mileage 45000,
//     // status salvage,
//    knex.schema.createtable("cars");
//    knex('cars').insert({VIN:'idnum'}).returning('*').toString();
//    knex('cars').insert({Make: 'Camaro' }).returning('*').toString();
//    knex('cars').insert({model:"SS"}).returning('*').toString();
//    knex('cars').insert({mileage:"45000"}).returning('*').toString();
//    knex('cars').insert({status:"salvage"}).returning('*').toString();


};

exports.down = function(knex,Promise) {

    return knex.schema.dropTable('carz');


  
};
// The client for this API is a car dealer who has provided the following specs:

// - The critical information for each car is the VIN, make, model, and mileage. 
// - They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known. 