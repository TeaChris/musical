const CLIENT_ID = 'ec402c93c74d49dbb6108421af4c8a4a'
const REDIRECT_URI = 'http://localhost:5173/'
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
const RESPONSE_TYPE = 'token'

export const spotifyApi = {
  authUrl: `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`,
}
