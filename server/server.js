// const express = require("express");
// const cors = require("cors");
// const app = express();
// const cookieParser = require('cookie-parser');
// require("dotenv").config();
// require("./config/mongoose.config");
// const PORT = process.env.PORT || 8000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(cookieParser());
// app.use(cors({ credentials: true, origin: true }));
// require("./routes/product.routes")(app);
// require("./routes/user.routes")(app);
// require("./routes/order.routes")(app);

// app.listen(PORT, () => {
//     console.log(`Listening at Port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use(cors({
    credentials: true,
}));

require("./routes/product.routes")(app);
require("./routes/user.routes")(app);
require("./routes/order.routes")(app);

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();

const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    nextHandle(req, res, parsedUrl);
});

const handler = (req, res) => {
    try {
        if (req.url.startsWith("/api/")) {
            return server(req, res);
        } else {
            return app(req, res);
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = handler;
