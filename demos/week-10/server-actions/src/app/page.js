import Button from "@/components/Button"
import { redirect } from "next/dist/server/api-utils"

export default function Home() {

  // serverAction()
  return (
    <div>
        <h2>Home</h2>
        <Button action={async () => {
          'use server'
          serverAction('Sam')
        }} />
    </div>
  )
}

async function serverAction(name) {
  'use server'
  console.log('Hello server!' + name)
  redirect('/books')
}