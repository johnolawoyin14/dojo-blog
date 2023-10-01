import { useState,useEffect } from "react";

const useFetch=(url)=>{



    const [data,setData]=useState(null);
    const [isPending,setIspending]=useState(true);
    const [error,setError]=useState(null)
  

    useEffect(()=>{
const abort=new AbortController();

        setTimeout(() => {
          fetch(url,{signal:abort.signal})
            .then(res=>{
          // console.log(res)
             if(!res.ok){
              throw Error("UNABLE TO FETCH 'blogList' DATA")
              }
              return res.json()
        })
        .then(data=>{
          
          setData(data);
            setIspending(false)
            setError(null)
        })
        .catch(err=>{
          if(err.name==="AbortError"){
            console.log("FETCH ABORTED")
          }
          else{
            setError(err.message)
            setIspending(false)
          }


        })
        }, 2000);
        return()=>abort.abort();
        },[url]);
        return{data,isPending,error}
        
}

export default useFetch;