const Skill = require('../models/skillModel');
const _ = require('lodash');

exports.params = ((req, res, next, id) => {
  Skill.findById(id)
    .then(skill => {
      if (!skill) {
        next(new Error('no skill with that id found...'));
      } else {
        req.skill = skill;
        next();
      }
    })
});

exports.get = ((req, res, next) => {
  Skill.find()
    .then(skills => {
      res.json(skills);
    }, (err => next(err)));
});

exports.getOne = ((req, res, next) => {
  const skill = req.skill;
  res.json(skill);
});

exports.put = ((req, res, next) => {
  const skill = req.skill;
  const update = req.body;
  _.merge(skill, update);

  skill.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
});

exports.post = ((req, res, next) => {
  const newSkill = req.body;

  Skill.create(newSkill)
    .then(skill => {
      res.json(skill);
    }, (err => next(err)));
});

exports.delete = ((req, res, next) => {
  req.skill.remove((err, removed) => {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
});