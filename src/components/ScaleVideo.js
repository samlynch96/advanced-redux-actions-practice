import React from 'react';
import { connect } from "react-redux";

function ScaleVideo(props) {
  return (
      <div>
        Scale Video: <input
        onChange={
          (e)=>{
            if(props.set){
              props.set(e.target.value);
            }
          }
        }
         type="range" min="1" max="10" step="1" />
      </div>
  );
}
export default ScaleVideo;
