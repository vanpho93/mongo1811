const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean1811', { useMongoClient: true });
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, minlength: 2, unique: true },
    age: { type: Number }
});

const User = mongoose.model('User', userSchema);

User.find()
.then(users => console.log(users))
.catch(err => console.log(err));
