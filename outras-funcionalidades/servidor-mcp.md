# Servidor MCP

{% embed url="https://youtu.be/6uOwTVOrQgI" %}

### O que é o Servidor MCP?

O Model Context Protocol (MCP) é um protocolo padrão de comunicação que permite integrar as ferramentas e fontes de dados da Apoia diretamente a clientes externos de Inteligência Artificial, tais como o Claude (Anthropic) e o ChatGPT (OpenAI).

Através do Servidor MCP da Apoia, magistrados e servidores podem consultar as peças e metadados de processos diretamente das interfaces dessas plataformas externas de IA.

### Requisitos de Privacidade e LGPD

O uso do Servidor MCP exige atenção rigorosa às diretrizes de segurança da informação e proteção de dados pessoais:

* Zero Retenção de Dados: O cliente de IA externo selecionado deve garantir a não retenção de dados e o não aproveitamento das informações submetidas para treinamento de modelos.
* Conformidade Legal: A utilização de ferramentas externas sem garantias explícitas de privacidade viola a Lei Geral de Proteção de Dados Pessoais (LGPD) e a Resolução CNJ nº 615/2025.

### Gerando a URL de Conexão (Token)

Para conectar o Apoia a um cliente externo via MCP, é necessário gerar uma URL de autenticação pessoal:

1. Acesse o menu "MCP" na barra superior da Apoia.
2. Clique no botão "Gerar URL" para criar o link de conexão que contém o seu token de acesso individual.
3. Copie o link exibido com o botão "Copiar".

> 🔒 Segurança: A URL gerada funciona como uma credencial pessoal (senha) e nunca deve ser compartilhada com terceiros.

### Validade, Renovação e Revogação

O token embutido na URL tem a validade da sua sessão de login (até 8 horas) e **não é renovado automaticamente**. Após um novo login na Apoia, se você possuir um link MCP cadastrado, a página inicial exibirá um aviso oferecendo duas opções:

* **Renovar**: estende a validade do token **mantendo a mesma URL** — não é preciso reconfigurar nada no cliente de IA.
* **Cancelar link**: revoga o link imediatamente (a URL deixa de autenticar); exige confirmação em dois cliques.

Sem ação do usuário, o link deixa de funcionar sozinho quando o token expira. **Gerar uma nova URL em /mcp revoga a anterior** (o token antigo é invalidado na hora). Links expirados há mais de 30 dias não podem mais ser renovados — nesse caso, gere uma nova URL.

### Configuração em Clientes de IA

#### Anthropic (Claude)

1. No Claude, acesse as configurações da sua conta e vá para a seção Customize > Connectors.
2. Clique em Add custom connector.
3. Defina um nome para a conexão (ex.: `Apoia`) e cole a URL gerada na Apoia.
4. Clique em Connect e autorize o uso das ferramentas disponíveis.

#### OpenAI (ChatGPT)

1. No ChatGPT, abra o menu de configurações de plugins/conectores e selecione a opção para adicionar um novo plugin.
2. Insira o nome da integração (ex.: `Apoia`), cole a URL de conexão e selecione a opção No Auth (a autenticação é realizada diretamente pelo token contido na URL).
3. Conecte e configure as permissões da aplicação marcando a opção Allow all actions.

### Ferramentas Disponíveis via MCP

Após a conexão, o cliente de IA externo passará a ter acesso automático às ferramentas do ecossistema Apoia:

| Ferramenta | Descrição |
| --- | --- |
| `processMetadata` | Obtém os metadados e informações gerais do processo a partir do número informado (com anonimização/proteção de dados sensíveis). |
| `piecesText` | Realiza a busca e a leitura do teor das peças e documentos processuais. |
| `libraryDocument` | Obtém o conteúdo de documentos da sua Biblioteca. |
| `pangea` | Busca teses, súmulas, OJs, temas de repercussão geral e repetitivos no Pangea (STF/STJ por padrão). |
| `semanticSearch` | Busca semântica/híbrida de temas de repercussão geral do STF e recursos especiais repetitivos do STJ. |
| `leadingCaseSearch` | Busca temas de repercussão geral e repetitivos pelo número do processo paradigma. |
| `precedent` | Busca jurisprudência do tribunal (quando configurada pelo tribunal). |
| `precedentFullText` | Obtém o inteiro teor de documentos de jurisprudência. |
| `currentDate`, `dateDiff`, `addDate` | Consulta a data de hoje e realiza operações com datas. |
| `calculator` | Avalia cálculos matemáticos. |

As ferramentas de jurisprudência (`precedent` e `precedentFullText`) retornam um aviso caso o seu tribunal ainda não tenha configurado a integração de busca.
