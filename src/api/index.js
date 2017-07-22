import config from './config';

const { apiKey } = config;
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${apiKey}&format=json`;

export default function getTracks() {
  return fetch(URL)
    .then(res => res.json())
    .then(json => json.tracks.track)
}