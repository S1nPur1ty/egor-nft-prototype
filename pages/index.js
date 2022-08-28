import Head from 'next/head'
import {Container} from '../styles/Global.style';
import {Home} from '../views/Home/Home.view';
import { HomeViewModelInstance } from '../views/Home/Home.viewmodel';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Main</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <Container>
        <Home viewModel={HomeViewModelInstance} />
      </Container>
    </>
  )
}
