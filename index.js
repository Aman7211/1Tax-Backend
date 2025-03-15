const express = require('express');
const app = express();
const database = require('./config/DbConnect')
const userRoute = require('./routes/UserRoute')
const addeduserRoute = require('./routes/AddedUserRoutes')
const queryRoute = require('./routes/QueryRoutes')
const FormRoute = require('./routes/FormRoutes')
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Cors Setup
const corsOptions = {
    origin: true
};
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header(
      "Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })

  // Database Connection
try {
    database.connect();
} catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the process if there's an error connecting to the database
}


// Middleware
app.use(express.json());
// app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/users', userRoute);
app.use('/api/v1/addedusers/', addeduserRoute);
app.use('/api/v1/query', queryRoute);
app.use('/api/v1/form', FormRoute);

app.get('/', (req, res) => {
    res.send('API is working correctly');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});