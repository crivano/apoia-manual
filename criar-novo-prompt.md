# Criar Novo Prompt

<figure><img src="https://github.com/user-attachments/assets/dc9bb9ef-2c2f-47cf-ada7-5b62de2a135b" alt=""><figcaption></figcaption></figure>

Para criar um novo prompt na Apoia, basta ir até o final da página e clicar na opção "Criar prompt". Um formulário com vários campos será apresentado:

* **Nome**: Nome do novo prompt. Ex: "prompt de teste".
* **Autor**: Nome do autor do prompt. Sugere-se incluir a sigla do tribunal (ex: "Fulano/TRF2").
* **Segmento**: Selecionar os segmentos para os quais o prompt faz sentido (ex: Justiça Federal, desmarcando outros). Usado para filtragem.
* **Instância**: Selecionar as instâncias relevantes. Usado para filtragem.
* **Natureza**: Selecionar as naturezas/matérias relevantes. Usado para filtragem.
* **Fonte dos Dados**: Escolher o tipo de entrada para o prompt:
  * **Peças de Processo**: O prompt utiliza conteúdo de peças processuais (padrão).
  * **Editor de Texto**: O prompt utiliza um texto fornecido pelo usuário em um editor.
  * **Refinamento de Texto**: O prompt utiliza um texto fornecido pelo usuário, e o resultado é comparado ao original.
* **Seleção de Peças**: Se o "Alvo" for "Peças de Processo", define quais peças enviar: petição inicial, anexos, peças de tipos específicos (selecionar o tipo), ou peças mais relevantes (Apoia seleciona).
* **Resumir Selecionadas**: Indicar se a resposta deve incluir resumos das peças enviadas.
* **Compartilhamento**: Definir a visibilidade do prompt:
  * **Privado**: Visível apenas para o criador.
  * **Não Listado**: Compartilhado via link "adicionar aos favoritos". Sem o link, não aparece na lista.
  * **Público (em análise)**: O usuário está pedindo ao moderador para analisar o prompt e disponibilizá-lo como público.
  * **Público**: Requer análise e moderação da Apoia.
  * **Padrão**: Prompts consagrados que são apresentados para todos os usuários.
* **Padrão**: Opção apenas para administradores.
* **Prompt**: O texto do prompt em si. Pode ser copiado/colado ou criado na hora. Para incluir o conteúdo das peças, usa-se \{{textos\}} ou ele é adicionado automaticamente ao final. Exemplo de prompt: "Diga o nome da parte autora...", "quais são os pedidos da inicial...".

Após preencher os campos, clique em "**Salvar**".

{% embed url="https://youtu.be/ADqJW-7q8hU" %}

Clicando em "**Exibir Opções Avançadas**", campos adicionais se tornam visíveis, destinados a usuários mais técnicos ou "profundamente versados em sistemas de IA":

* **Prompt de Sistema**: Um prompt de instrução de alto nível para a IA.
* **JSON Schema**: Permite definir o formato exato do resultado esperado em JSON, garantindo que a resposta siga um padrão bem definido.
* **Format**: Campo para inserir uma rotina de formatação que processará o resultado JSON para apresentá-lo no formato final desejado.

Essas opções avançadas são usadas para criar prompts mais complexos e sofisticados, como a geração de ementas com formatação precisa.

{% embed url="https://youtu.be/y1iphfj53RA" %}
