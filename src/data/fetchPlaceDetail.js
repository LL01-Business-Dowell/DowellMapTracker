import axios from "axios";

export default async function FetchPlaceDetail(data) {
  return await axios.post(
    "https://100086.pythonanywhere.com/accounts/get-details-list-stage1/",
    data
  );
}


