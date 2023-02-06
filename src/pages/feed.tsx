import Head from "next/head";
import Image from "next/image";
import { supabase } from "../server/supabase"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NotAllowedPage from "@/components/notAllowedPage";

export default function Feed() {
  const router = useRouter();


  const [user, setUser]: any = useState({})

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user)
          setUser(value.data.user)
        }
      })
    }
    getUserData()
  }, [])

  async function signOutUser() {
    const { error } = await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <>
      <Head>
        <title>⚽️BVF - Feed</title>
        <meta name="description" content="Seu feed de videos e propostas no futebol de base" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* @ts-ignore */}
        {Object.keys(user).length !== 0 ? <>
          <h1 className="mx-auto text-lg dark:text-blue-800">Bem vindo {user?.email}!</h1>
          <button onClick={() => signOutUser()}>Logout</button>
        </>
          :
          <NotAllowedPage />
        }
      </main>
    </>
  );
}
