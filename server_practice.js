const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/public'))
/* app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.get('/', (req, res) => {
    res.send("getting root");
});

app.get('/profile', (req, res) => {
    res.send("getting profile");
});

app.post('/profile', (req, res) => {
    console.log(req.body)
    const user = {
        name: 'Sally',
        hobby: 'soccer'
    }
    res.send('Success');
}); */

app.listen(3000);

/* Instead of adding these lines in the code like I will show you in the next video:

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

If you are using Express 4.16+ you can now replace that with:

app.use(express.urlencoded({extended: false}));
app.use(express.json()); */



/* Just a heads up that in the next lecture I am using req.header inside of a console.log to retrieve the header data in a GET route. Depending on which version of express.js you use, (a more recent version has changed the syntax) it now is req.headers. req.header will only return the function declaration. */