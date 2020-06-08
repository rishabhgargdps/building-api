const express = require('express');
const router = express.Router();
const ToDo = require('../models/todo');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
  ToDo.find()
    .select('_id title body created lastUpdated preference')
    .exec()
    .then((docs) => {
      const resp = {
        count: docs.length,
        TODOs: docs.map((doc) => {
          return {
            _id: doc._id,
            title: doc.name,
            body: doc.body,
            preference: doc.preference,
            created: doc.created,
            lastUpdated: doc.lastUpdated,
          };
        }),
      };
      if (docs.length > 0) res.status(200).json(docs);
      else res.status(404).json({ message: 'No Entries Found' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post('/', (req, res, next) => {
  const toDo = new ToDo({
    _id: new mongoose.Types.ObjectId().toString(),
    title: req.body.title,
    created: new Date(),
    body: req.body.body,
    preference: req.body.preference || 'Low',
  });
  toDo
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'New ToDo Created',
        ToDo: {
          _id: toDo._id,
          title: toDo.title,
          created: toDo.created,
          body: toDo.body,
          preference: toDo.preference,
        },
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error,
      });
    });
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  ToDo.findById(id)
    .exec()
    .then((doc) => {
      if (doc) {
        console.log(doc);
        res.status(200).json({
          _id: doc._id,
          title: doc.title,
          body: doc.body,
          preference: doc.preference,
          created: doc.created,
          lastUpdated: doc.lastUpdated,
        });
      } else {
        res.status(404).json({ message: 'No valid entry present for this id' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};
  if (req.body.length) {
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    updateOps['lastUpdated'] = new Date();
    ToDo.update({ _id: id }, { $set: updateOps })
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json({ message: 'entry updated' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  } else {
    res.status(500).json({ message: 'Enter the body in the specified format' });
  }
});
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  ToDo.remove({ _id: id })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({ message: 'entry deleted' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
