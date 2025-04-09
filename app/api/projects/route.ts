import { NextRequest } from 'next/server'

// Example projects data
const projects = [
  {
    id: '1',
    title: 'AI Assistant',
    description: 'A smart AI assistant for developers',
    technologies: ['React', 'Next.js', 'OpenAI'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Health Tracker',
    description: 'An app to track your health and fitness',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// GET handler for fetching all projects
export async function GET() {
  return Response.json({
    status: 'success',
    data: projects,
  })
}

// POST handler for creating a new project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.title || !body.description) {
      return Response.json(
        { status: 'error', error: 'Title and description are required' },
        { status: 400 }
      )
    }
    
    // Create a new project
    const newProject = {
      id: Date.now().toString(),
      title: body.title,
      description: body.description,
      technologies: body.technologies || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    
    projects.push(newProject)
    
    return Response.json({
      status: 'success',
      data: newProject,
    }, { status: 201 })
  } catch (error) {
    return Response.json(
      { status: 'error', error: 'Invalid request' },
      { status: 400 }
    )
  }
}