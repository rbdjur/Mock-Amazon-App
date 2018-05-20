
/*-----------------------------------------------------
    create variable mysql that holds the require method to call the npm packages of mysql
-----------------------------------------------------*/
var mysql = require('mysql');


/*-----------------------------------------------------
    create variable inquirer that holds the require method to call the npm packages of inquirer
-----------------------------------------------------*/
var inquirer = require("inquirer");

/*-----------------------------------------------------
    // create global variables. 
-----------------------------------------------------*/
var itemStocked;
var itemWanted;
var updatedItemFunction;
var OG;


/*-----------------------------------------------------
    // create a connection to the mysql program accessing the bamazon database with the correct access information. 
-----------------------------------------------------*/
var connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,

        // username
        user: 'root',

        password: "",
        database: "bamazon"
    });


/*-----------------------------------------------------
    using the connection variable and use a function to call the desired information, use the connect method to throw error if any error, and console log the connection threadID. 
-----------------------------------------------------*/
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    queryItems();
    "\n"
    buyItem();
});

/*-----------------------------------------------------
    his function as a global function will be used inside the connection method + embedd this function inside the method to display the data for the user.
-----------------------------------------------------*/
function queryItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log("\n" + "Items are listed in the following order" + "\n" +
            "Item Id:" + "\n" +
            "Item Name:" + "\n" +
            "Price: " + "\n" + "Stock Quantity:");
        "\n"
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id);
            console.log(res[i].product_name);
            console.log(res[i].price);
            console.log(res[i].stock_quantity + "\n");
        var OG = res[i].stock_quantity;
        };
    });
}

/*-----------------------------------------------------
   create a function called buyItem + this function will use the inquirer variable to initiate a prompt asking for the item_id and stock_quantity.
-----------------------------------------------------*/
function buyItem() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "item_id",
                type: "input",
                message: "What is the id of the item you would like to buy??"
            },
            {
                name: "stock_quantity",
                type: "input",
                message: "How many units do you want to purchase?"
            }
        ]).then(function (answer) {
            // After prompts ask for the item_id and the stock_quantity, access a new table strictly for what the user types in to the prompt - call this table, "wantedProduct".
            // This is extremely important to understand + realize these two tables are seperate because the "wantedProduct" table stores the information the user inserts into the terminal/bash command line. 
            // *This is represented by the "answer.item_id" + "answer.stock_quantity"
            var itemId = Number(answer.item_id);
            var stockQ = Number(answer.stock_quantity);
            console.log("wanted item id", itemId);
            console.log("wanted stock number", stockQ);

            connection.query("SELECT * FROM products", function (err, res) {
                var userItemId = Number(itemId);
                var userStockNum = stockQ;
                var dbStockId = userItemId;
                var dbstockNum = Number(stockQ);

                console.log("user item id",userItemId);
                console.log("user stock Number", userStockNum);
                console.log("Data Base ID", res[userItemId].item_id)
                console.log("Data Base stock number", res[userItemId].stock_quantity);


                connection.query("UPDATE products SET ? WHERE ?", [
                    {item_id: itemId},
                    {stock_quantity: stockQ},
                ], function(err, wow) {
                    var final = res[userItemId].stock_quantity - stockQ;
                    console.log("LOL",final);
                });


                // console.log("DB stock - user stock",res[0].item_id);
            });

            // function update() {
            //     connection.query("UPDATE ? FROM products WHERE ?", [
            //         { item_id: itemId },
            //         { stock_quantity: stockQ }

            //     ], function (err, res) {
            //         console.log(res.item_id);
            //         update();

            //     }
            //     )
            // }
        })
}



// connection.query("INSERT INTO wantedProduct SET ?", {
//     item_id: answer.item_id,
//     stock_quantity: answer.stock_quantity,
// },
//     function (err) {
//         if (err) throw (err);
//         console.log("Item logged");
//         console.log("Item Id:", answer.item_id);
//         console.log("Number of item(s) wanted: ", answer.stock_quantity);

// // TODO don't make it ID = 1 every time
// connection.query("SELECT * FROM wantedProduct WHERE id = 1", function (err, results) {
//     console.log("results");
//     var newQuantity = results[0].stock_quantity - answer.stock_quantity;
//     console.log(newQuantity);

// connection.query("SELECT * FROM wantedProduct WHERE id ?", {
//     item_id: answer.item_id
// }, function (err, results) {
//     console.log(results);
//     // var newQuantity = results[0].stock_quantity - answer.stock_quantity;
//     // console.log(newQuantity);
// })
//                 })
//         })
// }






                        // DO an UPDATE with the new quantity




// function update() {
//     console.log("HERE");
//     // connection.query('UPDATE products SET stock_quantity =' + (stock_quantity - answer.stock_quantity) + "WHERE item_id=" + item_id)






// function updateItem() {
//     connection.query('UPDATE products SET stock_quantity ='), function(err, res) {
//         if (err) throw (err);
//         var update = stock_quantity - answer.stock_quantity;
//         console.log("works!");
//         console.log(update);
//     }
// };

// var updateProductdbStock = products.stock_quantity - stock_quantity
//         console.log("Item ID:", item_id);
//         console.log("Number of items left:", updateProductdbStock);







 // function updateItem() {
        //     var updateInventory = 'UPDATE products SET stock_quantity =' + (res[i].stock_quantity - answer.stock_quantity) + 'WHERE item_id=' + answer.item_id;
        // }








 // function ave() {
                //     if (err) throw (err);
                //     connection.query("SELECT * FROM products WHERE id = ?", answer.item_id, function (err, res) {
                //         console.log("IT is working");
                //         var count = res.stock_quantity;
                //         var item_id = res.item_id;
                //         var deprecated = count - answer.item_id;
                //         console.log(count);
                //     },


                //         // var itemStocked = res.stock_quantity;
                //         // var itemWanted = answer.item_id;
                //         // console.log(itemStocked - itemWanted);
                //         // console.log(itemWanted);
                //     )
                // }

                /*
                - look up google how to update values on a database using javascript
                - // var customerItem;
                // console.log(answer.name)
                */




            //    connection.query("UPDATE products SET stock_quantity =" + (products.stock_quantity - stock_quantity) + 'WHERE item_id' + item_id);

            //    console.log("update Query =", updateProductdbStock);