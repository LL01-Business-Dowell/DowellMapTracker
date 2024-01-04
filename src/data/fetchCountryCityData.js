import axios from "axios";


export default async function FetchCountryCityData(api_key, country) {
    return await axios.post(`https://100074.pythonanywhere.com/get-coords-v3/?api_key=${api_key}`, { "country": country, "query": "all" })
}