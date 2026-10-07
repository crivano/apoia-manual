# Listagem de Prompts

A página de Prompts apresenta a lista de prompts disponíveis e permite que o usuário selecione o que deseja utilizar.

<figure><img src="https://github.com/user-attachments/assets/54549ac3-d58b-40b8-88f7-627566bdc66f" alt=""><figcaption></figcaption></figure>

Antes do nome de cada prompt, há um ícone que indica se ele foi criado pelo próprio usuário (bonequinho) ou por outro usuário (coração). Quando um prompt é marcado como favorito, o ícone é preenchido de azul. Prompts marcados como favoritos aparecem sempre no topo da lista. As demais colunas da tabela são: **Prompt**, **Autor**, **Segmento**, **Instância**, **Natureza**, **Compart.**, **Avaliação** (nota média por estrelas) e **Favoritos** (quantidade de usuários que favoritaram o prompt). Veja detalhes em [Avaliação de Prompts](avaliacao-de-prompts.md).

Existem **duas abas** de listagem:

* **Principais**: prompts da curadoria da Apoia (Padrão) e os seus próprios prompts.
* **Prompts Não Avaliados**: prompts compartilhados publicamente por outros usuários. Embora isso permita reusar prompts da comunidade, a quantidade pode ser grande e a qualidade pode variar — esses prompts não passam por nenhum tipo de validação. Sugere-se usar com cuidado.

Existem **filtros** que podem ser aplicados na listagem de prompts (todos ficam destacados em amarelo quando ativos):

* Segmento (ex: Justiça Federal).
* Instância (primeira, segunda, terceira).
* Natureza/Matéria (cível, criminal, trabalhista, etc.).
* Tramitação e **Número do Processo**: ao informar um número de processo válido (20 dígitos), o sistema automaticamente seleciona os filtros que correspondem às características desse processo. Se o número for encontrado em mais de uma tramitação (instância), uma caixa de seleção "Tramitação" aparecerá para que o usuário escolha com qual tramitação deseja trabalhar, exibindo ao lado a fase processual detectada (ex: "(conhecimento)"). A última tramitação é pré-selecionada por padrão.
* Filtro por texto livre, que refina a tabela pelos nomes dos prompts. Se após o filtro restar exatamente um prompt visível, pressionar **Enter** no campo de filtro executa o prompt diretamente.

Quando um número de processo é informado e a fase processual é detectada, a Apoia também apresenta **cartões de sugestão** com até três prompts recomendados para a fase atual do processo (por exemplo, prompts de sentença quando o processo está concluso para sentença).

Os prompts podem ainda ser organizados em **grupos** (ex: "Admissibilidade de Recursos"), exibidos como conjuntos de cartões dedicados, acessíveis por link direto.

Há também uma opção para visualizar prompts que foram compartilhados publicamente por outros usuários. Embora isso permita reusar prompts da comunidade, a quantidade pode ser grande e a qualidade pode variar. Sugere-se usar esses prompts com cuidado.

{% embed url="https://youtu.be/B3TFuSnbLqI" %}

No rodapé da página, o botão **"Criar Novo"** oferece três opções:

* **Prompt**: cria um prompt comum (veja [Criar Novo Prompt](criar-novo-prompt.md)).
* **Prompt a partir de um modelo pré-existente**: converte um documento modelo seu (ex.: sentença padrão) nas marcações da Apoia com auxílio da IA (veja [Criar Prompt a Partir de um Modelo](criar-prompt-a-partir-de-um-modelo.md)).
* **Prompt a partir de um modelo no padrão da Apoia**: cria um prompt de modelo digitando diretamente as marcações `{}`, `{{}}` e `{{{}}}`.

Além de clicar diretamente no nome do prompt para executá-lo, clicando ao lado do nome do prompt, um menu é apresentado com várias opções:

* **Executar**: Equivalente a clicar no nome do prompt.
* **Copiar prompt**: Copia o conteúdo do prompt para a área de trabalho, sem incluir o conteúdo das peças. Disponível apenas para prompts próprios.
* **Copiar link para adicionar aos favoritos**: Copia um link para a área de trabalho que, ao ser clicado por outro usuário, adiciona o prompt aos favoritos dele. Isso é útil para compartilhar prompts "Não Listados". Ao remover o prompt dos favoritos, ele deixará de figurar na lista.
* **Editar**: Permite modificar os parâmetros do prompt. Disponível apenas para o criador (e moderadores).
* **Fazer uma cópia**: Cria uma cópia do prompt, útil para criar variações de prompts de outras pessoas. Os dados do original são copiados, permitindo alteração antes de salvar a nova versão. O sistema adiciona um indicador como "(1)" no nome para evitar duplicidade.
* **Informações sobre o prompt**: Abre uma página apenas para visualização das informações de criação do prompt (configuração, nome, workflow, etc.). Não permite edição.
* **Adicionar aos favoritos**: Marca o prompt como favorito, fazendo com que o ícone fique azul.
* **Remover dos favoritos**: Desmarca o prompt como favorito.
* **Remover**: Exclui o prompt, tornando-o inacessível. Disponível apenas para o criador.

{% embed url="https://youtu.be/QsSL2otzcOo" %}
