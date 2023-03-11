const express = require("express");
const app = express();
const fs = require("fs");
const port = 80;


// EXPRESS SPECIFIC CODE -->

app.use("/static", express.static("static"));           // for serving static files
app.use(express.urlencoded());                            // This is a built-in middleware function, which coverts the incoming Post request data into a Object & returns it.


// PUG SPECIFIC CODE -->

app.set('view engine', 'pug')                           // set template as engine as pug



// ENDPOINTS -->

app.get("/", (req, res) => {
    res.status(200);
    res.render("index");

});


app.post("/", (req, res) => {

    form_data = req.body;
    name = form_data.name;
    age = form_data.age;
    gender = form_data.gender;
    address = form_data.address;
    more = form_data.more;

    // console.log(typeof req.body);
    let output = `${name} is ${age} years old, his/her gender is ${gender} & is residing at ${address}. More about him/her  : ${more}`

    fs.writeFileSync("form_data.txt", output);


    res.status(200);
    res.render("index");

});



// START THE  SERVER / LISTEN ON PORT -->
app.listen(port, () => {
    console.log(`App started @ port : ${port}`);
});