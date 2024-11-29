import { useEffect, useState } from "react";
import Data from "..";
import { Card } from "./Card";

const Men = () => {
    const [menData, setMenData] = useState([])

    useEffect (() => {
        const men = Data.filter((val) => val.category !== "women")
        setMenData(men)
    },[])

    return (
        <div className="grid grid-cols-4 gap-6 my-12">
           {menData.map((item) => (
            <Card key={item.id} item={item}/>
        ))}
        
        </div>
    );
};

export default Men;