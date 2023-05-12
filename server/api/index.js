const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
});

module.exports = (req, res) => {
    if (req.url.startsWith("/api/")) {
        return server(req, res);
    }
    return handle(req, res);
};

app.prepare().then(() => {
    server.listen(process.env.PORT || 8000, (err) => {
        if (err) throw err;
        console.log("> Ready on http://localhost:8000");
    });
});
