function NoticiasDAO(connection){
	//conexão do banco
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	//pegando todas noticias e ordenando em ordem descrescente
	this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
	//pegando a noticia através do id
	this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
	//salvando a noticia no banco
	this._connection.query('insert into noticias set ? ', noticia, callback)
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	//pegando as útlimas 5 noticias que foram armazenadas
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){
	//exporta o objeto
	return NoticiasDAO;
}