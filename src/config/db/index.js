const mongoose = require('mongoose');
async function connect(){
    try{
        mongoose.connect('mongodb+srv://hieumai090403:fxYRdhinfwa6MHvZ@deploy-vercel.pmbhwxj.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>{
            console.log('connect success to mongodb atlas');
        })
        .catch((err)=>{
            console.log(err);
        })
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_learning_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('success')
    }catch(error){
        console.log('fail!')
    }
}
module.exports={connect}

