const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ass',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection Successful');
}).catch((error) => {
    console.log('Something Wrong', error);
})