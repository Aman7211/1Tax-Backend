const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
id:
{
    type:Number,
    required: true,
    unique:true
},

name: 
{ 
    type: String, 
    minlength: 1, 
    maxlength: 50 
},

title: 
{ 
    type: String, 
    required: true
},

subtitle:
{
    type:String
},
keyword:
{
    type:String
},
paragraph:
{
    type:String
},
created_at: 
{ 
    type: Date, 
    default: Date.now 
}
});

module.exports = mongoose.model('Form', FormSchema);

