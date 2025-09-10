import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Users",
}

export default async function UsersPage() {
  // Fetch users from library
  const users: User[] = await getAllUsers();
  console.log('Hello')

  return (
    <section>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <br />

      {users.map((user) => (
        <p key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </section>
  )
}
