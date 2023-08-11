const Clarifai = require('clarifai')

const app = new Clarifai.App({
apiKey: 'fd000134f6124cadaa9552348e70517c'
})

const handleApiCall = (req, res) => {
    app.models.predict(
        Clarifai.FACE_DETECT_MODEL,
        req.body.input)
    .then(data => {
        res.json(data)
    })
    .catch(err.status(400).json('unable to reach API'))
}

handleImageUpdate = (req, res, db) => {
    const { id } = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0])
    })
    .catch(err => { res.status(400).json('unable to get entries')})
}

module.exports = {
    handleImageUpdate,
    handleApiCall
}