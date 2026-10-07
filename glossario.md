# Glossário

* **Anonimização:** Tratamento automático de textos que substitui ou remove dados pessoais (nomes, CPFs, telefones, endereços etc.) antes de o conteúdo ser enviado à IA. Pode ser ativada globalmente pelo menu do usuário ou usada pontualmente na ferramenta "Anonimização".
* **API (Interface de Programação de Aplicativos):** Um conjunto de regras e protocolos que permite que diferentes softwares se comuniquem entre si. No contexto da Apoia, refere-se principalmente às APIs de provedores de Inteligência Artificial.
* **API Própria:** API desenvolvida ou controlada pela própria instituição (no caso, relacionada ao sistema Judiciário), usada pela Apoia para proteger informações sigilosas.
* **Apoia:** Aplicação web que utiliza Inteligência Artificial Generativa para auxiliar em tarefas relacionadas a processos judiciais e administrativos, como análise de peças, revisão de textos, linguagem simples, geração de ementas, degravação e gerenciamento de prompts.
* **Assistente Virtual:** Recurso do Sistema de Chamados que, antes do envio de um chamado, busca automaticamente a solução em dúvidas frequentes e em chamados já resolvidos.
* **Banco de Prompts:** Módulo da Apoia que permite aos usuários cadastrar, compartilhar e executar prompts (comandos para IA) utilizando peças processuais ou texto fornecido.
* **Biblioteca:** Módulo da Apoia onde o usuário cadastra documentos (textos de referência, manuais e anexos) que podem ser incluídos automaticamente nos prompts para personalizar as respostas da IA.
* **Chamado:** Solicitação de suporte registrada dentro da própria Apoia (tipos: Erro, Dúvida ou Sugestão), identificada por um protocolo e acompanhada pela página "Meus chamados".
* **Chave de API:** Uma credencial única (semelhante a uma senha) fornecida por provedores de IA (como OpenAI, Anthropic, Google) que permite à Apoia acessar e utilizar seus modelos de Inteligência Artificial.
* **CNJ (Conselho Nacional de Justiça):** Órgão do Poder Judiciário brasileiro com atribuições de controle e aperfeiçoamento administrativo e processual. A Apoia foi acolhida pelo CNJ.
* **Codex/DataLake:** Sistemas do Judiciário que armazenam dados e documentos processuais. A Apoia se integra a eles para acessar as peças dos processos de forma segura.
* **Compartilhamento (de Prompt):** Funcionalidade que define a visibilidade de um prompt, podendo ser:
  * **Privado:** Visível apenas para o criador.
  * **Não Listado:** Compartilhado via link específico.
  * **Público (em análise):** Aguardando moderação para se tornar público.
  * **Público:** Visível para todos os usuários da Apoia após moderação.
  * **Padrão:** Prompts da curadoria da Apoia, apresentados a todos os usuários.
  * **Beta Teste:** Disponível apenas para usuários beta-testers.
  * **Oculto:** Reservado a prompts internos do sistema.
* **Compartilhamento (de Documento da Biblioteca):** Estados de visibilidade dos documentos: **Padrão** (curadoria da Apoia), **Público**, **Não Listado** e **Privado** (padrão).
* **Degravação:** Funcionalidade que converte gravações de áudio/vídeo (audiências, sessões) em texto, com identificação de interlocutores e minutagem, gerando também resumo, sumário executivo e itens de atenção.
* **Ementa:** Resumo conciso dos pontos principais de uma decisão judicial. A Apoia possui uma ferramenta para sua geração, em conformidade com a Resolução CNJ nº 156/2024.
* **Ferramentas (Tools):** Capacidades que a IA da Apoia pode acionar automaticamente durante uma conversa ou execução de prompt, tais como consultar metadados e peças de processos, pesquisar temas e jurisprudência, consultar a Biblioteca e fazer cálculos e operações com datas.
* **Filtros (no Banco de Prompts):** Critérios (Segmento, Instância, Natureza/Matéria, Tramitação) usados para refinar a lista de prompts exibida, facilitando a localização do prompt adequado.
* **Fonte dos Dados (para Prompt):** Define o tipo de entrada que o prompt utilizará:
  * **Peças de Processo:** O prompt utiliza conteúdo de documentos processuais.
  * **Editor de Texto:** O prompt utiliza texto fornecido pelo usuário em um editor.
  * **Refinamento de Texto:** O prompt utiliza texto fornecido pelo usuário e compara o resultado com o original.
  * **Chat:** O prompt opera em modo de conversa interativa.
* **Format (Opção Avançada de Prompt):** Campo para inserir uma rotina de formatação, utilizando a linguagem [Nunjucks](https://mozilla.github.io/nunjucks/), que processará o resultado JSON de um prompt para apresentá-lo no formato final desejado.
* **Hub da Comunidade:** Página com estatísticas coletivas de uso da Apoia (processos acelerados, prompts em alta, ranking de tribunais e autores) e acesso ao "Meu Impacto" pessoal.
* **JSON Schema (Opção Avançada de Prompt):** Permite definir o formato exato do resultado esperado de um prompt em formato JSON, garantindo que a resposta da IA siga um padrão bem definido.
* **LGPD (Lei Geral de Proteção de Dados Pessoais):** Legislação brasileira que estabelece regras sobre coleta, armazenamento, tratamento e compartilhamento de dados pessoais. Mencionada em relação ao uso de chaves de API gratuitas do Google.
* **Linguagem Simples:** Funcionalidade que converte textos jurídicos para uma redação acessível ao público em geral, em conformidade com a legislação sobre Linguagem Simples.
* **MCP (Model Context Protocol):** Protocolo padrão de comunicação que permite integrar as ferramentas e dados da Apoia a clientes externos de IA, como Claude e ChatGPT.
* **Modelo (para Criação de Prompt):** Uma variação da criação de prompts onde o usuário fornece um documento modelo (ex: uma sentença padrão) e a IA preenche seções designadas com base nas peças do processo, mantendo a estrutura e o resultado (procedência/improcedência) já definidos no modelo.
* **Modelo de IA:** O algoritmo específico de Inteligência Artificial (ex: GPT, Claude, Gemini) selecionado pelo usuário ou pelo tribunal para processar os prompts na Apoia.
* **Modo Administrativo (SEI!):** Modo de operação da Apoia voltado a processos administrativos, ativado pelo item "Modo SEI!" do menu do usuário. Disponível para tribunais com integração SEI.
* **Modo Judicial:** Modo de operação padrão da Apoia, voltado a processos judiciais.
* **Módulos da Apoia:** Funcionalidades específicas da plataforma, como Banco de Prompts, Biblioteca, Chat, Revisão de Texto, Linguagem Simples, Geração de Ementas, Degravação, Busca Semântica de Temas e Relatório de Acervo.
* **Número do Processo:** Identificador único de um processo judicial, usado na Apoia para buscar e selecionar as peças processuais relevantes.
* **OCR (Optical Character Recognition - Reconhecimento Óptico de Caracteres):** Tecnologia que converte imagens de texto (como documentos escaneados) em texto editável. O DataLake/Codex já realiza essa extração.
* **Peças Processuais:** Documentos que compõem um processo judicial (ex: petição inicial, contestação, sentença).
* **PDPJ Conecta (Plataforma Digital do Poder Judiciário Conecta):** Infraestrutura onde a Apoia foi implantada, permitindo seu uso por tribunais do Brasil.
* **Perfil de Modelo:** Categoria abstrata de modelo de IA que o prompt ou o tribunal pode solicitar — Padrão, Eficiente, Versátil ou Premium (com variações para suporte a MP3 e PDF). O tribunal associa um modelo concreto a cada perfil.
* **Power User:** Usuário incluído pelo tribunal na lista de CPFs com limites diários ampliados; esses usuários também ganham acesso ao Relatório de Acervo usando a chave do tribunal.
* **Prompt:** Uma instrução ou pergunta dada a um modelo de Inteligência Artificial para gerar uma resposta ou realizar uma tarefa.
* **Prompt de Sistema (Opção Avançada de Prompt):** Uma instrução de alto nível para a IA, definindo o contexto, persona ou regras gerais para o processamento do prompt principal.
* **Reclassificação de Peça:** Alteração do tipo de uma peça processual feita diretamente pelo usuário na lista de peças, para corrigir classificações vindas do tribunal que prejudicam a seleção automática de peças. Vale para todos os usuários do processo.
* **Refinamento de Texto:** Funcionalidade (e tipo de prompt) que reescreve um texto para maior clareza e objetividade, comparando o resultado com o texto original e destacando alterações.
* **Relatório de Acervo:** Funcionalidade que processa em lote uma lista de processos com um prompt de síntese, consolidando os resultados em um relatório único com índice e nuvem de palavras-chave.
* **Relatório de Uso de IA:** Relatório disponível a todos os usuários para consulta do próprio uso de IA (processos, quantidades e custos estimados).
* **Representante do Tribunal:** Usuário nomeado pelos moderadores da Apoia (a pedido do tribunal) para gerenciar a configuração de IA do próprio tribunal (chaves, modelos, limites e power users).
* **Rodapé (em PDF gerado):** Seção ao final dos documentos gerados pela Apoia que inclui informações importantes, como a necessidade de revisão humana, o prompt e modelo de IA utilizados, e as peças submetidas à IA.
* **Sidekick:** Versão da Apoia em painel lateral (sem barra de navegação), embutida no sistema processual (eproc/PJe) via IntelliAgent, que sugere prompts conforme o contexto da tela.
* **TRF2 (Tribunal Regional Federal da 2ª Região):** Órgão do Poder Judiciário onde o desenvolvimento da Apoia ocorre.
* **Workflow (de Prompts):** Encadeamento de prompts em que os resultados de prompts predecessores alimentam os sucessores. Pode incluir prompts opcionais, ativados sob demanda.
* **{{textos}}:** Um marcador (placeholder) usado no campo "Prompt" ao criar um novo prompt. Indica onde o conteúdo das peças processuais selecionadas (ou texto do editor) deve ser inserido para processamento pela IA. Se não especificado, o conteúdo é adicionado ao final do prompt.
