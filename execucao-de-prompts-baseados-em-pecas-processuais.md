# Execução de Prompts Baseados em Peças Processuais

<figure><img src="https://github.com/user-attachments/assets/f43efb8f-3dd2-4421-a715-7b860d15e696" alt=""><figcaption></figcaption></figure>

Para executar um prompt deste tipo, é necessário primeiro informar o **número do processo**. Depois de informado o número do processo (e o sistema ter buscado as informações sobre ele no Codex, preenchendo filtros como instância e natureza automaticamente), basta escolher o prompt na lista e clicar sobre o nome.

Neste momento, a Apoia busca as peças do processo. A Apoia seleciona automaticamente algumas peças que considera mais relevantes para a execução do prompt, conforme parâmetros definidos na criação do prompt. A inteligência artificial tem limites na quantidade de texto que consegue processar, por isso nem sempre o processo inteiro é injetado.

{% embed url="https://youtu.be/fcRgnoD145M" %}

O usuário pode **alterar quais peças foram consideradas**. Clicando em "Alterar", ao lado da informação das peças selecionadas, a lista completa de peças é exibida. É possível filtrar a lista para ver apenas as peças selecionadas. O usuário pode marcar ou desmarcar peças, usar botões para marcar/desmarcar tudo, paginar a lista, ou alterar a quantidade de itens por página. Após selecionar as peças desejadas, clica-se em "**Salvar Alterações e Refazer**" para que o prompt seja reexecutado com o novo conjunto de peças.

{% embed url="https://youtu.be/leqEFLtJY_o" %}

A seleção de peças também pode ser realizada a partir de uma visualização em forma de Árvore, na qual as peças aparecem vinculadas as eventos e clicando no tipo da peça é automaticamente carregada a visualização.

{% embed url="https://youtu.be/55BkwJfW9HI" %}

As peças selecionadas são obtidas do DataLake/Codex, que já possui os textos devidamente extraídos (OCR). Se o usuário cadastrou uma chave de API e modelo de IA, este modelo é acionado para produzir o resultado. Caso contrário, o conteúdo do prompt e das peças é copiado para a área de transferência.

Uma vez que o prompt foi executado e o resultado gerado, é possível conversar com o processo utilizando a opção de chat. A inteligência artificial já "leu" as peças selecionadas. Pode-se fazer perguntas (ex: "quais os pedidos da inicial?") e ter uma conversa completa, funcionando como um Chat GPT.

{% embed url="https://youtu.be/qBPBChBgh3c" %}

Outra operação disponível a partir da página de execução do prompt é a **geração de um PDF**. O PDF gerado contém o número do processo, o resultado do prompt e, se houve conversa, as perguntas e respostas do chat. Toda peça gerada pela Apoia inclui um rodapé. Este rodapé indica que o documento deve ser revisto, que a Apoia não substitui o trabalho humano, qual prompt e modelo de IA foram usados, e quais peças foram submetidas à inteligência artificial. Esta informação aparece na tela e no PDF.

{% embed url="https://youtu.be/w2yGiZpScck" %}
