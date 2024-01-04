import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../Context/PreviewContext';

const MainMap = ({ centerCords, pins }) => {
  const {mapAPIKey} = useGlobalContext();
  const [mapCenter, setMapCenter] = useState({ lat: 0.46005, lng: 42.11169 });
  const [mapKey, setMapKey] = useState(0);

  const handleMapLoad = (map) => {
    // Now you can use the map instance here
    console.log("Map instance:", map);
  };

  useEffect(() => {
    if (centerCords ) {
      setMapCenter({ lat: centerCords.lat, lng: centerCords.lng });
      // Update the key to force re-render when the center changes
      setMapKey((prevKey) => prevKey + 1);
    }
  }, [centerCords]);

  return (
    <div style={{ height: "85vh", width: "100vh" }}>
      <APIProvider apiKey={mapAPIKey}>
        <Map
          id={"mymap"}
          key={mapKey} // Add a key to force re-render
          zoom={12}
          center={mapCenter}
          onLoad={handleMapLoad}
        >
          {pins?.map((value, key) => {
            const cords = value.location_coord.split(" , ");
            return (
              <Marker
                onClick={()=>setKeyAnimate(true)}
                key={key}
                position={{ lat: Number(cords[0]), lng: Number(cords[1]) }}
              />
            );
          })}
        </Map>
      </APIProvider>
    </div>
  );
};

export default MainMap;
