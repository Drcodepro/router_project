import React from "react";
// we have to import useParams to extract the query parameters from the Url
import {useParams} from "react-router-dom";

export default function User(){
    const {userid} = useParams(); // destructure the parameters 

    return <><h1>User:{userid}</h1></>
}