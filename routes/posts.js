const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get all post
router.get('/', async (req, res) => {
    try{
        const post = await Post.find();
        res.json(post);
    }catch(err){
        res.json({ message: err });
    }
});

//post to MongoDB
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
    const SavedPosts = await post.save();
    res.json(SavedPosts);
    }catch(err){
        res.json({ message: err });
    }
});

//get a single post by id
router.get('/:postId', async (req, res) => {
    // console.log(req.params.postId);
    try{
    const singlePost = await Post.findById(req.params.postId);
    res.json(singlePost);
    }catch(err){
        res.json({message:err});
    }
});

//Delete a single post
router.delete('/:postId', async (req, res) => {
    // console.log(req.params.postId);
    try{
    const DeletesinglePost = await Post.remove({ _id: req.params.postId });
    res.json(DeletesinglePost);
    }catch(err){
        res.json({message:err});
    }
});

//update a post

router.patch('/:postId', async (req, res) => {
    // console.log(req.params.postId);
    try{
    const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set:{ title:req.body.title, description: req.body.description } });
    res.json(updatePost);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;