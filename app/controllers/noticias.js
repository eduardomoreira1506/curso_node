module.exports.noticias = function(application, req, res){
	//abre conexão com banco
	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	//pega todas as notícias e passa pra view
	noticiasModel.getNoticias(function(error, result){
		res.render("noticias/noticias", {noticias : result});
	});	
}

module.exports.noticia = function(application, req, res){
	//abre conexão com banco
	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	//isso serve para pegar o id da noticia que foi passado na url
	var id_noticia = req.query;

	//aqui você busca a noticia lá no banco através do ID que foi pego
	noticiasModel.getNoticia(id_noticia, function(error, result){
		res.render("noticias/noticia", {noticia : result});
	});	
}