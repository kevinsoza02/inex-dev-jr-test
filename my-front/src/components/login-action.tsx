import { useEffect, useState, FormEvent} from "react";
import Usuario from "@/types/Usuario";
import { redirect } from 'next/navigation';
import Container from '@mui/material/Container';

export default function LoginAction() {
    const [erro, setErro] = useState<string>("")

    async function Login(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget)
            let params = {
                method: "POST",
                body: formData
            }
            const response = await fetch('http://localhost:8000/auth/', params);
            
            const data = await response.json()
            localStorage.setItem('API_TOKEN', data.token)
            localStorage.setItem('LOGADO', "TRUE")
            redirect("/admin")
        } catch (error) {
            console.error(error)
            setErro("Erro no servidor, tente novamente mais tarde!")
        }
    }

    return (
        <>
            <Container className='flex mt-3 border-2 border-solid border-primary py-4 items-center justify-center'>
                <div className="flex flex-column w-3/12 my-10">
                    <form onSubmit={Login}>
                        <label className="my-3">Email:<input className="w-full text-black" type="text" name="email" /></label>
                        <label className="my-3">Senha:<input className="w-full text-black" type="password" name="password" /></label>
                        <input className="w-full my-4 border-2 border-solid border-primary" type="submit" />
                    </form>
                    {erro != "" && 
                        <label className="text-red-600">{erro}</label>
                    }
                </div>
            </Container>
        </>
    );
}