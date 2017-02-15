/**
 * Copyright (c) 2015-2017 Tampere University of Technology.
 * Use is subject to license terms.
 */

'use strict';

var express = require('express');
var controller = require('./project.controller');
var fileCtrl = require('./projectfile.controller');
var packageCtrl = require('./package.controller');

var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:project', controller.show);
router.post('/', controller.create);

router.get('/:project/files', fileCtrl.show);
router.get('/:project/files/:file(*)', fileCtrl.show);
router.post('/:project/files', fileCtrl.create);
router.post('/:project/files/:dir(*)', fileCtrl.create);
router.put('/:project/files/:file(*)', fileCtrl.update);
router.delete('/:project/files/:file(*)', fileCtrl.destroy);

router.post('/:project/package', packageCtrl.create);

module.exports = router;
