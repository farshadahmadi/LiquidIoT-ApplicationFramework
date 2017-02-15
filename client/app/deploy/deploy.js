/**
 * Copyright (c) 2015-2017 Tampere University of Technology.
 * Use is subject to license terms.
 */

'use strict';

angular.module('koodainApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('deploy', {
        url: '/deploy?project',
        templateUrl: 'app/deploy/deploy.html',
        controller: 'DeployCtrl'
      });
  });
