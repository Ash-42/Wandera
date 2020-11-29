const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const CONSTS = require("./constants");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(require("./user-account"));
app.use(require("./user-posts"));

app.listen(CONSTS.PORT, () => {
    console.log(`Listening at port ${CONSTS.PORT}...`);
})
