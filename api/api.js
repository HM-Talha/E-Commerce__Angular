const item = require("./item");
const cart = require("./addToCart");
const bill = require("./payBill");
const getCarts = require("./Carts")
var express = require("express");

var api = express();

api.get("/api/item/allItems", item.getAllItems);
api.post("/api/cart/addToCart", cart.addToCart);
api.post("/api/bill/payBill", bill.addBilling);
api.get("/api/getcart/allCarts/:id", getCarts.findCarts);
api.post("/api/additem",item.addItems);
api.post("/api/remove/removeProduct",getCarts.removeProduct);


module.exports = api;
