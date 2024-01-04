import { useState } from "react";
import Layout from "../Layout/Layout";
import MySurveys from "./MySurveys";
import MainMap from "../components/Map";
import { useGlobalContext } from "../Context/PreviewContext";
import FetchNearby from "../data/fetchNearby";
import FetchPlaceDetail from "../data/fetchPlaceDetail";

const LandingPage = () => {
  const context = useGlobalContext();
  console.log("context Value: ",context)
  const { inputData, setInputData, setAPIKey, api_key, setCenterCoords, centerCoords, placeAPIKey } = context;
  const [loading, setLoading] = useState(false);
  const [receivedKey, setRecievedKey] = useState("EhdQUTM2K0hNLCBOYWlyb2JpLCBLZW55YSImOiQKCg2PPDr");
  const [placeDetails, setPlaceDetails] = useState([]);
  const [nearbyResults, setNearbyResults] = useState([]);
  

  const centerParams = {
    center_lat: centerCoords.lat,
    center_lon: centerCoords.lon,
  };




  return (
    <Layout>
      <main className="w-full  h-full ">

        <div className="flex mx-12 my-12 h-[390px]"> 
          <div className="w-[900px]">
           <MainMap  pins = {null}/>

          </div>
         

         
        </div>
      </main>
    </Layout>
  );
};

export default LandingPage;
