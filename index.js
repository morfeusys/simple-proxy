const httpProxy = require('http-proxy')


httpProxy.createProxyServer({
	target: process.env.PROXY_TARGET,
	secure: false,
	changeOrigin: true
}).listen(8000)
