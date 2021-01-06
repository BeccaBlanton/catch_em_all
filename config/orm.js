var connection = require("./connection")

const ORM = {
    selectAll:(table, cb)=>{
    var query = "SELECT * FROM ??";
    connection.query(query, [table], function(err, res){
        if (err) throw err;
        cb(res);
    });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} (${cols}, caught) VALUES ("${vals}", false)`
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },
    /*insertOne:(table, keyValues, cb)=>{
    var query = "INSERT INTO ?? SET ?";
    connection.query(query, 
        [table, keyValues], function(err, res){
        if (err) throw err;
        cb(res);
    });
    },*/
    updateOne:(table, column, value, col2, val2, cb)=>{
    var query = "UPDATE ?? SET ?? = ? WHERE ??=?";
    connection.query(query, [table, column, value, col2, val2], function(err, res){
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = ORM;