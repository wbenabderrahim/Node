var connection= require('../BD');

exports.home = function (req,rep){
var queryString = 'SELECT * FROM user';
 
connection.query(queryString, function(err, rows, fields) {
    if (err) throw err;
     return  rep.render('home',{nom : rows[0].nom
,prenom : rows[0].prenom  });
});
 
}

exports.user = function (req,rep){

return rep.render('user');
}
