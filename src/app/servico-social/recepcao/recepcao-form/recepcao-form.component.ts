import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepcao-form',
  templateUrl: './recepcao-form.component.html',
  styleUrls: ['./recepcao-form.component.scss'],
})
export class RecepcaoFormComponent implements OnInit {
  faltadeDoc = false;
  faltaDocumentacao(): void {
    this.faltadeDoc = !this.faltadeDoc;
  }
  sexo: string[] = ['Masculino', 'Feminino'];
  Sexo: string = 'Masculino';
  corRaca: string[] = ['Branca', 'Preta', 'Amarela', 'Parda', 'Indígena'];
  CorRaca: string = 'Branca';
  nacionalidade: string[] = [
    'Ensino Fundamental completo',
    'Ensino Fundamental incompleto',
    'Ensino Médio completo',
    'Ensino Médio incompleto',
    'Ensino Superior completo',
    'Ensino Superior incompleto',
    'Pós-Graduação completo',
    'Pós-Graduação incompleto',
  ];
  Nacionalidade: string = 'Ensino Fundamental completo';

  ocupacao: string[] = [
    'Abastecedor de Linha de Produção',
    'Abastecedor de Máquinas',
    'Acabador de Embalagens',
    'Acompanhante de Idosos',
    'Açougueiro',
    'Acrilista',
    'Acupunturista',
    'Aderecista',
    'Adesivador',
    'Adestrador',
    'Administração',
    'Administração Pública',
    'Administrador',
    'Administrador de Banco de Dado',
    'Administrador de Contratos',
    'Administrador de Dados',
    'Administrador de E-commerce',
    'Administrador de Empresas',
    'Administrador de Redes',
    'Administrador de Redes Junior',
    'Administrador de Redes Pleno',
    'Administrador de Redes Sênior',
    'Administrador de Sistemas',
    'Administrador Financeiro',
    'Administrador Hospitalar',
    'Administrador Predial',
    'Administrador público',
    'Administrativo de Obras',
    'Advogado',
    'Advogado Administrativo',
    'Advogado Ambientalista',
    'Advogado Cível',
    'Advogado Consumerista',
    'Advogado Criminalista',
    'Advogado de Contratos',
    'Advogado de Propriedade Intelectual',
    'Advogado Eleitoral',
    'Advogado Empresarial',
    'Advogado Imobiliário',
    'Advogado Securitário',
    'Advogado Societário',
    'Advogado Trabalhista',
    'Advogado Tributarista',
    'Aeronauta',
    'Afiador de Ferramentas',
    'Agente Comunitário de Saúde',
    'Babá',
    'Back Office',
    'Back Office de Vendas',
    'Balanceiro',
    'Balconista',
    'Bamburista',
    'Bancário',
    'Banco de Dados',
    'Barista',
    'Barman',
    'Bartender',
    'Berçarista',
    'Bibliotecário',
    'Biblioteconista',
    'Biblioteconomia',
    'Biblioteconomista',
    'Bilheteiro',
    'Biocombustíveis',
    'Bioinformacionista',
    'Biologista',
    'Biólogo',
    'Biomedicina',
    'Biomédico',
    'Bioquímico',
    'Biotecnologia',
    'Biotecnologia e Bioquímica',
    'Biotecnólogo',
    'Blaster',
    'Blogueiro',
    'Bloquista',
    'Bombeiro',
    'Bombeiro Civil',
    'Bombeiro Industrial',
    'Bordador',
    'Borracheiro',
    'Brigadista',
    'Business Partner',
    '...',
    '...',
    '...',
    '...',
    '...',
    '...',
    '...',
    '...',
  ];
  Ocupacao: string = 'Abastecedor de Linha de Produção';

  tipoLogradouro: string[] = [
    'Avenida',
    'Alameda',
    'Beco',
    'Bloco',
    'Condomínio',
    'Estrada',
    'Loteamento',
    'Residencial',
    'Rodovia',
    'Rua',
    'Sítio',
    'Travessa',
    'Via',
  ];
  TipoLogradouro: string = 'Avenida';

  uf: string[] = [
    'AC - Acre',
    'AL - Alagoas',
    'AP - Amapá',
    'AM - Amazonas',
    'BA - Bahia',
    'CE - Ceará',
    'DF - Distrito Federal',
    'ES - Espírito Santo',
    'GO - Goiás',
    'MA - Maranhão',
    'MT - Mato Grosso',
    'MS - Mato Grosso do Sul',
    'MG - Minas Gerais',
    'PA - Pará',
    'PB - Paraíba',
    'PR - Paraná',
    'PE - Pernambuco',
    'PI - Piauí',
    'RJ - Rio de Janeiro',
    'RN - Rio Grande do Norte',
    'RS - Rio Grande do Sul',
    'RO - Rondônia',
    'RR - Roraima',
    'SC - Santa Catarina',
    'SP - São Paulo',
    'SE - Sergipe',
    'TO - Tocantins',
  ];
  Uf: string = 'AC - Acre';

  cidades: string[] = [
    'Nome da Cidade tal 1 ',
    'Cidade 2',
    'Cidade 3',
    'Cidade 4',
    'Cidade 5',
    'Cidade 6',
    'Cidade 7',
  ];
  Cidades: string = 'AC - Acre';

  tipoDeContato: string[] = [
    '******************',
    '******************',
    '******************',
    '******************',
    '******************',
    '******************',
  ];
  TipoDeContato: string = 'Avenida';

  constructor() {}
  ngOnInit(): void {}
}
