import React from 'react';


export default function HobbyLinks () {
    const Hobbylist = ["www.youtube.com", "www.google.com", "www.facebook.com", "www.instagram.com"];
      
   return (
      <div >
   <p >HobbyLinks</p>
   <a href={Hobbylist[0]}> youtube </a>
   <a href={Hobbylist[1]}> google </a>
   <a href={Hobbylist[2]}> facebook </a>
   <a href={Hobbylist[3]}> instagram </a>
   </div>
   );
}