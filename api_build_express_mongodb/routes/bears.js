var express = require('express');
var Bear = require('../models/bear');

var router = express.Router();

router
  .route ('/')
  .post (function (req, res) {
    var bear = new Bear ({
      name: req.body.name,
    });

    bear.save (function (err) {
      if (err) {
        res.send (err);
      }
      res.json ({message: 'Bear created!'});
    });
  })
  .get (function (req, res) {
    Bear.find (function (err, bears) {
      if (err) {
        res.send (err);
      }
      res.json (bears);
    });
  });

// on routes that end in /bears/:bear_id
router
  .route ('/:bear_id')
  // GET
  .get (function (req, res) {
    Bear.findById (req.params.bear_id, function (err, bear) {
      if (err) {
        res.send (err);
      }
      res.json (bear);
    });
  })
  // update the bear with this id
  // PUT
  .put (function (req, res) {
    Bear.findById (req.params.bear_id, function (err, bear) {
      if (err) {
        res.send (err);
      }
      bear.name = req.body.name;
      bear.save (function (err) {
        if (err) {
          res.send (err);
        }
        res.json ({message: 'Bear updated'});
      });
    });
  })
  // delete the bear with this id
  // DELETE
  .delete (function (req, res) {
    Bear.remove (
      {
        _id: req.params.bear_id,
      },
      function (err, bear) {
        if (err) {
          res.send (err);
        }
        res.json ({message: 'Sucessfully deleted'});
      }
    );
  });

module.exports = router;
