#include <stdio.h>

void evenOrOdd(int num);

int main(void){
    evenOrOdd(2);
    evenOrOdd(3);
}

void evenOrOdd(int num) {
    if(num % 2 == 0) {
        printf("%d is even\n", num);
    } else {
        printf("%d is odd\n", num);
    }
}
