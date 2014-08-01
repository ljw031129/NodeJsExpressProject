/**
 * Created by Administrator on 2014/7/31.
 */
var express = require('express');
var router = express.Router();

var blogEngine = require('../blog');
router.get('/article/:id', function (req, res) {
    var entry = blogEngine.getBlogEntry(req.params.id);
    res.render('article', {title: entry.title, blog: entry});
});
module.exports = router;