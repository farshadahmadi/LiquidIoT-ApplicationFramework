/**
 * Copyright (c) 2015-2017 Tampere University of Technology.
 * Use is subject to license terms.
 */

'use strict';

angular.module('koodainApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('api-descr', {
        url: '/api-descr',
        templateUrl: 'app/api-descr/api-descr.html',
        controller: 'ApiDescrCtrl'
      });
  });
