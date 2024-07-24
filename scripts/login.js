$(document).ready(function() {
    $('#loginButton').click(function() {
        var username = $('#username').val();
        var password = $('#password').val();
        $.ajax({
            url: 'http://localhost:5266/api/v1/authorization/login',
            type: 'POST',
            contentType:'application/json',
            headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            data: JSON.stringify({ 
            "userName": username,
            "password": password
            }),
            success: function(data) {
            if (data === '') {
                $("#errorMessage").text("Invalid username or password");
            } else {
                localStorage.setItem('token', data.token);
                localStorage.setItem('role', data.role);
                localStorage.setItem('userName', data.userName);
                window.location.href = "/Main.html";
            }
            },
            error: function() {
                $("#errorMessage").text("Something went wrong");
            }
        });
    });
});