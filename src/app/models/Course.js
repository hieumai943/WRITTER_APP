const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    editor: {type: String , require: true,  },
    inputVal:{type: String, require: true},
    date:{type: Date, maxLength: 255},
    age: { type: Number, maxLength: 600 },
    image: {type: String, maxLength: 255},
    slug: {type: String, slug:'inputVal'}
},{
    timestamps:  true,
});

module.exports = mongoose.model('NODEJS_LEARNING', Course);

//  day la phan models nó sẽ chọc vào controller thông qua courses được khai báo trong các hàm
// các hàm này được sử dụng phục vụ cho những routes để hiện lên brownser
//  đối với view, nó sẽ được render (tên file hbs) ở phần controllers