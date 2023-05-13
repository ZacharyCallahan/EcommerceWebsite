const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser');
require("dotenv").config();
require("./config/mongoose.config");
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));
require("./routes/product.routes")(app);
require("./routes/user.routes")(app);
require("./routes/order.routes")(app);

app.listen(PORT, () => {
    console.log(`Listening at Port ${PORT}`);
});
