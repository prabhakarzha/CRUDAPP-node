const Add = require( '../model/model' );
  

//create and save new user

exports.create =(req,res)=>{
    //validate req
    if(!req.body){
        res.status(400).send({message:"content can not be empty!"});
        return;

    }

    //new user

    const user =new Add({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
        
    })
    //save user in database
    user
    .save(user)
    .then(data=>{
        //res.send(data)
        res.redirect('/add_user');
    })
    .catch(err=>{
        res.status(500).send({
           message:err.message || "some error occurred while creating a create operation" 
        });
    });

}

//retrieve and return all users 

exports.find=(req,res)=>{

    if (req.query.id){
        const id=req.query.id;
        Add.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user with id"+id})

            }else{
                res.send(data)

            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error retrieving user with id" +id})

        })

    }else{
        Add.find() 
   .then(user=>{
       res.send(user)
   })
   .catch(err=>{
       res.status(500).send({message: err.message ||"Error Occurred while retriving user imformation"})
   })

    }
   
}
//update a new identified user by user id
exports.update=(req,res)=>{
     if(!req.body){
         return res
         .status(400)
         .send({ message:"Data to update can not be empty" })
     }
     const id= req.params.id;
     Add.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message:'Cannot Update user with ${id}.Maybe user not found' })
            }else
            {
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error Update user information"})
        })
    
}
//delete a user with specified user is in the request
exports.delete = (req,res)=>{
    const id =req.params.id;
    Add.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:'Cannot Delete with id ${id}.Maybe id is wrong'})

        }else{
            res.send({
                message:"User was deleted successfully!"

            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete User with id="+id
        });
    });

} 