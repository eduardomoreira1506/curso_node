module.exports.formulario_inclusao_noticia = function(application, req, res){
	//quando a página de formulário for acessada, ela renderiza a página e é passado dois paremtros para ele... o primeiro são os erros e 
	//o segundo é a notícia, como está sendo acessado diretamente via get, eles vão ser passados nulo já que você vai adicionar uma
	//noticia nova
	res.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function(application, req, res){
	//aqui é ativado quando clica no botão de adicionar nova noticia

	//a variavel noticia armazena todos os dados do form em uma array
	var noticia = req.body;

	//aqui você pode validar o form e passar mensagens de erro também!
	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia','Noticia é obrigatório').notEmpty();

	//aqui você passa os erros para uma variavel
	var erros = req.validationErrors();

	//e se houver erros ele vai renderizar novamente a página porém agora ele vai passar os erros e a noticia que você tentou adiconar
	if(erros){
		res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
		return;
	}

	//caso não tenha erros, ele chega até aqui onde abre conexão com banco
	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	//por fim, salva a noticia e redireciona para página de noticias
	noticiasModel.salvarNoticia(noticia, function(error, result){
		res.redirect('/noticias');
	});	
}