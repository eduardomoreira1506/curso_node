module.exports.index = function(application, req, res){
	//abre conexão com banco
	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	//pega as últimas 5 notícias da página para colocar na index. é passada como parametro também!
	noticiasModel.get5UltimasNoticias(function(error, result){
		//chamando a view e passando o resultado
		res.render("home/index", {noticias : result});
	});

}