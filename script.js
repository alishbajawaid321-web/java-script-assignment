// QUESTION NO 1
var shirt = 1500;
var trousers = 2500;
var totalbill = shirt + trousers;
console.log("Original Bill:RS.", totalbill);

var discount = 0;
if (totalbill >= 3000) {
    discount = totalbill * 10 / 100;
    console.log("Discount Amount Rs",discount);}
     
var finalbill = totalbill - discount;
console.log("Final Payable Amount:RS.", finalbill);


// QUESTION NO 2
var computer = Number(prompt("Enter Computer Science marks:"));
var mathematics = Number(prompt("Enter Mathematics marks"));
var english = Number(prompt("Enter English marks;"));

var totalMarks = computer + mathematics + english;
var percentage = (totalMarks / 300) * 100;

console.log("Total Marks:", totalMarks);
console.log("Percentage:", percentage + "%");

if (percentage >= 50) {
    console.log("Result:Pass");
} else {
    console.log("Result:Fail");
}

// QUESTION NO 3
var units = Number(prompt("Enter your monthly electricity units consumed"))

var bill = units * 10;
var bill2 = (100 * 10) + ((units - 100) * 15)
if (units <= 100) {
    console.log("bill");

}
else {
    console.log(bill2);

}
// QUESTION NO 4
var balance = 20000;
var withdrawl = Number(prompt("Enter Amount you what to withdrawl"));

if (withdrawl > 0 && withdrawl <= balance) {
    console.log("Remaining Balance;", balance - withdrawl);
}
else {

    console.log("Don't have enough balance");

}
// Question no 5
var input = Number(prompt("Enter any number"));
for (var i = 1; i <= 10; i++) {
    console.log(input, "x", i, "=", i * input)
}

//  QUESTION NO 6
var age = Number(prompt("Enter your age"));
var status = prompt("Are you student?")
if (age < 12) {
    console.log("ticket price:Rs 300");

}
else if (age = 12 && age <= 59) {
    console.log("ticket price: Rs 600");

}
else {
    console.log("ticket price: Rs 400");
}
var discount = 0;
if (ticketprice = 600 && status == "yes") {
    discount = ticketprice * 10 / 100;
}
var finalprice = ticketprice - discount

console.log("Discount Rs", discount);
console.log("Final Price Rs", finalprice);

// QUESTION NO 7
var salary = Number(prompt("Enter your basic salary:"));
var rating = Number(prompt("Enter your performance rating:"));
var years = Number(prompt("Enter your years of service:"));

var bonus = 0;

if (rating == 5 && years >= 5) {
    bonus = salary * 20 / 100;
    console.log(bonus);
} 
else if (rating == 4 && years >= 3) {
    bonus = salary * 15 / 100;
    console.log(bonus);
} 
else if (rating == 3 && years >= 2) {
    bonus = salary * 10 / 100;
    console.log(bonus);
} 
else {
    console.log("no bonus");
}

var finalsalary = salary + bonus;

console.log("Basic Salary:", salary);
console.log("Final Salary:", finalsalary);

// QUESTION NO 8

var orderAmount = Number(prompt("Enter food order amount:"));
var distance = Number(prompt("Enter delivery distance (in km):"));

var deliveryCharge = 0;

if (orderAmount >= 2000) {
    if (distance <= 5) {
        deliveryCharge = freedelivery;
        console.log(deliveryCharge);
    } else {
        deliveryCharge = (distance - 5) * 20;
        console.log(deliveryCharge);
    }
} 
else {
    if (distance <= 5) {
        deliveryCharge = 100;
        console.log(deliveryCharge);
    } else {
        deliveryCharge = 100 + ((distance - 5) * 20);
        console.log(deliveryCharge);
    }
}

var totalBill = orderAmount + deliveryCharge;

console.log("Food Order Amount:", orderAmount);
console.log("Total Bill:", totalBill);


