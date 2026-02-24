import { Typography } from '@/components/ui/typography.tsx'
import { Button } from '@/components/ui/button.tsx'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="flex flex-col items-center gap-4">
        <Typography variant={'h1'}>Shadcn UI setup</Typography>
        <Typography variant={'regularLink'} href={'https://github.com/'}>
          Shadcn UI setup
        </Typography>
        <Button>Shadcn Button</Button>
      </div>
    </main>
  )
}

export default App
