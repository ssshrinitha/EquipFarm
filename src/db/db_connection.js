const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://shrinitha:shrinitha@cluster0.pchwgpl.mongodb.net/test", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
