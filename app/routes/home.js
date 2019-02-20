module.exports = function(app){
	//respondendo arquivo caso for chamado a página
	app.get('/', function(req, res){
		res.render('home/index');
	});
}