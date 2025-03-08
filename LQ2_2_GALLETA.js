//using LOOP STATEMENT and prompt()
//ask the user for the dog breed
dog_breed = "Bulldog";
i = 4;
//ask the user for the dog_breed
var dog_breed = prompt("Enter your dog_breed:");
//ask the user how many times to print
var print_count = prompt("Enter the number of count to print");

//check the print_count is a valid number
if (! isNAN(print_count)&& print_count > 0){  //NAN: Not a Number
    for (var i = 0; i < print_count; i++){
        console.log(dog_breed);
    }
} else {
    console.log("Invalid number. Please enter a valid number.");
}