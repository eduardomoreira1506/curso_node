module.exports.formulario_inclusao_noticia = function(app, req, res){
	res.render('admin/form_add_noticia', {validacao:{}, noticia : {}});
}

module.exports.noticias_salvar = function(app, req, res){
	var noticia = req.body;

		//validando o formulário
		req.assert('titulo','Título é obrigatório').notEmpty();
		req.assert('resumo','Resumo é obrigatório').notEmpty();
		req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
		req.assert('autor','Autor é obrigatório').notEmpty();
		req.assert('data_noticia','Data é obrigatório').notEmpty();
		req.assert('noticia','Autor é obrigatório').notEmpty();

		//retorna erros em json
		var erros = req.validationErrors();
		console.log(erros);
		if(erros){
			res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
			return;
		}

		//fazendo conexao com banco
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		//model
		noticiasModel.salvarNoticia(noticia, function(error, result){
	 		//passando tudo pra view
	 		res.redirect('/noticias');
	 	});
		

		//depois temos que salvar noticia
		//callback listando noticias
}