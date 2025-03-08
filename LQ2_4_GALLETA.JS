//Matrix printer: Using a (conditonal  and/or LOOP statement), console.log(), and prompt()
let create_Matrix = confirm("Do you want to create a Matrix? Click OK if yes, Cancel for no."); //"yes"(true), "no"(false)

if (create_Matrix){
    let limit1 = perseInt(prompt("Enter first limit for loop:"));
    let limit2 = perseInt(prompt("Enter second limit for loop:"));
    let limit3 = perseInt(prompt("Enter third limit for loop:"));

    let str1 = prompt("Enter the first string(word, char, number or symbol):");
    let str2 = prompt("Enter the second string(word, char, number or symbol):");
    let str3 = prompt("Enter the third string(word, char, number or symbol):");

    console.log("Generate Matrix:");
    limit = 3;
    
    for(let i = 0 ; i < limit1; i++){
        for ( let j = 0; j<limit2; j++){
            for(let k = 0; k<limit3; k++){
                console.log ('${str1} ${str2} ${str3}');
            }
        }
    }
} else {
    console.log("Thank you, re_run the program if you change your mind.")

} 
