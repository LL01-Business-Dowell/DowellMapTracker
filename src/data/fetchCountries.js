import axios from "axios";

export default async function FetchCountries(api_key) {
    return (
        await axios.post(`https://100074.pythonanywhere.com/get-countries-v3/?api_key=${api_key}`)
    );
}