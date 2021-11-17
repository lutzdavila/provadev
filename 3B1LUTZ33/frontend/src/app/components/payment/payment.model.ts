export interface Payment {
  id?: number;
  cpf: string;
  numero_cartao: number;
  prazo: string;
  codigo_resgate: string;
}