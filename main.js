function makeCounter() {
    // Use a let binding inside this function and return a function
    // that increments and returns it.
    let a = 0
    function f() {
        a++
        return a
    }
    return f
}

const n = Number(require('fs').readFileSync(0, 'utf-8').trim());
const counter = makeCounter();
for (let i = 0; i < n; i++) console.log(counter());
