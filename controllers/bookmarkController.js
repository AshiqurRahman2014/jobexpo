const Bookmark = require("../models/Bookmark");

module.exports = {
    // createBookmark: async (req, res) => {
    //     const { job, userId, title, imageUrl, company, location } = req.body;
    
    //     try {
    //         const newBookmark = new Bookmark({ job, userId, title, imageUrl, company, location });
    //         await newBookmark.save();
    //         res.status(201).json(newBookmark);
    //     } catch (error) {
    //         res.status(500).json({ message: 'Failed to create bookmark', error });
    //     }
    // }
    
    createBookmark: async(req, res)=>{
        const newBook = new Bookmark(req.body);

        try {
            await newBook.save();

            res.status(201).json("Bookmark Successfully created")
        } catch (error) {
            res.status(500).json(error);
        }
    },
    
    deleteBookmark: async (req, res) => {

        try {
            await Bookmark.findByIdAndDelete(req.params.id);

            res.status(200).json("BookMark Successfully Deleted")
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getBookmarks: async (req, res) => {

        try {
            const bookmarks = await Bookmark.find({ userId: req.params.userId });

            res.status(200).json(bookmarks)
        } catch (error) {
            res.status(500).json(error);
        }
    },

}