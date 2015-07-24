var  fs = require('fs');

module.exports = function(req, res) {

  console.log('req.url is' + req.url);

  if(req.url === '/'){
    fs.readFile(__dirname + '/../app/index.html', 
      function(err, data){
         if(err){
             res.writeHead(500);
             return res.end('Error loading index.html');
         }

         res.writeHead(200, {'Content-Type' : 'text/html'});
         res.end(data);
      
      });
  }

  if(req.url !== '/' && !/\.js/.test(req.url) && !/\.css/.test(req.url)){
    req.url = req.url.replace(/\?(.*)$/, '');

    if(req.url === '/users/6'){
      var userData = {
        profile: 'ADM',
        menu: [
          {
            label: 'Trade Monitoring',
            path: '/trade-monitoring',
            submenu: [
              {
                label: 'ETD Activity',
                path: '/etd-activity'
              },
              {
                label: 'Equity activities',
                path: '/equity-activities'
              },
              {
                label: 'Forex',
                path: '/forex-activity'
              }
            ]
          },
          {
            label: 'Administration',
            path: 'administration'
          }
        ]
      };
      res.writeHead(200, {'Content-Type' : 'application/json'});
      return res.end(JSON.stringify(userData));
    }

    fs.readFile(__dirname + '/..'+req.url, 
      function(err, data){
         if(err){
             res.writeHead(500);
             return res.end('Error loading '+req.url);
         }

         res.writeHead(200, {'Content-Type' : 'text/html'});
         res.end(data);
      
      });
  }

  if(/\.js/.test(req.url)){
    fs.readFile(__dirname + '/..'+req.url, 
    function(err, data){
       if(err){
           res.writeHead(500);
           return res.end('Error loading '+req.url);
       }
       
       res.writeHead(200, {'Content-Type' : 'text/javascript'});
       res.end(data);
    
    });
  }

  if(/\.css/.test(req.url)){
    fs.readFile(__dirname + '/..'+req.url, 
    function(err, data){
       if(err){
           res.writeHead(500);
           return res.end('Error loading '+req.url);
       }
       
       res.writeHead(200, {'Content-Type' : 'text/css'});
       res.end(data);
    
    });
  }

};