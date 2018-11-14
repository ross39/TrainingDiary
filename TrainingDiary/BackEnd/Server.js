var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
const mongoDB = 'mongodb://ROSS26:5AJ6C9wimK8vLjM@ds163103.mlab.com:63103/angularproject';
mongoose.connect(mongoDB);

var Schema = mongoose.Schema;
var postSchema = new Schema({
    title: String,
    content: String
})
var PostModel = mongoose.model('post', postSchema);
