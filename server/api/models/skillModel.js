const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SkillSchema = new Schema({
  'name': {'type': String, 'unique': true},
  'count': Number
});

module.exports = mongoose.model('skill', SkillSchema);