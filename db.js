const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean1811', { useMongoClient: true });
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true, minlength: 2, unique: true },
    age: { type: Number }
});

const User = mongoose.model('User', userSchema);

// CRUD

// const user = new User({ name: 'Ti', age: 10 });
// user.save()
// .then(u => console.log(u))
// .catch(err => console.log(err));

// User.insertMany([
//     { name: 'Tun 2', age: 11 },
//     { name: 'Khoa 3', age: 30 }
// ])
// .then(arr => console.log(arr))
// .catch(err => console.log(err))

// User.find({ age: 10 }, { name: 1, _id: 0 })
// .then(users => console.log(users))
// .catch(err => console.log(err));

// User.findById('5a352329b041d508fa783030')
// .then(user => console.log(user))
// .catch(err => console.log(err));

// User.findByIdAndUpdate('5a352329b041d508fa783030', { name: 'teo' })
// .then(user => console.log(user))
// .catch(err => console.log(err));

// User.update({ age: 20 }, { age: 10 }, { multi: true })
// .then(user => console.log(user))
// .catch(err => console.log(err));

User.find()
.then(user => console.log(user))
.catch(err => console.log(err));

// User.find
// User.findById
// User.findOne

// User.update
// User.findByIdAndUpdate
// User.findOneAndUpdate

// User.findByIdAndRemove('5a35280a01121d144707fd1a')
// .then(user => console.log(user))
// .catch(err => console.log(err));

// User.findOneAndRemove({ name: 'TEO' })
// .then(user => console.log(user))
// .catch(err => console.log(err));

// User.remove({ age: 30 })
// .then(user => console.log(user))
// .catch(err => console.log(err));
