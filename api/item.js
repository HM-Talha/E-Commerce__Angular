var mysql =require('mysql');
var db = require('./database');


exports.getAllItems = function (req, res) {
    var sql = "SELECT * FROM orders";
    //console.log(sql);
    db.query(sql, function (err, data) {    
        console.log(err)
        console.log(data)
        res.json(data);
    });
};

exports.addItems = function(req ,res){
    let params = req.body
    db.query('INSERT INTO orders SET ?', params, (err, result) => {
        if (err) {
          console.log(err)
          res.status(500).json({
            message:"Something went Wrong ",
            err:err,
          })
        }
        else{
          return res.status(200).json(
            {
              message:"Item Add Successfully",
              success:true,
              name :params.item_name
            }
          )
        }
    });
};
