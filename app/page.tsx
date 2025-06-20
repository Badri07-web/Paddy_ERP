import { redirect } from "next/navigation"
import { Wheat } from 'lucide-react'

export default function HomePage() {
  return (
    <div>
      <Wheat className="h-12 w-12 text-green-600 mx-auto mb-4" />
      {redirect("/login")}
    </div>
  )
}