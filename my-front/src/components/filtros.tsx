import { Button, Container } from "@mui/material";
import Filtros from "@/types/Caracteristica";

interface props {
    filtros: Array<Filtros>,
}

export default function BarraFiltros({filtros}: props){
    return (
        <div className="flex items-center my-3">
            <label>Filtrar por:</label>
            <div className="mx-3">
                {filtros.map((i: Filtros) => {
                    return (<label className="border border-primary py-2 px-4 rounded-full mx-2">{i.valor}</label>) ;
                })}
            </div>
            <div className="border border-primary rounded-full text-white bg-primary">
                <Button sx={{ 
                    color: '#fff',
                    padding: '0.2rem 1rem',
                }}>+</Button>
            </div>
        </div>
    );
}