/**
 * Copyright (c) 2015-2017 Tampere University of Technology.
 * Use is subject to license terms.
 */

'use strict';

describe('Controller: ApiDescrCtrl', function () {

  // load the controller's module
  beforeEach(module('koodainApp'));

  var ApiDescrCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApiDescrCtrl = $controller('ApiDescrCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
  });
});
