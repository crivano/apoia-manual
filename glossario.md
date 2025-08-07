# Glossário

* **API (Interface de Programação de Aplicativos):** Um conjunto de regras e protocolos que permite que diferentes softwares se comuniquem entre si. No contexto da Apoia, refere-se principalmente às APIs de provedores de Inteligência Artificial.
* **API Própria:** API desenvolvida ou controlada pela própria instituição (no caso, relacionada ao sistema Judiciário), usada pela Apoia para proteger informações sigilosas.
* **Apoia:** Aplicação web que utiliza Inteligência Artificial Generativa para auxiliar em tarefas relacionadas a processos judiciais, como síntese processual, revisão de textos, geração de ementas e gerenciamento de prompts.
* **Banco de Prompts:** Módulo da Apoia que permite aos usuários cadastrar, compartilhar e executar prompts (comandos para IA) utilizando peças processuais ou texto fornecido.
* **Chave de API:** Uma credencial única (semelhante a uma senha) fornecida por provedores de IA (como OpenAI, Anthropic, Google) que permite à Apoia acessar e utilizar seus modelos de Inteligência Artificial.
* **CNJ (Conselho Nacional de Justiça):** Órgão do Poder Judiciário brasileiro com atribuições de controle e aperfeiçoamento administrativo e processual. A Apoia foi acolhida pelo CNJ.
* **Codex/DataLake:** Sistemas do Judiciário que armazenam dados e documentos processuais. A Apoia se integra a eles para acessar as peças dos processos de forma segura.
* **Compartilhamento (de Prompt):** Funcionalidade que define a visibilidade de um prompt, podendo ser:
  * **Privado:** Visível apenas para o criador.
  * **Não Listado:** Compartilhado via link específico.
  * **Público (em análise):** Aguardando moderação para se tornar público.
  * **Público:** Visível para todos os usuários da Apoia após moderação.
  * **Padrão:** Prompts consagrados, apresentados a todos os usuários.
* **Ementa:** Resumo conciso dos pontos principais de uma decisão judicial. A Apoia possui uma ferramenta para sua geração.
* **Filtros (no Banco de Prompts):** Critérios (Segmento, Instância, Natureza/Matéria) usados para refinar a lista de prompts exibidos, facilitando a localização do prompt adequado.
* **Fonte dos Dados (para Prompt):** Define o tipo de entrada que o prompt utilizará:
  * **Peças de Processo:** O prompt utiliza conteúdo de documentos processuais.
  * **Editor de Texto:** O prompt utiliza texto fornecido pelo usuário em um editor.
  * **Refinamento de Texto:** O prompt utiliza texto fornecido pelo usuário e compara o resultado com o original.
* **Format (Opção Avançada de Prompt):** Campo para inserir uma rotina de formatação, utilizando a linguagem [Nunjucks](https://mozilla.github.io/nunjucks/), que processará o resultado JSON de um prompt para apresentá-lo no formato final desejado.
* **Geração de Ementas:** Funcionalidade da Apoia que cria ementas a partir de um texto-base (como um voto), seguindo padrões de formatação.
* **Inteligência Artificial Generativa (IA Generativa):** Tipo de inteligência artificial capaz de criar novo conteúdo, como texto, imagens, etc., com base nos dados com os quais foi treinada. É a tecnologia central da Apoia.
* **JSON Schema (Opção Avançada de Prompt):** Permite definir o formato exato do resultado esperado de um prompt em formato JSON, garantindo que a resposta da IA siga um padrão bem definido.
* **LGPD (Lei Geral de Proteção de Dados Pessoais):** Legislação brasileira que estabelece regras sobre coleta, armazenamento, tratamento e compartilhamento de dados pessoais. Mencionada em relação ao uso de chaves de API gratuitas do Google.
* **Modelo (para Criação de Prompt):** Uma variação da criação de prompts onde o usuário fornece um documento modelo (ex: uma sentença padrão) e a IA preenche seções designadas com base nas peças do processo, mantendo a estrutura e o resultado (procedência/improcedência) já definidos no modelo.
* **Modelo de IA:** O algoritmo específico de Inteligência Artificial (ex: GPT-4o-mini, Claude, Gemini) selecionado pelo usuário para processar os prompts na Apoia.
* **Módulos da Apoia:** Funcionalidades específicas da plataforma, como Banco de Prompts, Síntese Processual, Revisão de Texto e Geração de Ementas.
* **Número do Processo:** Identificador único de um processo judicial, usado na Apoia para buscar e selecionar as peças processuais relevantes.
* **OCR (Optical Character Recognition - Reconhecimento Óptico de Caracteres):** Tecnologia que converte imagens de texto (como documentos escaneados) em texto editável. O DataLake/Codex já realiza essa extração.
* **Peças Processuais:** Documentos que compõem um processo judicial (ex: petição inicial, contestação, sentença).
* **PDPJ Conecta (Plataforma Digital do Poder Judiciário Conecta):** Infraestrutura onde a Apoia foi implantada, permitindo seu uso por tribunais do Brasil.
* **Prompt:** Uma instrução ou pergunta dada a um modelo de Inteligência Artificial para gerar uma resposta ou realizar uma tarefa.
* **Prompt de Sistema (Opção Avançada de Prompt):** Uma instrução de alto nível para a IA, definindo o contexto, persona ou regras gerais para o processamento do prompt principal.
* **Refinamento de Texto:** Funcionalidade (e tipo de prompt) que reescreve um texto para maior clareza e objetividade, comparando o resultado com o texto original e destacando alterações.
* **Rodapé (em PDF gerado):** Seção ao final dos documentos gerados pela Apoia que inclui informações importantes, como a necessidade de revisão humana, o prompt e modelo de IA utilizados, e as peças submetidas à IA.
* **Síntese Processual:** Módulo da Apoia que, a partir do número do processo, executa automaticamente prompts internos para gerar resumos e análises das peças processuais.
* **TRF2 (Tribunal Regional Federal da 2ª Região):** Órgão do Poder Judiciário onde o desenvolvimento da Apoia ocorre.
* **\{{textos\}}:** Um marcador (placeholder) usado no campo "Prompt" ao criar um novo prompt. Indica onde o conteúdo das peças processuais selecionadas (ou texto do editor) deve ser inserido para processamento pela IA. Se não especificado, o conteúdo é adicionado ao final do prompt.
