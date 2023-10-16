import { useEffect, useState } from "react";
import Usuario from "@/types/Usuario";
import { redirect } from 'next/navigation'
import LoginAction from "@/components/login-action";
import Header from "@/components/header";
import { useRouter } from "next/router";
import ListaCarros from "@/components/lista-carros";

export default function Login() {
    const router = useRouter()
    const [usuario, setUsuario] = useState<Usuario>()
    useEffect(() => {
        let logado = localStorage.getItem("LOGADO") || ""
        if (logado == "") {
            //redirect('/')
            router.replace('/')
        } 
    }, [])

    return (
        <>
            <Header></Header>
            <ListaCarros></ListaCarros>
        </>
    );
}