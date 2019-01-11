export default function get_beers() {
    return fetch('https://api.punkapi.com/v2/beers').then(response => response.json());
}

