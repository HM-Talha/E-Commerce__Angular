const mysql = require("mysql");
var db = require("./database");
const helper = require("./helper");

exports.addBilling = async (req, res) => {
  try {
    const {
      fullName,
      address,
      zipCode,
      city,
      country,
      cardNumber,
      expiryDate,
      cardCode,
      cartID,
    } = req.body;
    if (
      !fullName ||
      !address ||
      !zipCode ||
      !city ||
      !country ||
      !cardNumber ||
      !expiryDate ||
      !cardCode ||
      !cartID
    ) {
      return res.status(422).send({
        success: false,
        msg: "required params are missing",
      });
    }

    let sqlSearch = `select * from Cart WHERE cartID = ?`;
    const search_query = mysql.format(sqlSearch, [cartID]);
    let findProduct = await helper.get(search_query);

    if (findProduct.length === 0) {
      return res.status(200).send({
        success: false,
        msg: "empty Card",
      });
    } else {
      try {
        let productIDs = findProduct.map((item) => item.productID);
        let rows = [];
        for (let i = 0; i < productIDs.length; i++) {
          let productID = productIDs[i];
          let sql = `INSERT INTO Billing (fullName, address, zipCode, city, country, cardNumber, expiryDate, cardCode, productID,cartID) VALUES ('${fullName}',' ${address}', '${zipCode}', '${city}', '${country}', '${cardNumber}', '${expiryDate}', '${cardCode}','${productID}','${cartID}')`;
          db.query(sql, (err, data) => {
            console.log("data", data);
          });
        }
        return res.status(200).send({
          success: true,
          msg: "Pay Bill successfully",
        });
      } catch (error) {
        return res.status(500).send({
          success: false,
          msg: "something went wrong 🤦‍♂️ please try again",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Something went wrong please try again",
      success: false,
    });
  }
};
