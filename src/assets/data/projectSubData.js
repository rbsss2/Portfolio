import React from "react";
import { useEffect } from "react";
import axios from "axios";
useEffect(() => {
  const getData = async () => {
    const projectContentDataList = await axios.get("./DB/imgData.json");
    console.log(projectContentDataList.data.projectContentData);
    setGallery(projectContentDataList.data.projectContentData);
  };
  getData();
}, []);
function projectSubData(props) {
  return <div></div>;
}

export default projectSubData;
