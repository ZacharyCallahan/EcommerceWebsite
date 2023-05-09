const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
require("dotenv").config();
require("./config/mongoose.config");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));
require("./routes/product.routes")(app);
require("./routes/user.routes")(app);
require("./routes/order.routes")(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000");
});