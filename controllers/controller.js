const FEED = require('../models/FEED')
const getHomePage = (req, res) => {
    FEED.find().sort({createdAt: -1})
        .then(result => 
           res.render('index', {result, errors: false}))        
}
const postNewOne = (req, res) => {
    if (req.method === 'GET') {
        res.render('addOne',{errors:false});
    }
    if (req.method === 'POST') {
        const feed = new FEED(req.body)
        feed.save()
            .then(() => {
                res.redirect('/')
            })
            .catch(err => {
               res.render('addOne',{errors:err.errors})
            })
    }
}
const showOne = (req, res) => {
    FEED.findById(req.params.id)
        .then((result) => {
            res.render('showOne', { result })
        })
        .catch(err => console.log(err))
}
const updateOne = (req, res) => {
    if (req.method === 'GET') {
        FEED.findById(req.params.id)
            .then((result) => {
                res.render('editOne', { result, errors: false}) }
            )
            .catch(err => console.log(err))
    }
    if (req.method === 'POST') {
        FEED.findByIdAndUpdate(req.params.id, {runValidators: true})
            .then(result => {
                result.name = req.body.name
                result.message = req.body.message
                result.save()
                    .then((result) => {
                        res.render('showOne', {result})
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
}
const deleteOne = (req, res) => {
    FEED.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))
}
module.exports = {
    getHomePage,
    postNewOne,
    showOne,
    updateOne,
    deleteOne
}