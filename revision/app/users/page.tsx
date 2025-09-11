
import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link";
export default async function UsersPage() {
    const userData:Promise<User[]>=getAllUsers();
    const users=await userData;
  return (
     <section>
        <h2>
            <Link href='/'>Back to home</Link>
        </h2><br/>
        {users.map(user=>(
            <p key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
        ))
            
        }
     </section>
  )
}
