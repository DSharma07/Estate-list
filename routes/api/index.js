const express = require('express');
var fetch = require('node-fetch');
const router = express.Router()

router.get('/hola', (req, res) => {
    res.send('hola hola');
});

router.get('/list-sites', (req, res) => {
    const url = 'https://api.mcmakler.de/v1/advertisements';
    fetch(url)
    .then((resp) => resp.json())
    .then(sites => {
        const filteredsites = sites.data.slice(0,10).map(site => {
            return {
                id: site._id.$id,
                title: site.title,
                isFurnished: site.hasFurniture,
                advertisementPrice: site.advertisementPrice,
                image: site.advertisementAssets[0].advertisementThumbnails.thumb_xs.url,
                propertySummary: site.realestateSummary,
                images: site.advertisementAssets
            };
        });
        res.json(filteredsites);
    })
    .catch(err => {
        res.status(400).send('Error');
    });
});

module.exports = router;
