const env = {
	debug: false,
	//Database Service
	database: 'mytestdb',
	username: 'root',
	password: 'soyamilk_05',
	host: 'localhost',
	dialect: 'mysql',
	migrate: false,
	//HTTP & HTTPS Service
	key: './security/cert.key',
	cert: './security/cert.pem',
	https: 443,
	http: 8080,
	//Token Config
	tokenValidity: 2678400
};

module.exports=env;
