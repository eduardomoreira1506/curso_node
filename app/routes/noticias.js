module.exports = function(application) {
	// aqui nas rotas são sempre escutados os metodos. lembrando sempre que os "get" são quando são acessados diretamente na url e os 
	//post quando são recebidos através de form. por padrão as funções sempre precisam receber a application, req e res e vão passando
	//para os conrollers os parametros também pois vão ser usados lá
	application.get('/noticias', function(req, res){
		application.app.controllers.noticias.noticias(application, req, res);		
	});

	application.get('/noticia', function(req, res){
		application.app.controllers.noticias.noticia(application, req, res);
	});

};