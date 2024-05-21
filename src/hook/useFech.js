import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    const [data, setData] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(endpoint);
            setData(response.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [endpoint]); // Add endpoint to dependencies to refetch on change

    return { data, loading };
};

export default useFetch;
