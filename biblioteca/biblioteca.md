---
description: Personalizando a Apoia com Documentos
---

# Biblioteca

A funcionalidade "Biblioteca" da Apoia é um recurso poderoso que permite ao usuário cadastrar diversos documentos para personalizar e otimizar a geração de textos, como minutas, decisões e despachos. Com a Biblioteca, é possível incluir informações específicas, como estilos de escrita, entendimentos jurídicos e jurisprudências, que serão automaticamente consideradas pela Apoia ao processar seus prompts.

{% embed url="https://youtu.be/Xn_5VA60sCg" %}

**Como Funciona**

A Biblioteca permite que você crie e gerencie uma coleção de documentos que podem ser incluídos nos prompts de forma automática ou manual. Cada documento na sua Biblioteca pode ser configurado com um tipo de inclusão específico, garantindo que a informação certa seja usada no contexto adequado.

A página da Biblioteca é dividida em duas abas:

* **Principais**: documentos da curadoria da Apoia (Padrão) e os seus próprios documentos.
* **Documentos Não Avaliados**: documentos compartilhados publicamente por outros usuários, sem validação prévia — favorite os que considerar úteis e confiáveis.

A tabela exibe as colunas Título, **Autor**, **Tipo** (Texto, Manual ou Arquivo), **Inclusão**, **Contexto**, **Compart.** e **Favoritos** (quantidade). O botão "**Criar Documento**" abre o formulário de cadastro.

Para criar um novo documento, basta acessar a seção "Biblioteca", clicar em "Criar Documento" e preencher os seguintes campos:

* Título: Um título para identificar o seu documento (ex: "Estilo Literário do Gabinete", "Entendimento sobre Aposentadoria por Invalidez").
* Autor: Nome do autor (sugerimos incluir a sigla do órgão, ex.: "Fulano/TRF2").
* Tipo: **Texto** (conteúdo digitado ou colado no editor) ou **Manual** (gerado por IA a partir de exemplos — veja [Criar Manual com IA](criar-manual-com-ia.md)). Itens do tipo **Arquivo** são criados pelo envio de PDFs como anexos.
* Tipo de Manual (somente Manuais): Primeiro Despacho, Sentença ou Voto.
* Conteúdo: O texto que será inserido no prompt (ex: "Utilizar uma linguagem mais formal e com jargões em latim.", "Conforme o entendimento pacificado do STJ...").
* Tipo de Inclusão: A regra que define quando o documento será incluído no prompt.
* Compartilhamento: Privado (padrão), Não Listado, Público ou Padrão (apenas moderadores).

**Anexos**

Documentos do tipo Texto salvos podem receber **anexos em PDF** (até 10 anexos de 1MB cada). Os anexos são enviados para a área de "Anexos" do documento, pelo mecanismo de arrastar-e-soltar, e ficam disponíveis para consulta e inclusão como contexto pela IA.

**Tipos de Inclusão**

Existem três regras de inclusão automática que você pode configurar para cada documento da sua Biblioteca:

* Sempre: O documento será incluído em todos os prompts, independentemente do contexto. É ideal para instruções gerais de estilo e formatação que você deseja aplicar a todos os seus textos.
* Contextual: O documento será incluído apenas quando o prompt estiver relacionado a um contexto específico que você definir. Por exemplo, você pode criar um documento com entendimentos sobre "aposentadoria" e configurar a inclusão para ocorrer apenas em processos que tratem desse tema. Para isso, basta descrever o contexto no campo que aparecerá ao selecionar esta opção.
* Nunca: O documento não será incluído automaticamente em nenhum prompt. Esta opção é útil para armazenar modelos de texto ou informações que você deseja consultar e incluir manualmente quando necessário.

Além dessas regras, há um casamento automático **pelo nome do prompt**: se o título do documento (próprio ou favoritado) corresponder ao nome do prompt, ele é incluído automaticamente naquele prompt. Documentos **Padrão** da curadoria da Apoia (ex.: manuais de redação de sentença e de voto) entram exclusivamente por esse casamento de nome — eles nunca são incluídos em todos os prompts. Quando há mais de um documento casante, a prioridade é: próprio > favoritado > Padrão.

**Integração com o Banco de Prompts e Chat**

A grande vantagem da Biblioteca é a sua integração com as demais funcionalidades da Apoia, como o Banco de Prompts e o Chat.

* No Banco de Prompts: Ao executar um prompt, a Apoia verificará automaticamente sua Biblioteca e incluirá os documentos relevantes, de acordo com as regras de inclusão que você definiu. A linha "Biblioteca: ..." (logo abaixo da seleção de peças) permite clicar em "Alterar" e escolher manualmente quais documentos incluir naquela execução. São listados apenas os seus documentos, os seus favoritos e os documentos padrão da Apoia com nome correspondente ao prompt — a coluna "**Origem**" diferencia Meu (documento próprio), Favorito (de outro usuário, favoritado por você) e Padrão (curadoria da Apoia). Documentos de terceiros que você ainda não favoritou podem ser incluídos ao serem favoritados.
* No Chat: Da mesma forma, ao interagir com o Chat para resumir um processo ou obter informações, a Apoia irá consultar sua Biblioteca e utilizar os documentos contextuais pertinentes para enriquecer e personalizar as respostas. A IA também pode consultar o conteúdo dos documentos e anexos por meio da ferramenta dedicada da Biblioteca.

**Versões e Favoritos**

Ao editar um documento, a Apoia cria uma **nova versão** dele (preservando as versões anteriores), e os anexos e exemplos são movidos para a nova versão. O compartilhamento é propriedade do documento e vale para todas as versões. Documentos de outros usuários que você favoritou não podem ser editados por você — apenas removidos da sua Biblioteca.

Com a Biblioteca, a Apoia se torna uma ferramenta ainda mais adaptada às suas necessidades, permitindo um nível de personalização que agiliza o seu trabalho e garante que os textos gerados estejam sempre alinhados com seus entendimentos e estilo de escrita.
