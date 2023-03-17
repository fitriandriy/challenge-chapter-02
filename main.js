const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function question(q) {
    return new Promise(resolve => {
        interface.question(q, data => {
            resolve(data);
        });
    });
}

function exit() {
    process.exit();
}

async function getNumber() {
    const a = await question('    Input nilai: ');
    
    if ( a == 'q' ) {
        main();
    } else {
        arr.push(parseInt(a));
        getNumber();
    }
}

function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(`
    --------------------
    Urutan nilai: ${arr}`);
}

function passedOrFailed(arr) {
    let passedTheTest = 0;
    let failedTheTest = 0;
    arr.forEach(element => {
        element >= 60 ? passedTheTest++ : failedTheTest++;
    });
    console.log(`
    Jumlah siswa lulus: ${passedTheTest}
    Jumlah siswa tidak lulus: ${failedTheTest}
    `)
}

function isIncluded(arr) {
    const highScore = [];

    arr.forEach(element => {
        a = parseInt(element);
        if ( a == 90 || a == 100 ) {
            highScore.push(a);
        }
    });
    
    console.log(`    Daftar nilai 90 dan 100: ${highScore}`)
}

function average(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    console.log(`    Rerata nilai: ${sum/arr.length}`);
}

function main() {
    bubbleSort(arr);
    average(arr);
    passedOrFailed(arr);    
    isIncluded(arr);
    const maxValue = Math.max(...arr);
    const minValue = Math.min(...arr);

    console.log(`
    Nilai tertinggi: ${maxValue}
    Nilai terendah: ${minValue}
    `)

    exit();
}

const arr = [];

getNumber();