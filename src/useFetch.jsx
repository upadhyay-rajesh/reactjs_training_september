import { useState, useEffect } from "react";
function useFetch(url) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    

    useEffect(() => {
        
        setLoading(true);
        setError("");
        fetch(url)
            .then((response) => {
                
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
               
                return response.json();
            })
            .then((fetchedData) => {
                
                setData(fetchedData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });

    }, [url]);

    return ( 
 {data, loading, error }
     );
}

export default useFetch;