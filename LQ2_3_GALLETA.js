//price inquiry: using SWITCH(conditonal statement), alert(), and prompt() 
console.log("List of Choices:\nA. Pepsi Cola \nB.Coca Cola \nC. Apple(per kg) \nD. Orange \nE. Hotdogs(per kg)");

let item_Choice = prompt("Enter your item choice(A-E):").toUpperCase();  //(A-E) ITEM SELECTION
let QTY = parseFloat(prompt("Enter the quantity:"));
let Tot_Price;
switch (item_Choice){ //SWTICH IS CALCULATE THE TOTAL PRICE BASE ON ITEM CHOICElet str1 = prompt("Enter the first string(word, char, number or symbol):");
    case 'A':
        Tot_Price = 1.50 * QTY ; // Sample price for pepsi cola             // QTY(quantity)
        alert('Total price of the order Pepsi Cola x ${QTY}: $${Tot_Price');
        break;

        case 'B':
        Tot_Price = 2.50 * QTY ; // Sample price for coca cola
        alert('Total price of the order Coca Cola x ${QTY}: $${Tot_Price');
        break;

        case 'C':
        Tot_Price = 1.00 * QTY ; // Sample price for apple
        alert('Total price of the order Apple x ${QTY}: $${Tot_Price');
        break;

        case 'D':
        Tot_Price = 1.00 * QTY ; // Sample price for orange
        alert('Total price of the order Orange x ${QTY}: $${Tot_Price');
        break;

        case 'E':
        Tot_Price = 2.00 * QTY ; // Sample price for pepsi cola
        alert('Total price of the order Hotdog x ${QTY}: $${Tot_Price');
        break;

        default:
            alert("No matching item! Try to re-run the programm");
}
