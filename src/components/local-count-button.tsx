import { useEffect, useState } from 'react'
import { createClientOnlyFn } from '@tanstack/react-start'
import { ClientOnly } from '@tanstack/react-router'
import { Button } from './ui/button'

export function LocalCountButton() {
  return (
    <ClientOnly fallback="sdfsdfsdfsdf">
      <ClientSection />
    </ClientOnly>
  )
}

function ClientSection() {
  const [count, setCount] = useState(loadCount)

  useEffect(() => {
    localStorage.setItem('count', count.toString())
  }, [count])

  return (
    <Button
      className="cursor-pointer"
      variant="outline"
      size="sm"
      onClick={() => setCount((c) => c + 1)}
    >
      {count}
    </Button>
  )
}

const loadCount = createClientOnlyFn(() => {
  const storedCount = localStorage.getItem('count')
  return storedCount ? parseInt(storedCount) : 0
})
