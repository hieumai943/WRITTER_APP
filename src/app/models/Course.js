const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, maxLength: 255 },
    editor: {type: String , require: true,  },
    inputVal:{type: String, require: true},
    age: { type: Number, maxLength: 600 },
    image: {type: String, maxLength: 255},
    slug: {type: String, slug:'inputVal'}
},{
    timestamps:  true,
});

module.exports = mongoose.model('NODEJS_LEARNING', Course);