const mongoose = require('mongoose');
// const uri = process.env.ATLASURI;

// connect to MongoDB Atlas
mongoose.connect("mongodb+srv://aggarwalnaman21:l64tnwultiKPolgk@cluster0.clm8nyl.mongodb.net/chatapp")
.then( () => console.log('Connected to MongoDB!'))
.catch( err => console.log(err))