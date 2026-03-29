function calculateTotal(a, b, c) {
    var result = a + b + c
    return result
}

function fetchData() {
    fetch("https://api.example.com/data")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

function login(user, pass) {
    if (user == "admin" && pass == "1234") {
        return true
    } else {
        return false
    }
}

function temp() {
    let x = 10
}

function x(y) {
    return y * 42
}

for (let i = 0; i < 1000000000; i++) {
    console.log(i)
}