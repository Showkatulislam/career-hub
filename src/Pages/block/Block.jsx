import { useEffect, useState } from "react";
import BlockCard from "../../Component/BlockCard";

const Block = () => {
    const [blocks,setBlocks]=useState([])
    useEffect(()=>{
        fetch("/block.json")
        .then(res=>res.json())
        .then(data=>setBlocks(data))
    },[])
    return (
        <div className="m-8">
            {
                blocks.map(block=><BlockCard key={block.id} cardData={block}></BlockCard>)
            }
        </div>
    );
};

export default Block;