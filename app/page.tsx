import Link from 'next/link'
import Image from 'next/image'
import { PageContainer } from '@/components/layout/page-container'

export default function Home() {
  return (
    <PageContainer>
      <div className="py-12 md:py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Your Hackathon App
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10">
          Build, showcase, and manage your hackathon projects with ease.
          Get started by exploring projects or creating your own.
        </p>
        
        <div className="flex gap-4 mb-16">
          <Link 
            href="/projects"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 font-medium"
          >
            Explore Projects
          </Link>
          <Link 
            href="/dashboard"
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md hover:bg-secondary/80 font-medium"
          >
            View Dashboard
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <FeatureCard 
            icon="/file.svg"
            title="Create Projects"
            description="Easily create and manage your hackathon projects"
          />
          <FeatureCard 
            icon="/globe.svg"
            title="Showcase Work"
            description="Share your projects with the community"
          />
          <FeatureCard 
            icon="/window.svg"
            title="Track Progress"
            description="Monitor your project development in real-time"
          />
        </div>
      </div>
    </PageContainer>
  )
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="bg-card text-card-foreground rounded-lg border shadow-sm p-6 flex flex-col items-center text-center">
      <div className="mb-4 p-3 bg-primary/10 rounded-full">
        <Image 
          src={icon} 
          alt={title}
          width={24}
          height={24}
          className="h-6 w-6"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
