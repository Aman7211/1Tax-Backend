const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
name: 
{ 
    type: String, 
    required: true
},
phone: 
{ 
    type: String, 
    required: true
},
query: 
{ 
    type: String, 
    required: true 
},
created_at: 
{ 
    type: Date, 
    default: Date.now 
}
});

module.exports = mongoose.model('Query', QuerySchema);

