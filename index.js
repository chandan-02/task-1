const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors');

const RouterMain = require('./route/main')
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//  --------------------------------- main route setup ---------------------------------
app.use("/api/", RouterMain);

//  --------------------------------- app listen & database setup  ---------------------------------
app.listen(process.env.PORT || 5000, async () => {
    console.log(`Server is running on PORT: ${5000} url on mode ${process.env.NODE_ENV}`);
});