const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const schema = mongoose.Schema;


const postSchema = new schema({
    id:String,
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    userName: String,
    password: String,
    agreeOnTerms: Boolean
});

const PostModal = mongoose.model('users', postSchema);

router.post('/adduser',(req, res) => {
    const newUser = new PostModal({
        id:req.body.id,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        userName: req.body.userName,
        password: req.body.password,
        agreeOnTerms: req.body.agreeOnTerms
    });
    newUser.save(function(err){
        if(!err){
            res.send({
                success:true,
                isUserAdded:true,
                successMessage:'New user has been added successfully.'
            });
        }
        else{
            res.send(err);
        }
    });
});


router.post('/getloginuser', (req, res)=>{
    PostModal.find({email:req.body.email, password:req.body.password},(docs, err)=>{
        if(!err){
            if(docs.email===req.body.email && docs.password===req.body.password){
                res.send({success:true, successMessage: 'Email and Password matched.'})
            }
            else{
                res.send({success:true, successMessage: 'Nahi ho raha'})
            }










            // res.send({
            //     editedFeedId: 'Test.',
            //     isEditedFeed: true,
            //     successMessage: 'Post has been updated successfully.'
            // })
           // res.send(docs, {success:true, successMessage: 'Got a entered Data for '+ req.body.email})

            //res.send(docs)

            // res.send({success2:true, successMessage2: 'Got a entered Data for 222222 '})
            // if(docs.email===req.body.email && docs.password===req.body.password){
            //     alert('docs.email');
            //     res.send({success:true, successMessage: 'Email and Password matched.'})
            // }
            // else if(email!=req.body.email && password===req.body.password){
            //     res.send({success:true, successMessage: 'Email not matched but Password matched.'})
            // }
            // else if(email===req.body.email && password!=req.body.password){
            //     res.send({success:true, successMessage: 'Email matched but Password not matched.'})
            // }
            // else{
            //     res.send({success:true, successMessage: 'Email and Password not matched.'})
            // }
        }
        else{res.send(err)}
    })
});

router.get('/getusers', (req, res)=>{
    PostModal.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})
module.exports = router;

























