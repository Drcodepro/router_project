import React from "react";
// have to import useRoiterError hook for creating error page that will return a error msg and error statesText  etc
// useRouteError provides the error that was thrown , When the user navigates to routes that don't exist you'll get an error response with a "Not Found" statusText.
import { useRouteError } from 'react-router-dom';

export default function ErrorPage(){
    const error = useRouteError();
    console.log("error msg = " , error);
    return (<>
    <div className='bg-slate-600 text-center text-white'>
      <h1>oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
      <p>{ `${ error.status }  ${ error.statusText }`}</p>
    </div>
    </>)
}