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
require("./routes/contact.routes")(app);
require("./routes/review.routes")(app);

if (process.env.API_PORT) {
    app.listen(process.env.API_PORT, () => {
        console.log(`Listening at Port ${process.env.API_PORT}`);
    });
}

module.exports = app;