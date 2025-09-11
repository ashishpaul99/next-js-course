import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"

import { notFound } from "next/navigation"

type Params = {
  params: Promise<{
    userId: string
  }>
}

// Setting metadata dynamically for each user page
export async function generateMetadata(
  { params }: { params: { userId: string } }
): Promise<Metadata> {
  const { userId } = await params
  const userData: Promise<User> = getUser(userId)
  const user: User = await userData

  // If user.name is not found, return a custom metadata title
  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  // Otherwise, return metadata based on the user's data
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}


export default async function UserPage({ params }: Params) {
  const { userId } = await params
  const userData: Promise<User> = getUser(userId)
  const userPostsData: Promise<Post[]> = getUserPosts(userId)

  // Wait for the user info first
  const user = await userData

  
  if(!user) return notFound()

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  )
}

export async function generateStaticParams(){
   const usersData:Promise<User[]>=getAllUsers();
   const users=await usersData;
   return users.map(user=>({
       userId:user.id.toString()
   }))
}