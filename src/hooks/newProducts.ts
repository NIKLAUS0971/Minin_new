import axios, { AxiosError } from "axios";
import React, { useState, useEffect } from "react";


export function useProducts() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchData() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get('https://fakestoreapi.com/products?limit=5')
            setData(response.data)
            setLoading(false)

        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])




    return { data, loading, error }
}