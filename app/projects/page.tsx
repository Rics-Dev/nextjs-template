'use client'

import { useState } from 'react'
import { useFetch } from '@/hooks/use-fetch'
import { Project } from '@/types'
import { PageContainer } from '@/components/layout/page-container'

export default function ProjectsPage() {
  const { data: projects, isLoading, isError, error, mutate } = useFetch<Project[]>('/api/projects')
  const [showForm, setShowForm] = useState(false)
  
  return (
    <PageContainer>
      <div className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Hackathon Projects</h1>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
          >
            {showForm ? 'Cancel' : 'Add Project'}
          </button>
        </div>
        
        {showForm && <ProjectForm onClose={() => setShowForm(false)} onSuccess={() => mutate()} />}
        
        {isLoading && <p className="text-center py-8">Loading projects...</p>}
        
        {isError && (
          <div className="bg-destructive/10 border border-destructive text-destructive p-4 rounded-md mb-6">
            <p>Error loading projects: {error}</p>
          </div>
        )}
        
        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : !isLoading && (
          <p className="text-center py-8 text-muted-foreground">No projects found. Create your first project!</p>
        )}
      </div>
    </PageContainer>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="text-xs text-muted-foreground">
        Created: {new Date(project.createdAt).toLocaleDateString()}
      </div>
    </div>
  )
}

function ProjectForm({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
        }),
      })
      
      const result = await response.json()
      
      if (result.status === 'error') {
        throw new Error(result.error)
      }
      
      // Reset form and close
      setFormData({ title: '', description: '', technologies: '' })
      onSuccess()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create project')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="bg-card border rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
      
      {error && (
        <div className="bg-destructive/10 border border-destructive text-destructive p-3 rounded-md mb-4">
          <p>{error}</p>
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div>
          <label htmlFor="technologies" className="block text-sm font-medium mb-1">Technologies (comma separated)</label>
          <input
            id="technologies"
            name="technologies"
            type="text"
            value={formData.technologies}
            onChange={handleChange}
            placeholder="React, Next.js, TypeScript"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      
      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border rounded-md hover:bg-accent"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 disabled:opacity-50"
        >
          {isSubmitting ? 'Saving...' : 'Save Project'}
        </button>
      </div>
    </form>
  )
}