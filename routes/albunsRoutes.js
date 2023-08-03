const albunsRoutes = router => {
    router.get('/albuns', (req, res) => {
        res.status(200).json({ mensagem: 'Albuns' })
    })
}

module.exports = albunsRoutes