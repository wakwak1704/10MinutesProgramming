fn main(){
    evenOrOdd(2);
    evenOrOdd(3);
}

fn evenOrOdd(num:i32) -> () {
    if(num % 2 == 0) {
        println!("{} is even", num);
    } else {
        println!("{} is odd", num);
    }
}