import React from "react";

function Main(props) {
  const {data}=props
  return (
    <div className="imgContainer">
      <img src={data.hdurl}  className="bgImage" alt={data.title || 'bg-img'}/>
    </div>
  );
}

export default Main;
 