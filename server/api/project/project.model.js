/**
 * Copyright (c) 2015-2017 Tampere University of Technology.
 * Use is subject to license terms.
 */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: String,
});

// Project names are unique
ProjectSchema.index({name: 1}, {unique: true});

module.exports = mongoose.model('Project', ProjectSchema);
