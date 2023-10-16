"use client";

import Image from "next/image";
import Carros from "@/types/Carros";
import React, { useState, useEffect } from 'react';
import Caracteristica from "@/types/Caracteristica";

interface props {
    id?: string | string[]
};

export default function InformacoesCarros(
    {id} : props
){
    const [carro, setCarro] = useState<Carros>()
    const [caracteristicas, setCaracteristicas] = useState<Array<Caracteristica>>([])
    

    useEffect(()=>{
        fetch('http://localhost:8000/api/carros/' + id)
            .then(res => { return res.json()})
            .then((data) => {
                setCarro(data)
                //setLoading(false)
            })
        fetch('http://localhost:8000/api/caracteristicas/' + id)
            .then(res => { return res.json()})
            .then((data) => {
                setCaracteristicas(data)
                //setLoading(false)
            })
    }, [])

    return(
        <>
            <div className="border-2 border-primary mt-3">
                {carro &&
                <>    
                    <div className="flex">
                        <Image alt="" src={carro.url_img} width={840} height={560} />
                        <div className="p-2">
                            <h2 className="text-xl font-bold">{carro.marca} {carro.modelo} {carro.motor}</h2>
                            <h2 className="text-lg">Ano: {carro.ano}</h2>
                            <h2 className="text-lg">Cor: {carro.cor}</h2>
                            <h2 className="text-lg">{carro.kilometragem} KM</h2>
                            <h2 className="text-2xl font-bold mt-5">R$ {carro.valor}</h2>
                        </div>
                    </div>
                </> }
            </div> 
            <div className="border-2 border-primary mt-3">
                {carro &&
                <>    
                    <div className="flex py-5">
                        <div className="mx-3">
                            {caracteristicas.map((i: Caracteristica) => {
                                return (<label className="border border-primary py-2 px-4 rounded-full mx-2">{i.caracteristica}</label>) ;
                            })}
                        </div>
                    </div>
                </> }
            </div> 
        </>
    );
}