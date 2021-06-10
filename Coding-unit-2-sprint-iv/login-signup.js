var u = [];
if (localStorage.getItem('users') == undefined) {
    localStorage.setItem('users', JSON.stringify(u));
}

function login(e) {

    e.preventDefault();

    var data = JSON.parse(localStorage.getItem('users'));

    var form = document.getElementById('log-in-form');
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var logInSuccess = false;

    if (email == "" || pass == "") {
        alert("Fill all credentials");
    }
    else {
        for (var i = 0; i < data.length; i++){
            if (data[i].email == email && data[i].password == pass) {
                logInSuccess = true;
                break;
            }
        }
    }
    

    form.reset();

    localStorage.setItem('login', JSON.stringify(logInSuccess));

    if (logInSuccess == true) {
        location.replace('tickets.html');
    }
    else {
        alert("Invalid Credentials!")
    }
    
}

function signup(e) {
    e.preventDefault();

    var data = JSON.parse(localStorage.getItem('users'));

    function user(n, e, p) {
        this.name = n;
        this.email = e;
        this.password = p;
    }

    var form = document.getElementById('sign-up-form');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    if (name == "" || email == "" || pass == "") {
        alert("Fill all credentials");
    }
    else {
        var obj = new user(name, email, pass);

        data.push(obj);

        localStorage.setItem('users', JSON.stringify(data));
    }

    form.reset();
}

function check() {
    let data = JSON.parse(localStorage.getItem('login'));

    if (data == true) {
        location.replace('tickets.html');
    }
    else {
        alert("Login or sign Up to proceed");
    }
}

