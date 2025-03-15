// controllers/QueryController.js
const Query = require('../models/Query')

const queryregister = async(req,res)=>{
   
 try {
    const {name, phone, query} = req.body;

    if(!name || !phone || !query){
        return res.status(400).json({
            success:false,
            message: "Not Found the detail .."
        })
    }
  
// Create a new query
    const newquery = new Query({
      name,
      phone,
      query
    });

    await newquery.save();

    return res.status(200)
    .json({
        success:true,
        message :"Query successfully registered"
    })


 } catch (error) {
    return res.status(500)
    .json({
        success: false,
        message :"unbale to add the query"
    })
 }

} 

const getallquery = async (req,res)=>{
    try {
        const query = await Query.find({});
        res.status(200).json({ 
            success: true, 
            message: 'Successful', 
            data: query 
        });

    } catch (error) {
        return res.status(500)
        .json({
            success:false,
            message:"Unable to Show the query"
        })
    }
}

module.exports = { queryregister, getallquery };