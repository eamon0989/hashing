
let password; //the correct pin will be stored here and returned to user
let show = 15; //amount of attempts to print
let checks = 0; //how many hashes were checked



function codecracker1(input, md5) { //this function takes the input and cracks the code, then returns it to the other function
    for(i = 0; i < (input.length); i++) {
        let ch1 = input[i];
            for(j = 0; j < (input.length); j++) {
                let ch2 = input[j];
                    for(k = 0; k < (input.length); k++) {
                        let ch3 = input[k];
                            for(l = 0; l < (input.length); l++) {
                                let ch4 = input[l];
                                checks++; // adds to counter every time a hash is checked
                            
                                let guess = ch1.ch2.ch3.ch4; //concatinates 4 chars together
                                let attempt = MD5(guess);// checks current string's hash against user's md5 hash
                                if (attempt == md5) {
                                    password = guess; //stores the current (correct) guess as the password
                                    return password;
                                    break;
                                    }
                                if ( show > 0 ) {
                                    console.log(attempt, guess); // prints the first few attempts until counter reaches 0
                                    show = show--;
                                    }
                                
                                }
                        }
                }
        }
}
/*
This function is here to optimize the overall workings, if it checks the pin for symbols it takes a long time, even if
the pin is simple and only contains numbers. It checks in increasing order of complexity, first numbers, then letters, then symbols.
It alse keeps track of the total time and returns the correct password to the user
*/
function codecracker(md5) { 
    let numbers ="0123456789";
    let numbersandletters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numletandsymb = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#%&/()=?¿'¡*+[]}{;:_,.-<>|";

    // time_pre = microtime(true);
    // md5 = _GET['md5'];
    codecracker1(numbers, md5);
        if (password != true) {
            codecracker1(numbersandletters, md5);
                if (password != true) {
                    codecracker1(numletandsymb, md5);
                    if (password != true) {
                        console.log("I can't crack this pin");
                    }
            }
        }
    // time_post = microtime(true);
    // print "Elapsed time: ";
    // print time_post-time_pre; //working
    // print "\n";  

    if (password !=false) { 
        console.log(`Total number of hashes checked: ${checks}`);
        console.log(`Your pin was: ${password}`); 
    }
}
