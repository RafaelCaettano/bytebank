import { Cartao } from "./cartao.model";

export interface User {
    id: number;
    name: string;
    agencia: string;
    conta: string;
    saldo: number;
    emprestimo: number;
    fatura: number;
    cartoes: Cartao[];
}