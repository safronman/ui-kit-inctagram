import { Button } from '@/components/ui/button'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Shadcn UI setup</h1>
        <Button variant={'secondary'}>Shadcn Button</Button>
      </div>
    </main>
  )
}

export default App
