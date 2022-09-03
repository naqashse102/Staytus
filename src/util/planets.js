const axios = require('axios');

const getUniqueItems = (arr) => arr.filter(function (item, pos) {
    return arr.indexOf(item) === pos;
});

const fetchPlanets = (planetPage = 1, speciesPage = 1) => {
    return new Promise((resolve, reject) => {
        Promise.all([axios.get(`https://swapi.dev/api/planets?${planetPage}`), axios.get(`https://swapi.dev/api/species?${speciesPage}`)])
            .then(res => {
                if (res.length > 0) {
                    const speciesPeople = getUniqueItems(res[1]['data']['results'].reduce((previousValue, species) => {
                        if (species.people.length > 0 && species.classification === 'reptile') {
                            previousValue = [...previousValue, ...species['people']]
                        }
                        return previousValue;
                    }, []));
                    const planets = res[0]['data']['results'].filter(planet => {
                        if (planet.films.length > 0 && planet.residents.length > 0 && planet.residents.some(item => speciesPeople.includes(item))) {
                            return true;
                        }
                        return false;
                    });

                    resolve([null, planets])
                }
            })
            .catch(err => {
                resolve(['Failed to fetch Planets', null])
            })
    })
}

module.exports = {
    fetchPlanets
}
