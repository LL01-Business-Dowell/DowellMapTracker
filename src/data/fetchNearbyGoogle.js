import axios from "axios";
// import { createProxyServer } from "http-proxy";
// import { HttpProxy } from "vite";

// const proxy = createProxyServer({});

async function FetchNearbyGoogle(country, city, category, api_key) {
    return response = await axios.post(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category} in ${city} in ${country}&radius=2000&key=${api_key}`), {
        proxy: {
            host: 'localhost',
            port: 5173
        }
    }
}


export default FetchNearbyGoogle;