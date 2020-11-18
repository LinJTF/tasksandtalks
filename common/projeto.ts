import { Tarefa } from './tarefa';

export class Projeto {
    nome: string;
    criacao: Date;
    conclusao: Date;
    arquivado: boolean;
    tarefas: Tarefa[] = [];
}