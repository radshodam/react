import React from "react";
import Post from "./Post";
const posts=[{
name:"mohamad",
lastName:"zarei",
},
{ name:"Radshodam",
    lastName:"Radsho",
    },
{ name:"enzo",
    lastName:"Radsho",
    }]
const Section = () => {
  return (
    <div className={"sect"}>
      <h1>section1</h1>
{
    posts.map(post=>{
        return <Post name={post.name} lastName={post.lastName}/>
    })
}
    </div>
  );
};

export default Section;
