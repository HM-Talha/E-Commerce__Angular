app.controller(
  "cartCtrl",
  function ($scope, $http, $window, $location, $sce, $timeout, store) {
    var baseurl = "http://localhost:9000/shop/";
    // console.Flog(123465);
    let id = localStorage.getItem("cid");

    let itemQuantity = document.getElementById("itemQuantity");
    // console.log(itemQuantity);

    // itemQuantity.innerHTML = quantity
    $scope.listcart = function (req, res) {
      $http
        .get(baseurl + `api/getcart/allCarts/${id}`)
        .success(function (res) {
          console.log(res);

          if (res.status == "false") {
          } else {
            $scope.carts = res.cartData;
            let id = JSON.parse(localStorage.getItem("org_id")) - 1;

            // console.log(res.cartData[0]);
            var data = res.cartData[0];

            let quantity = JSON.parse(localStorage.getItem("quantity"));

            let itemName = document.getElementById("itemName");

            // console.log("itemName with html", itemName);

            // console.log("item name ", data.item_name);
            // itemName.innerText = data.item_name;

            // itemName = data.item_name;
            // console.log(itemName);

            let itemPrice = document.getElementById("itemPrice");
            var arrayBufferView = new Uint8Array(data.item_picture.data);
            var blob = new Blob([arrayBufferView], {
              type: "image/jpeg",
            });
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(blob);
            // itemPrice.innerText = data.item_price;
            $scope.image = imageUrl;
            // console.log(imageUrl);
            let itemQuantity = document.getElementById("itemQuantity");
            // itemQuantity.innerText = quantity;
          }
        })
        .error(function () {});
    };
    $scope.cartDelete = function (id) {
      console.log(id);
      let cartID = localStorage.getItem("cid");
      let productID = id;
      // console.log("cart ID ", cartID);
      // console.log("Product ID ", productID);
      console.log(baseurl);
      $scope.formvalidate = "true";
      console.log("New delete");
      console.log($scope.carts);
      $http
        .post(baseurl + "api/remove/removeProduct", { cartID, productID })
        .success(function (res) {
          $scope.response = res;
          console.log(res);
          if (res.status == "false") {
            alert(res.message);
          } else {
            alert("org deleted");
            location.reload();
          }
        });
    };
  }
);
