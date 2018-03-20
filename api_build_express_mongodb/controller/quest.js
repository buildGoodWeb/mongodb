// // bad idea

// var lodash = require('lodash');

// function qPost(router, Schema) {
//   router
//     .route('/')
//     .post(function(req, res) {
//       var schema = new Schema(req.body);
//       console.log('----', data, res.body);
//       schama.save(function(err) {
//         if (err) {
//           res.send(err);
//         }
//         res.json({message: 'post success!'})
//       });
//     });
// }

// function qGet (router, Schema, isId) {
//   if (isId) {
//     router
//       .route ('/:id')
//       // GET
//       .get (function (req, res) {
//         Schema.findById (req.params.id, function (err, data) {
//           if (err) {
//             res.send (err);
//           }
//           res.json (data);
//         });
//       })
//   } else {
//     router
//       .route('/')
//       .get (function (req, res) {
//         Schema.find (function (err, datas) {
//           if (err) {
//             res.send (err);
//           }
//           res.json (datas);
//       });
//     });
//   }
// }

// function qPut(router, Schema) {
//   router
//     .route ('/:id')
//     .put (function (req, res) {
//       Schema.findById (req.params.id, function (err, data) {
//         if (err) {
//           res.send (err);
//         }
//         console.log('----', data, res.body);
//         data = lodash.assign(data, res.body);
//         data.save (function (err) {
//           if (err) {
//             res.send (err);
//           }
//           res.json ({message: 'update success!'});
//         });
//       });
//     });
// }

// function qDelete(router, Schema) {
//   router
//     .route ('/:id')
//     .delete (function (req, res) {
//       Schema.remove (
//         {
//           _id: req.params.id,
//         },
//         function (err, data) {
//           if (err) {
//             res.send (err);
//           }
//           res.json ({message: 'Sucessfully deleted'});
//         }
//       );
//     });
// }

// module.exports = {
//   post: qPost,
//   get: qGet,
//   put: qPut,
//   delete: qDelete,
// };

