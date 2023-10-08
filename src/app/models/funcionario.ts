export class Funcionario {
    id: number | null;
    nome: string | null;
    dataNascimento: string | null; // ou Date | null
    documentoId: number | null;
    documento: Documento | null;
    contatos: any | null;
    dependentes: any | null;
    funcionariosCargos: any | null;
    telefones: any | null;
    enderecos: any | null;
    empresaId: number | null;
    empresa: any | null;

    constructor(
        id: number | null = null,
        nome: string | null = null,
        dataNascimento: string | null = null,
        documentoId: number | null = null,
        documento: Documento | null = null,
        contatos: any | null = null,
        dependentes: any | null = null,
        funcionariosCargos: any | null = null,
        telefones: any | null = null,
        enderecos: any | null = null,
        empresaId: number | null = null,
        empresa: any | null = null
    ) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.documentoId = documentoId;
        this.documento = documento;
        this.contatos = contatos;
        this.dependentes = dependentes;
        this.funcionariosCargos = funcionariosCargos;
        this.telefones = telefones;
        this.enderecos = enderecos;
        this.empresaId = empresaId;
        this.empresa = empresa;
    }
}


export class Documento {
    id: number;
    rg: string;
    cpf: string;
    dataNascimento: string; // ou Date
    dataEmissao: string; // ou Date
    orgaoEmissor: string;
    estadoEmissor: string;
    paisEmissor: string;
    sexo: string;
    funcionarioId: number;
    funcionario: Funcionario | null;
}
