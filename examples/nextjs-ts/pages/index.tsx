import Link from 'next/link'

export default function IndexPage() {
  return (
    <main className="text-whatsapp px-5 py-5">
      <h1>NextJS Typescript Testing</h1>
      <ul className="text-blue-300">
        <li>
          <Link href="/box">Box</Link>
        </li>
      </ul>
    </main>
  )
}
