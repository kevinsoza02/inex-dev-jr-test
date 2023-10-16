import { useEffect, useState} from "react";
import Usuario from "@/types/Usuario";
import { redirect } from 'next/navigation'
import LoginAction from "@/components/login-action";
import Header from "@/components/header";
import { RedirectType } from "next/navigation";
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter()
    const [usuario, setUsuario] = useState<Usuario>()
    useEffect(() => {
        let logado = localStorage.getItem("LOGADO") || ""
        console.log(logado)
        if (logado != "") {
            //redirect('/admin/', RedirectType.push)
            router.replace('/admin')
        } 
    }, [])

    return (
        <>
            <Header></Header>
            <LoginAction></LoginAction>
        </>
    );
}