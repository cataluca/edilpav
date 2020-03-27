'use strict';
const views = require('co-views');
const parse = require('co-body');

const render = views(__dirname + '/../views', {
  map: { html: 'ejs' }
});

module.exports.home = function *home(ctx) {
  
  var view = yield render('home/index',{page: "Home"});
  this.body = yield render('layout', { title: "Edilpav - Pavimenti industriali e civili in cemento e in resina. Rampe veicolari in cemento. A Roma, Napoli e nel resto del centro Italia.", 
				       description: "",
				       body: view });
};


module.exports.test = function *test(ctx) {
  this.body = yield render('/template/multipage/index');
};

module.exports.about = function *about(ctx) {
  this.body = yield render('/template/multipage/about');
};
module.exports.about = function *about(ctx) {
  this.body = yield render('/template/multipage/single');
};
module.exports.serviceItem = function *serviceItem(ctx) {
  this.body = yield render('/template/multipage/service-item');
};
module.exports.service = function *service(ctx) {
  this.body = yield render('/template/multipage/service');
};


