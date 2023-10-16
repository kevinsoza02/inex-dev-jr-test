import { useEffect, useState, FormEvent} from "react";
import { redirect } from 'next/navigation';
import Container from '@mui/material/Container';
import Link from "next/link";
import Image from "next/image";
import Carros from "@/types/Carros";
import PageCarros from "@/types/PageCarros";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from "next/router";

export default function ListaCarros() {
    const [carros, setCarros] = useState<PageCarros>();
    const [modal, setModal] = useState<boolean>(false);
    
    const router = useRouter();

    async function addCar(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget)
            const headers = {
                "Authorization": "Token " + localStorage.getItem('API_TOKEN')
            }
            let params = {
                method: "POST",
                body: formData,
                headers: headers
            }
            const response = await fetch('http://localhost:8000/auth/carros/', params);

            router.reload();
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        fetch('http://localhost:8000/api/carros/')
            .then(res => { return res.json()})
            .then((data) => {
                setCarros(data)
                //setLoading(false)
            })
    }, [])

    return (
        <>
            {modal == true &&
                <div className="relative z-10"> 
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <div className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <h3 className="text-base font-semibold leading-6 text-white" id="modal-title">Inserir carro</h3>
                                                <div className="mt-2 flex flex-column w-11/12 my-10">
                                                    <form onSubmit={addCar}>
                                                        <label> URL da imagem: <input className="w-full text-black" type="text" name="url_img"/></label>
                                                        <label> Marca: <input className="w-full text-black" type="text" name="marca"/></label>
                                                        <label> Modelo: <input className="w-full text-black" type="text" name="modelo"/></label>
                                                        <label> Ano: <input className="w-full text-black" type="text" name="ano"/></label>
                                                        <label> Cor: <input className="w-full text-black" type="text" name="cor"/></label>
                                                        <label> Kilometragem: <input type="text" className="w-full text-black" name="kilometragem"/></label>
                                                        <label> Motor: <input className="w-full text-black" type="text" name="motor"/></label>
                                                        <label> Valor: <input className="w-full text-black" type="text" name="valor"/></label>
                                                        <input className="w-6/12 my-4 border-2 border-solid border-primary" type="submit" value="Enviar"/>
                                                        <button className="w-6/12" onClick={()=>{
                                                            setModal(false);
                                                        }}>Fechar</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <Container className='flex flex-col mt-3 border-2 border-solid border-primary py-4 items-center justify-center'>
                <div className="flex ml-auto w-3/12 my-3 justify-end">
                    <button onClick={()=>{
                        setModal(true);
                    }}  className="border-2 border-solid border-primary "><AddIcon/></button>
                </div>
                {carros &&
                    <> 
                        <div className="w-full">
                            {carros.results.map((i: Carros) => {
                                return (
                                    <div className="flex justify-around w-full"> 
                                        <label>{i.uuid}</label>
                                        <label>{i.marca} {i.modelo} {i.motor}</label>
                                        <label>{i.ano}</label>
                                        <label>{i.valor}</label>
                                        <button><EditIcon/></button>
                                        <button><DeleteIcon/></button>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                }
            </Container>
        </>
    );
}