import React from 'react'
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error: any = useRouteError(); //'any': no type gymnastics for template error page
  console.error(error);

  return (
    <div className='flex flex-col justify-center items-center gap-y-5 h-full'>
      <h1 className='font-bold tracking-wide text-4xl'>Oops!</h1>
      <p className='text-lg text-zinc-800 italic'>Sorry, an unexpected error has occurred.</p>
      <p className='text-zinc-700'>
        {[error.status, error.statusText].join(': ')}
      </p>
    </div>
  );
}

export default ErrorPage