import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

// Simple version
// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     useEffect(() => {
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => setData(data));
//     }, [url]);
//     return [data];
// };

export default useFetch;
