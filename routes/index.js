exports.index = function (req, res) {
  var $ = require ('jquery');

  // send to view
  res.render ('index', {
    'title': 'Stachay'
  });

};
