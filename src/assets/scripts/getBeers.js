export default function get_beers(beer_name = '') {
    let beer_query = beer_name === '' ? '' : `?beer_name=${beer_name}`
    return fetch(`https://api.punkapi.com/v2/beers${beer_query}`).then(response => response.json());
}

