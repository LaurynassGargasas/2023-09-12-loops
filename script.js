

function daugyba(number) {
    for(let i = 100; i >= 1; i--) {
        let output = i * number
        console.log(`${i} * 2 = ${output}`)
    }
}

function daugybais5(number) {
    for(let i = 100; i >= 1; i--) {
        let output = i * number
        console.log(`${i} * 5 = ${output}`)
    }
}

function plius5(number){
    for(let i = 100; i >= 1; i--){
        let output = i + number
        console.log(`${i} + 5 = ${output}`)
    }
}

function atimtis2(number){
    for(let i = 100; i >= 1; i--){
        let output = i - number
        console.log(`${i} - 2 = ${output}`)
    }
}

function kvadratu(number){
    for(let i = 100; i >= 1; i--) {
        let output = Math.pow(i, number)
        console.log(`${i} ** 2 = ${output}`)
    }
}

function kubu(number){
    for(let i = 100; i >= 1; i--) {
        let output = Math.pow(i, number)
        console.log(`${i} ** 3 = ${output}`)
    }
}


// daugyba(2)
// daugybais5(5)
// plius5(5)
// atimtis2(2)
// kvadratu(2)
// kubu(3)
