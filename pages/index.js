import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WriteByMe</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <Header title="Welcome to writebyme.io" />
      </main>

      <Footer />
    </div>
  )
}
