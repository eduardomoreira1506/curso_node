module.exports.noticias = function(app, req, res){
//executando a função que o db connection está retornando
var connection = app.config.dbConnection();
var noticiasModel =  new app.app.models.NoticiasDAO(connection);

noticiasModel.getNoticias(function(error, result){
	 		//passando tudo pra view
	 		res.render("noticias/noticias", {noticias : result});
	 	});
}

module.exports.noticia = function(app, req, res){
	//executando a função que o db connection está retornando
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);

	 	noticiasModel.getNoticia(function(error, result){
	 		//passando tudo pra view
	 		res.render("noticias/noticia", {noticia : result});
	 	})
}