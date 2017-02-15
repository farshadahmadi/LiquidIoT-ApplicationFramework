/**
 * Copyright (c) 2015-2017 Tampere University of Technology.
 * Use is subject to license terms.
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/visualdevices', require('./api/visualdevice'));
  app.use('/api/pipe', require('./api/pipe'));
  app.use('/auth', require('./auth'));
  app.use('/api/projects', require('./api/project'));
  app.use('/api/users', require('./api/user'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets|swagger-editor)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
