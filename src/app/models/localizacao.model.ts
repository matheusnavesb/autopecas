import { Fornecedor } from "./fornecedor.model";

export class Localizacao {
  id!: number;
  cidade!: string;
  estado!: string;
  fornecedor!: Fornecedor;
}
