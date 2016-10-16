let login = (username, password) => {
	if (username != 'admin' || password != 'radical') {
		console.log('incorrect login');
	} else {
		console.log("login ok");
	}
}

login("admin", "dsf");
