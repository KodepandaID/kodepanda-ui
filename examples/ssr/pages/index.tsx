import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SSR Testing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-5 py-5">
        <ul className="text-blue-400">
          <li>
            <Link href="/box">BOX</Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home
