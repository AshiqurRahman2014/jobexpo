const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(

    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        location: { type: String, required: false },
        isAdmin: { type: Boolean, default: false },
        isAgent: { type: Boolean, default: false },
        skills: { type: Array, default: false },//enum: ['Node JS', 'Java', 'Flutter', 'Dart']
        profile: {
            type: String,
            required: true,
            default: "https://drive.google.com/file/d/1qd1OsIo0eQKYCtVzQsAWFmP3JWMttqA-/view?usp=drive_link"},
            
    }, {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);

