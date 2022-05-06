const mysql = require("mysql");
var db = require("./database");
const { v4: uuidv4 } = require("uuid");
const helper = require("./helper");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

exports.addToCart = async (req, res) => {
  try {
    const { productID, cartID } = req.body;
    if (productID && cartID) {
      const sql = `select * from product where productID = '${productID}'`;
      const result = await db.query(sql);

      let sqlSearch = `select item_quantity from orders WHERE org_id = ? `;
      const search_query = mysql.format(sqlSearch, [productID]);
      let item_quantity = await helper.get(search_query);
      let qty = item_quantity[0].item_quantity;

      let sql1 = `INSERT INTO Cart (productID, cartID) VALUES ('${productID}', '${cartID}')`;
      db.query(sql1, (err, result) => {
        if (err) throw err;
        return res.status(200).json({
          success: true,
          msg: "product added to cart ",
          cartID: cartID,
          item_qty: qty,
        });
      });
    } else if (!productID) {
      return res.status(422).json({
        success: false,
        msg: "productID is missing",
      });
    } else {
      let cartID = uuidv4();
      let sql = `INSERT INTO Cart (productID, cartID) VALUES ('${productID}', '${cartID}')`;
      let sqlSearch = `select item_quantity from orders WHERE org_id = ? `;
      const search_query = mysql.format(sqlSearch, [productID]);
      let item_quantity = await helper.get(search_query);
      let qty = item_quantity[0].item_quantity;
      db.query(sql, (err, result) => {
        console.log(result);
        if (err) throw err;
        res.status(200).json({
          success: true,
          msg: "product added to cart",
          cartID: cartID,
          item_qty: qty,
        });
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong please try again",
      success: false,
    });
  }
};
