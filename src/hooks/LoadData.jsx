import { useEffect } from "react";
import { useState } from "react";

const LoadData = () => {
    const [jobs,setJobs]=useState([]);
    useEffect(()=>{
        fetch("/data.json")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return jobs
};

export default LoadData;