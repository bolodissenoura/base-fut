import React, { use } from "react";
import Head from "next/head";
import { supabase } from "../server/supabase"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Feed() {
  const [user, setUser]: any = useState({})

  const router = useRouter()

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

  function goToLoginPage() {
    router.push("/login")
  }

  async function signOutUser() {
    supabase.auth.signOut()
    goToLoginPage()
  }

  useEffect(() => {
    Object.keys(user).length !== 0 ? console.log('⚡️ already auth') : goToLoginPage()
  })


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
          <>
          </>
        }
      </main>
    </>
  );
}
