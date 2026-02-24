import { H1 } from '@/components/ui/typography.tsx'
import { Button } from '@/components/ui/button.tsx'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="flex flex-col items-center gap-4">
        <H1>Shadcn UI setup</H1>
        <Button variant={'default'}>Shadcn Button</Button>
      </div>
    </main>
  )
}

export default App
