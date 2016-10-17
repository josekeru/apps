$(document).on('click', '#logins', login);

function login () {
	var url = 'jsonpLogin.jsonp';
    var user = $('#user').val();
    var password = $('#pass').val();
    
    $.ajax ({
    	url: url,
    	jsonp: "callback",
    	crossDomain: true,
    	jsonpCallback: 'jsonpLog',
    	dataType: 'jsonp',
    	success: function (jsonpLog) {
			var getIn = 0;
			for (var i = 0; i < jsonpLog.users.length; i++) {
				if (jsonpLog.users[i].name === user && jsonpLog.users[i].passwords === password) {
					getIn = 1;
				}
			}
			if (getIn === 1) {
				console.log("Estás logueado");
				window.location.href="./logued/index.html";
				var lg = {
					name: user,
					passwords: password
				};
				window.sessionStorage.setItem('user', JSON.stringify(lg));
			}else{
				console.log("User is not register");
			}
		}
    
	})
}