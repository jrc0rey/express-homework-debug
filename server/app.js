var express = require('express'),
	path 	= require('path'),
    app     = express(),
    server  = require('http').createServer(app);

  app.use(express.static(path.join(__dirname, 'public')));

  app.set('views', path.join(__dirname, 'views'));

  app.set('view engine', 'hbs');


  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Server be working homeslice')
  })

  app.get('/mycar', function(request, response){
	response.json({make: 'Jeep', model: 'wrangler', year: '2007', color: 'black', murderedOut: 'Hell Yeah'})
  })

  app.get('/mycat', function(request, response){
  	response.json({name:'Hula', type: 'awesome', personality: 'chill AF', do: 'pet when asked', doNot: 'get up in his grill'})
  })

  app.get('/handlebar', function(request, response){
  	response.render('home')
  })



// first argument is the port number
server.listen(3000, function(){
  console.log('server is listening on port 3000')
})
