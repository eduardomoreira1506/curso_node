module.exports = function(application){
	// aqui nas rotas são sempre escutados os metodos. lembrando sempre que os "get" são quando são acessados diretamente na url e os 
	//post quando são recebidos através de form. por padrão as funções sempre precisam receber a application, req e res e vão passando
	//para os conrollers os parametros também pois vão ser usados lá
	application.get('/formulario_inclusao_noticia', function(req, res){
		application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
	});

	application.post('/noticias/salvar', function(req, res){
		application.app.controllers.admin.noticias_salvar(application, req, res);
	});
}