import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: false
    });

    useEffect(() => {
        getFetch();
    }, [])

    
    // Petición HTTP
    const getFetch = async() => {
        try {
            const resp = await fetch(url);
            const data = await resp.json();

            setState({
                data: data,
                isLoading: false,
                error: false
            });
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                error: true
            });
        }
    }

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error
  }
}
