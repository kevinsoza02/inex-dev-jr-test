import Header from '@/components/header';
import { Container, Button } from '@mui/material';
import InformacoesCarros from '@/components/carros-page';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export default function PaginaCarro() {
    const router = useRouter()
    return(
      <>
        <Container className="">
          <Header/>
          <InformacoesCarros id={router.query.id}/> 
        </Container>
      </>
    );
}