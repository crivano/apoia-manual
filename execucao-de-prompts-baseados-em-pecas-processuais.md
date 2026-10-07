# Execução de Prompts Baseados em Peças Processuais

<figure><img src="https://github.com/user-attachments/assets/f43efb8f-3dd2-4421-a715-7b860d15e696" alt=""><figcaption></figcaption></figure>

Para executar um prompt deste tipo, é necessário primeiro informar o **número do processo**. Depois de informado o número do processo (e o sistema ter buscado as informações sobre ele no Codex, preenchendo filtros como instância e natureza automaticamente), basta escolher o prompt na lista e clicar sobre o nome.

Neste momento, a Apoia busca as peças do processo. A Apoia seleciona automaticamente algumas peças que considera mais relevantes para a execução do prompt, conforme a **estratégia de seleção** definida na criação do prompt (peças mais relevantes, petição inicial, tipos específicos etc.). A inteligência artificial tem limites na quantidade de texto que consegue processar, por isso nem sempre o processo inteiro é injetado.

{% embed url="https://youtu.be/fcRgnoD145M" %}

## Alteração das Peças Selecionadas

O usuário pode **alterar quais peças foram consideradas**. A linha "Peças: ..." resume a seleção (por exemplo, "Petição Inicial e Contestação" ou "Petição Inicial + 12"); clicando em "**Alterar**", ao lado dessa informação, a lista completa de peças é exibida em uma tabela com as colunas **Evento**, **Descrição**, **Rótulo** (link para o PDF da peça), **Tipo** e **Sigilo**. É possível:

* Marcar ou desmarcar peças individualmente;
* Usar o botão "**Listar Todas**" / "**Selecionadas**" para filtrar apenas as peças selecionadas;
* Filtrar a lista pelo campo "Filtrar...", paginar e alterar a quantidade de itens por página;
* Utilizar a visualização em **Árvore**, na qual as peças aparecem vinculadas aos eventos do processo; clicando no tipo da peça, o documento é carregado no painel de visualização ao lado;
* **Reclassificar o tipo da peça** diretamente pela coluna "Tipo", quando o tipo registrado pelo tribunal estiver incorreto (veja [Reclassificação de Peças Processuais](banco-de-prompts/reclassificacao-de-pecas.md)).

Após selecionar as peças desejadas, clica-se em "**Salvar Alterações e Refazer**" para que o prompt seja reexecutado com o novo conjunto de peças.

{% embed url="https://youtu.be/leqEFLtJY_o" %}

{% embed url="https://youtu.be/55BkwJfW9HI" %}

{% hint style="info" %}
Alguns prompts usam a estratégia **"Selecionadas pela IA"**: nenhuma peça é pré-selecionada e a própria IA busca e obtém os textos das peças do processo por meio de ferramentas, conforme a necessidade. Nesses casos, o editor de peças não é exibido e, se você abrir a seleção e desmarcar todas as peças manualmente, a Apoia avisará que "a IA obterá os textos do processo por meio de ferramentas".
{% endhint %}

## Workflows e Documentos da Biblioteca

Muitos prompts fazem parte de **workflows**: os resultados de prompts predecessores são executados antes e ficam disponíveis acima do resultado principal, alimentando-o com informações já levantadas (por exemplo, os pedidos da inicial extraídos por um prompt anterior). Prompts **opcionais** do fluxo aparecem como botões que podem ser ativados sob demanda. Veja a página [Workflows de Prompts](banco-de-prompts/workflows-de-prompts.md).

Abaixo da seleção de peças, a linha "Biblioteca: ..." mostra quais **documentos da sua Biblioteca** serão incluídos no prompt (por exemplo, manuais de redação e entendimentos do gabinete). Clicando em "**Alterar**", é possível incluir ou excluir documentos dessa execução — são listados os seus documentos, os favoritos e os documentos padrão da Apoia com nome correspondente ao prompt. Veja [Biblioteca](biblioteca/biblioteca.md).

## Resultado

As peças selecionadas são obtidas do DataLake/Codex, que já possui os textos devidamente extraídos (OCR). Se o usuário cadastrou uma chave de API e modelo de IA (ou usa modelos do tribunal), o modelo é acionado para produzir o resultado. Caso contrário, o conteúdo do prompt e das peças é copiado para a área de transferência.

Enquanto a geração acontece, a Apoia indica o andamento (chamadas a ferramentas, raciocínio do modelo). Ao término, um som de conclusão é emitido. Sobre o resultado, o usuário pode:

* **Copiar** o texto gerado (o botão copia tanto em HTML compatível com o e-proc quanto em Markdown; selecionar uma parte do texto e usar Ctrl+C também preserva a formatação);
* **Avaliar negativamente** (polegar para baixo), informando o motivo — por exemplo, "Factualmente Incorreto" ou "Incompleto". A avaliação alimenta os painéis de qualidade da Apoia. Após avaliado, o botão passa a permitir **Gerar novamente**;
* Escolher o **Tipo de Visualização**: "Diferença" e "Diferença Compacta" (comparações com o texto original, usadas em refinamentos), "Destacar Inclusões" (trechos incluídos pela IA destacados — usado em prompts de modelo), "Texto Editado" (resultado editável) e "Texto Original". Em prompts de modelo, o botão "**Ver Tabela de Expressões**" lista cada expressão do modelo, seu tipo, valor gerado e justificativa;
* **Ouvir** o texto (gera página adequada para leitura por áudio — disponível para beta-testers);
* Gerar um **PDF** da página.

Uma vez que o prompt foi executado e o resultado gerado, é possível conversar com o processo utilizando a opção de chat. A inteligência artificial já "leu" as peças selecionadas. Pode-se fazer perguntas (ex: "quais os pedidos da inicial?") e ter uma conversa completa, funcionando como um Chat GPT. O chat também permite anexar PDFs complementares.

{% embed url="https://youtu.be/qBPBChBgh3c" %}

A **geração de um PDF** contém o número do processo, o resultado do prompt e, se houve conversa, as perguntas e respostas do chat. Toda peça gerada pela Apoia inclui um rodapé. Este rodapé indica que o documento deve ser revisto, que a Apoia não substitui o trabalho humano, qual prompt e modelo de IA foram usados, e quais peças foram submetidas à inteligência artificial (inclusive as obtidas por ferramentas). Esta informação aparece na tela e no PDF. No rodapé de cada resposta, um indicador discreto mostra o **custo** da geração; passando o mouse, são exibidos os tokens consumidos e a cotação do dólar usada.

{% embed url="https://youtu.be/w2yGiZpScck" %}
