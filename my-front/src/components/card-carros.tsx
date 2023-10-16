"use client";

import Carros from "@/types/Carros";
import PageCarros from "@/types/PageCarros";
import Image from "next/image";
import Link from "next/link";

interface props {
    carros: PageCarros
}

export default function CardCarros({carros}:props) {
    return (
        <div className="grid grid-cols-3">
            {carros.results.map((i: Carros) => {
                return (
                    <Link href={'/'+i.uuid+''}>
                        <div className="border-2 border-primary mx-2">
                            <Image width={300} height={300} style={{ width: '100%', height: 'auto' }} alt="" src={i.url_img} />
                            <div className="p-2">
                                <h2 className="text-lg">{i.marca} {i.modelo}</h2>
                                <h4 className="text-xs">Ano: {i.ano}</h4>
                                <h4 className="text-xs">KM: {i.kilometragem}</h4>
                                <h2 className="text-lg">R${i.valor}</h2>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}