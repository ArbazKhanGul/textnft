import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import  Main from '../components/mainpage'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


<Navbar></Navbar>
<Main></Main>   

    </div>
  )
}
