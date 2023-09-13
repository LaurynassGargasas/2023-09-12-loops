function fizzbuzz(){
    for(let i = 1; i <= 100; i++){

        if(i % 3 === 0){
            console.log('Fizz')
        } else if(i % 5 === 0){
            console.log('Buzz')
        }else if(i % 7 === 0){
            console.log('Biff')
        } else if(i % 9 === 0){
            console.log('Fuzz')
        } else if(i % 9 === 0 && i % 3 === 0){
            console.log('FizzFuzz')
        } else if(i % 7 === 0 && i % 9 === 0){
            console.log('BuzzFuzz')
        } else if(i % 9 === 0 && i % 5 === 0){
            console.log('BiffFuzz')
        } else if(i % 9 === 0 && i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzzFuzz')
        } else if(i % 9 === 0 && i % 7 === 0 && i % 3 === 0){
            console.log('FizzBiffFuzz')
        } else if(i % 9 === 0 && i % 7 === 0 && i % 5 === 0){
            console.log('BuzzBiffFuzz')
        } else if(i % 7 === 0 && i % 3 === 0){
            console.log('FizzBiff')
        } else if(i % 7 === 0 && i % 5 === 0){
            console.log('BuzzBiff')
        } else if(i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            console.log('FizzBuzzBiff')
        } else if(i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && i % 9 === 0) {
            console.log('FizzBuzzBiffFuzz')
        } 
        else if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else {console.log(i)}
    }
}

fizzbuzz()