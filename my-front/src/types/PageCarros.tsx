import Carros from "./Carros";

export default interface PageCarros {
    "count": number,
    "next": null | string,
    "previous": null | string,
    "results": Array<Carros>
}