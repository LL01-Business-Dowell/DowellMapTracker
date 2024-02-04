import axios from "axios";
import extractStandData from "./sortCells";
import filterNonEmptyArrays from "./fiterStandWithData";

export default async function GetStandWithData() {
    const data = await axios.get("https://100085.pythonanywhere.com/api/v1/bett_event/65ab86f2c5b56cc2cab8a973/");
    console.log(data?.data.response)
    return data;
}