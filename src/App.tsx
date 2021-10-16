import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Circle, Map, MapMarker } from "react-kakao-maps-sdk";

function App() {
  const [list, setList] = React.useState<any[]>([]);
  const [center, setCenter] = React.useState({
    mapX: 128.6142847,
    mapY: 36.0345423,
    radius: 10000,
  });
  const call = async (center: any) => {
    // ...TODO API
  };

  React.useEffect(() => {
    call(center);
  }, [center]);
  return (
    <div className="App">
      <Map
        center={{ lat: center.mapY, lng: center.mapX }}
        style={{ width: "100%", height: "360px" }}
        onIdle={(e) => {
          const center = e.getCenter() as any;
          setCenter({
            ...center,
            mapX: center.La,
            mapY: center.Ma,
          });
        }}
      >
        <Circle
          center={{
            lng: center.mapX,
            lat: center.mapY,
          }}
          fillOpacity={0.4}
          radius={center.radius}
        />
      </Map>

      {/* {list.map((item) => (
        <div key={item.contentId}>
          <p>{item.facltNm}</p>
          <img src={item.firstImageUrl} alt="" />
        </div>
      ))} */}
    </div>
  );
}

export default App;
