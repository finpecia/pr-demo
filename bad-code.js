const DB_PASSWORD = "supersecret123";  // hardcoded secret

function add(a, b) {
    return a + c;  // wrong variable
}

function getUser(userId) {
    const query = "SELECT * FROM users WHERE id = " + userId;  // sql injection
    db.execute(query);
}

var x = undefined;
console.log(x.name);  // will crash, can't read property of undefined