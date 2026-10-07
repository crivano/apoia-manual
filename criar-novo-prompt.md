# Criar Novo Prompt

<figure><img src="https://github.com/user-attachments/assets/dc9bb9ef-2c2f-47cf-ada7-5b62de2a135b" alt=""><figcaption></figcaption></figure>

Para criar um novo prompt na Apoia, basta ir até o final da página de Prompts e clicar na opção "Criar Novo" > "Prompt". Um formulário com vários campos será apresentado:

* **Nome**: Nome do novo prompt. Ex: "prompt de teste". Use maiúsculas e minúsculas.
* **Autor**: Nome do autor do prompt. Sugere-se incluir a sigla do tribunal (ex: "Fulano/TRF2").
* **Descrição (opcional)**: Uma explicação curta no imperativo, ex.: "Gere um relatório do processo..." ou "Analise as peças selecionadas...". A descrição é usada nos cartões de sugestão.
* **Modo**: Judicial, Administrativo ou Ambos (disponível para beta-testers de tribunais com SEI configurado; prompts de outros modos não aparecem na listagem — veja [Modo Administrativo (SEI)](outras-funcionalidades/modo-administrativo-sei.md)).
* **Segmento**: Selecionar os segmentos para os quais o prompt faz sentido (ex: Justiça Federal, desmarcando outros). Usado para filtragem.
* **Instância**: Selecionar as instâncias relevantes. Usado para filtragem.
* **Natureza**: Selecionar as naturezas/matérias relevantes. Usado para filtragem.
* **Fonte dos Dados**: Escolher o tipo de entrada para o prompt:
  * **Peças de Processo**: O prompt utiliza conteúdo de peças processuais (padrão).
  * **Editor de Texto**: O prompt utiliza um texto fornecido pelo usuário em um editor.
  * **Refinamento de Texto**: O prompt utiliza um texto fornecido pelo usuário, e o resultado é comparado ao original.
  * **Chat**: O prompt opera em modo de conversa interativa.
* **Nome do Campo** (apenas Editor/Refinamento de Texto): rótulo exibido no editor de entrada (padrão "Texto"; por exemplo, "Voto").
* **Seleção de Peças** (apenas Peças de Processo): define quais peças enviar. Opções: peças mais relevantes (geral ou por instância), triagem de apelação ou agravo, fase de conhecimento, viabilidade de recurso extraordinário ou especial, agravo interno em viabilidade de recurso, petição inicial, petição inicial e anexos, perfil profissiográfico previdenciário (PPP), **peças de tipos específicos**, todas, decisão de suspensão ou **selecionadas pela IA** (a própria IA escolhe e obtém as peças por meio de ferramentas).
* **Tipos de Peças** (apenas na estratégia "Peças de tipos específicos"): seleciona os tipos exatos de peça que o prompt recebe (ex.: Petição Inicial, Contestação, Sentença). Uma **lista vazia significa que o prompt não recebe peças** — útil para passos de workflow que usam somente resultados anteriores.
* **Fases Processuais**: fases em que o prompt é sugerido (ex.: Despacho Inicial, Conhecimento, Sentença, Turma Recursal). Usado pelos cartões de sugestão quando a fase do processo é detectada.
* **Compartilhamento**: Definir a visibilidade do prompt:
  * **Privado**: Visível apenas para o criador.
  * **Não Listado**: Compartilhado via link "adicionar aos favoritos". Sem o link, não aparece na lista.
  * **Público**: O prompt passa a constar na aba "Prompts Não Avaliados" de todos os usuários. Requer responsabilidade: revise exaustivamente antes de disponibilizar.
* **Prompt**: O texto do prompt em si. Pode ser copiado/colado ou criado na hora. Para incluir o conteúdo das peças, usa-se \{{textos\}} ou ele é adicionado automaticamente ao final. Exemplo de prompt: "Diga o nome da parte autora...", "quais são os pedidos da inicial...".

Após preencher os campos, clique em "**Salvar**".

{% embed url="https://youtu.be/ADqJW-7q8hU" %}

Clicando em "**Exibir Opções Avançadas**", campos adicionais se tornam visíveis, destinados a usuários mais técnicos ou "profundamente versados em sistemas de IA":

* **Resumir Selecionadas**: Indicar se a resposta deve incluir resumos das peças enviadas.
* **Perfil**: perfil de modelo que o prompt requer — Padrão, Versátil, Eficiente ou Premium (com variações para MP3 e PDF). O tribunal associa modelos concretos a cada perfil; perfis premium são os mais caros e devem ser usados com parcimônia.
* **Plugins**: funcionalidades extras para relatórios em lote (Triagem, Normas, Palavras-Chave, e variantes JSON).
* **Lote**: habilita o prompt para uso no Relatório de Acervo.
* **Prompt de Sistema**: Um prompt de instrução de alto nível para a IA.
* **JSON Schema**: Permite definir o formato exato do resultado esperado em JSON, garantindo que a resposta siga um padrão bem definido.
* **Format**: Campo para inserir uma rotina de formatação que processará o resultado JSON para apresentá-lo no formato final desejado.

A seção **Workflow** permite encadear este prompt com outros:

* **Prompts Predecessores**: executados automaticamente antes deste prompt, cujos resultados alimentam este (veja [Workflows de Prompts](banco-de-prompts/workflows-de-prompts.md)). Cada predecessor pode ser marcado como **Opcional**.
* **Prompts Sucessores**: sugeridos ao usuário como próximos passos após a geração.

Essas opções avançadas são usadas para criar prompts mais complexos e sofisticados, como a geração de ementas com formatação precisa. A referência completa (incluindo o recurso auto-json com seções `FIELDS`) está na página [Como Escrever Arquivos de Prompt](repositorio-de-prompts/como-escrever-arquivos-de-prompt.md).

{% embed url="https://youtu.be/y1iphfj53RA" %}
