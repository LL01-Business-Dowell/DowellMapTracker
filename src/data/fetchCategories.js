import axios from "axios";

export default async function FetchCategories(api_key) {
    return await axios.get(`https://100086.pythonanywhere.com/accounts/get-categories/?api_key=${api_key}`)
}