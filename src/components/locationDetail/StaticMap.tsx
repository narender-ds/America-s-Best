import * as React from "react";

type Coordinates = {
  latitude: string;
  longitude: string;
};

const StaticMap = (props: Coordinates) => {
  const { latitude, longitude } = props;
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Static Map</h2>
      <img
        className="w-full"
        width="300"
        height="200"
        src={
          "https://maps.googleapis.com/maps/api/staticmap?center=" +
          `${latitude}` +
          "," +
          `${longitude}` +
          "&zoom=14&size=600x400&maptype=roadmap&markers=color:red%7Clabel:LL%7C" +
          `${latitude}` +
          "," +
          `${longitude}` +
          "&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18"
        }
        alt=""
      ></img>
    </>
  );
};

export default StaticMap;
