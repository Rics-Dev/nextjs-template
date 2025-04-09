/**
 * Common type definitions for the application
 */

// API response types
export interface ApiResponse<T = any> {
  status: 'success' | 'error'
  data?: T
  error?: string
}

// Fetch state for custom hooks
export interface FetchState {
  isLoading: boolean
  isError: boolean
  error?: string
}

// User type for authentication
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

// Project type for hackathon projects
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  createdAt: string
  updatedAt: string
}