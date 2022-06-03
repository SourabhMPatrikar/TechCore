const express = require('express');
const router = express.Router()

const mongoose = require('mongoose');

const schema = mongoose.Schema

const postSchema = new schema({
    feedId : String,
    title : String,
    imageURL : String,
    feedWritter : String,
    description : String,
    feedDate : String,
    feedLikes : String,
    feedComments : String
});

// router.get('/test',(req, res)=>{
//     res.end('Using router with /test for post.');
// })


const PostModal = mongoose.model('feeds', postSchema);
/* Method 01 */
/*router.post('/addNewFeed',(req, res)=>{
    const newFeed = new PostModal({
        title : req.body.title,
        imageURL : req.body.imageURL,
        description : req.body.description,
        feedId : req.body.feedId
    });
    newFeed.save(function(err){
        if(!err){
            res.send('New post added successfully.');
        }
        else{
            res.send(err);
        }
    });
});*/

/* Method 02 */
router.post('/addnewfeed',(req, res)=>{
    const newFeed = new PostModal({
        feedId : req.body.feedId,
        title : req.body.title,
        imageURL : req.body.imageURL,
        feedWritter : req.body.feedWritter,
        description : req.body.description,
        feedDate : req.body.feedDate,
        feedLikes : req.body.feedLikes,
        feedComments : req.body.feedComments
    });
    newFeed.save(function(err){
        if(!err){
            // console.log('Response ----->',res);
            //console.log('docs ----->',docs);
            res.send({success:true, successMessage: 'New post added successfully.', isAddedFeed:true});
            //console.log('Response ----->',res);
        }
        else{
            res.send(err);
        }
    });
});

router.get('/getFeeds', (req, res)=>{
    PostModal.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

router.post('/getfeeddata',(req,res)=>{
    //debugger;
    PostModal.find({_id:req.body._id},(docs, err)=>{
    // PostModal.find({feedId:req.body.feedId},(docs, err)=>{
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

router.post('/updatefeed',async(req,res)=>{
    await PostModal.findOneAndUpdate({_id:req.body._id},{
    // PostModal.findOneAndUpdate({feedId:req.body.feedId},{
        title:req.body.title,
        imageURL:req.body.imageURL,
        feedWritter:req.body.feedWritter,
        description:req.body.description,
        feedDate : req.body.feedDate,
        feedLikes : req.body.feedLikes,
        feedComments : req.body.feedComments
    },()=>{
        if(!err){
            // res.send('Post updated successfully.');
            res.send({
                editedFeedId: req.body._id,
                isEditedFeed: true,
                successMessage: 'Post has been updated successfully.'
            })
        }
        else{
            res.send(err);
        }
    })
})

router.post('/deleteFeed',(req, res)=>{
    PostModal.findOneAndDelete({feedId:req.body.feedId}, (err)=>{
        if(!err){
            res.send('Feed deleted successfully.')
        }
        else{
            res.send(err)
        }
    })
})

router.post('/feedentire', (req, res)=>{
    PostModal.find({_id:req.body._id}, (docs, err) => {
        if(!err){
            //console.log('Feedentire Docs')
            //console.log('Feedentire Docs', docs)
            res.send(docs)
            res.send({success:true, successMessage: 'Got a Entire Data for '+ req.body._id});
        }
        else{
            res.send(err);
        }
    });
});


router.post('/removefeed', (req, res)=>{
    PostModal.findOneAndDelete({_id:req.body._id}, (docs,err)=>{
        if(!err){
            //res.send('Feed removed successfully.')
            //res.send({success:true, successMessage: 'New post added successfully.'});
            res.send({
                deletedFeedId: req.body._id,
                isDeletedFeed: true,
                successMessage: 'The feed has been deleted successfully.'
            })
        }
        else{
            res.send(err)
        }
    })
});

module.exports = router;