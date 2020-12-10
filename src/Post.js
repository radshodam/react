import React from "react";
import Name from "./Name"
const Post =(props)=>{//ya props ya {Name , lastNAme}
    return <div>
    <Name text={props.name}></Name>
    <p>{props.lastName}</p>
  </div>;
}

export default Post;
