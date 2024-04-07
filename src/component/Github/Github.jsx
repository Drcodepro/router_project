import React, { useEffect, useState } from "react";

export default function Github(){

    const [data,setdata] = useState("");
    useEffect(()=>{
        fetch("https://api.github.com/users/Drcodepro")
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setdata(data);
        })
    },[])

    return (<>
    <div className=' flex gap-14 items-center text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <img src={data.avatar_url} alt="gitHub profile pic" width={200}/>
       
        <div className="flex flex-col items-start">
         <h2>Github userName : {data.name}</h2>
         <h2>Github total Repos : {data.public_repos}</h2>
         <h2>Github  followers : {data.followers}</h2>
        </div>
    </div>
    </>)
}

