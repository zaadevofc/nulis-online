var express = require('express');
const axios = require('axios').default;
var router = express.Router()

router.get('/nulis', async function (req, res, next) {
  res.render('index', {
    title:
      'Nulis Online - ZaaDev',
    my_url: "https://nulis-zaadev.vercel.app",
    desc: "Lagi mager nulis? mending Nulis Online aja, dijamin tangan gak bakalan pegel! aowkaowkokw",
    author: "ZaaDev"
  })
})

router.get('/', function (req, res) {
  res.render('home', {
    title:
      'Nulis Online - ZaaDev',
    my_url: "https://nulis-zaadev.vercel.app",
    desc: "Lagi mager nulis? mending Nulis Online aja, dijamin tangan gak bakalan pegel! aowkaowkokw",
    author: "ZaaDev"
  })
})

router.get('/settings/clear-cookie', function (req, res) {
  res.clearCookie('user')
  res.clearCookie('user_name')
  res.send('success')
})

router.get('/settings/get-cookie', function (req, res) {
  res.send(req.cookies)
})

router.get('/settings/get-visits', async function (req, res) {
  await axios.get('https://api.countapi.xyz/get/zaadev/nulis-online-visits')
    .then((ress) => {
      data = {
        visits: ress.data.value
      }
      res.send(data)
  })
})

router.get('*', function (req, res) {
  res.render('error')
})

module.exports = router
