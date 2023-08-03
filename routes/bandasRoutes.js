const bandasRoutes = router => {
    router.get('/bandas', (req, res) => {
        res.status(200).json({ mensagem: 'Bandas' })
    })
}

module.exports = bandasRoutes