import Link from "next/link";
import React from "react";

export default function NotAllowedPage() {
    return (
        <>
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Oops!</span>
                        </h2 >
                        <p className="text-2xl font-semibold md:text-3xl" > Você ainda não pode acessar esta página!</p>
                        < p className="mt-4 mb-8 dark:text-gray-400" > Mas não se preocupe, faça login com sua conta e deixaremos você entrar :)</p >
                        <Link rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" > Ir ao Login</Link >
                    </div >
                </div >
            </section >
        </>
    )
}