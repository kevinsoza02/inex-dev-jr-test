import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container } from '@mui/material';
import Header from '@/components/header';
import Catalogo from '@/components/catalogo';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Container className="">
        <Header/>
        <Catalogo/> 
      </Container>
    </>
  )
}
