"use client";

import { useState, useEffect } from "react";
import { Container, Button } from "@mui/material";
import BarraFiltros from "./filtros";
import Filtros from "@/types/Caracteristica";
import Carros from "@/types/Carros";
import CardCarros from "./card-carros";

export default function Catalogo(){
    const [filtros, setFiltros] = useState<Array<Filtros>>([{nome: 'Valor',  valor:'R$ 30.000 - 40.000'}])   
    const [carros, setData] = useState<Array<Carros>>([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8000/api/carros/',  {method: 'GET'})
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!carros) return <p>No profile data</p>
    return (
        <>
            <div>
                <BarraFiltros filtros={filtros}></BarraFiltros>
                <CardCarros carros={carros}></CardCarros>
            </div> 
        </>
    );
}