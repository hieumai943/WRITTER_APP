const mongoose = require('mongoose');
async function connect(){
    try{
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

