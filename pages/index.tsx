
import Head from "next/head"
import Link from "next/link"
import React from "react"

export default function Home() {
  return (
    <>
      <Head>
        <title>BlogFeed</title>
        <link rel="icon" href="title_logo.png" />
      </Head>
      <div>Some Random BS</div>
        <Link href="/section/login">
        <div className="bg-[#0063db] text-white p-3 rounded-full m-7 
                          font-bold transition ease-in-out hover:-translate-y-1 
                          hover:scale-110 hover:bg-blue-500 duration-300"
        >Start Now 
            <object data="arrow.svg" width="25" height="25" className="inline"></object>
        </div>
      </Link>
    </>
  )
}
