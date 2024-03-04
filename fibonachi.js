const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan jumlah baris: ', (rows) => {
  rl.question('Masukkan jumlah kolom: ', (cols) => {
    const fibTable = generateFibonacciTable(parseInt(rows), parseInt(cols));
    console.log("Tampilan:");
    fibTable.forEach(row => console.log(row.join(' ')));
    rl.close();
  });
});

function generateFibonacciTable(rows, cols) {
    function fibonacci(n) {
        let fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    }

    const fibSeq = fibonacci(rows * cols);

    const fibTable = [];
    let index = 0;
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols && index < fibSeq.length; j++) {
            row.push(fibSeq[index]);
            index++;
        }
        fibTable.push(row);
    }

    return fibTable;
}
