/**
 * Copyright (c) 2015-2017 Tampere University of Technology.
 * Use is subject to license terms.
 */


function errorHandler(res) {
  return function(err) {
    if (typeof err === 'number') {
      res.status(err).json({"error": err});
    }
    else if (err.name === 'MongoError' && err.code === 11000) {
      res.status(400).json({error: "Already exists"});
    }
    else if (err.name === 'RequestError') {
      console.log(err);
      res.status(500).json({error: "Request error"});
    }
    else {
      console.log(err);
      res.status(500).json({"error": "server error"});
    }
  };
}

exports.errorHandler = errorHandler;
