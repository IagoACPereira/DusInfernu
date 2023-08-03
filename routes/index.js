const express = require('express')
const albunsRoutes = require('./albunsRoutes.js')
const bandasRoutes = require('./bandasRoutes.js')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ mensagem: 'DusInfernu. A API mais cabulosa da web!' })
})

albunsRoutes(router)

bandasRoutes(router)

module.exports = router
