function makeAdder(x) {
    return function add(y) {
        return x + y
    }
}

const lines = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const x = Number(lines[0]);
const y = Number(lines[1]);
console.log(makeAdder(x)(y));
