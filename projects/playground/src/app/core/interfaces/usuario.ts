export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  cargo: string;
  departamento: string;
  dataAdmissao: Date;
  ativo: boolean;
}
