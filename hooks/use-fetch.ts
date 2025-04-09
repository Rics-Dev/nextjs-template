'use client'

import { useState, useEffect } from 'react'
import { ApiResponse, FetchState } from '@/types'

/**
 * A custom hook for fetching data from the API
 */
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [state, setState] = useState<FetchState>({
    isLoading: true,
    isError: false,
  })

  const mutate = async () => {
    try {
      setState({ isLoading: true, isError: false })
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      
      const result = await response.json() as ApiResponse<T>
      
      if (result.status === 'error') {
        throw new Error(result.error || 'Unknown error')
      }
      
      setData(result.data as T)
      setState({ isLoading: false, isError: false })
    } catch (error) {
      console.error('Fetch error:', error)
      setState({
        isLoading: false,
        isError: true,
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ isLoading: true, isError: false })
        const response = await fetch(url)
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        
        const result = await response.json() as ApiResponse<T>
        
        if (result.status === 'error') {
          throw new Error(result.error || 'Unknown error')
        }
        
        setData(result.data as T)
        setState({ isLoading: false, isError: false })
      } catch (error) {
        console.error('Fetch error:', error)
        setState({
          isLoading: false,
          isError: true,
          error: error instanceof Error ? error.message : 'Unknown error',
        })
      }
    }

    fetchData()
  }, [url])

  return { data, ...state, mutate }
}