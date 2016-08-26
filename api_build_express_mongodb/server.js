var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Bear = require('./models/bear');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Iganiq8o');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

var router = express.Router();

router.route('/bears')
.post(function(req, res) {
  var bear = new Bear();
  bear.name = req.body.name;

  bear.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Bear created!' });
  });
})
.get(function(req, res) {
  Bear.find(function(err, bears) {
    if(err) {
      res.send(err);
    }
    res.json(bears);
  });
});

// on routes that end in /bears/:bear_id
router.route('/bears/:bear_id')
// GET
.get(function(req, res) {
  Bear.findById(req.params.bear_id, function(err, bear) {
    if (err) {
      res.send(err);
    }
    res.json(bear);
  });
})
// update the bear with this id
// PUT
.put(function(req, res) {
  Bear.findById(req.params.bear_id, function(err, bear) {
    if(err) {
      res.send(err);
    }
    bear.name = req.body.name;
    bear.save(function(err) {
      if(err) {
        res.send(err);
      }
      res.json({ message: 'Bear updated' });
    });
  });
})
// delete the bear with this id
// DELETE
.delete(function(req, res) {
  Bear.remove({
    _id: req.params.bear_id
  }, function(err, bear) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Sucessfully deleted' });
  });
});

// // middleware to use for all requests
// router.use(function(req, res, next) {
//     // do logging
//     console.log('Something is happening.');
//     next(); // make sure we go to the next routes and don't stop here
// });
//
// router.get('/', function(req, res) {
//   res.json({ message: 'Welcome to our apis!' });
// })
// router.get('/test', function(req, res) {
//   res.json({ message: 'Welcome to test api!' });
// })

// all of routes will be prefixed with /api
app.use('/api', router);

app.listen(port);
console.log('post ' + port + ' is openning.');
