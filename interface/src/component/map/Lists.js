import React, { useEffect, useState } from "react";
import axios from "axios";
import Vistor from "../../page/List"
const URL = "http://192.168.1.2:80/attendance";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Lists=()=> {
  const [vistors, setVistors] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setVistors(data.vistors));
  }, []);
  console.log(vistors);
    return (
      <div>
      
        {vistors &&
          vistors.map((vistor, i) => (
            <div key={i}>
              <Vistor vistor={vistor} />
            </div>
          ))}
   
    </div>
    )
}

export default Lists
