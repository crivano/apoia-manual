# Avaliação de Prompts

Para garantir a qualidade e a relevância dos prompts disponíveis no "Banco de Prompts", a Apoia utiliza dois indicadores principais de avaliação: a quantidade de "Favoritos" e a "Avaliação por Estrelas".

Estes sistemas ajudam os usuários a identificar os prompts mais úteis e auxiliam na moderação automática do conteúdo público, garantindo que os prompts de baixa qualidade sejam removidos da listagem principal.

{% embed url="https://youtu.be/p1z-fRIXdxw" %}

**1. Favoritos**

Os usuários podem marcar um prompt como "favorito". A listagem do "Banco de Prompts" possui ícones que indicam se o prompt foi criado pelo próprio usuário (ícone de pessoa) ou por outros (ícone de coração).

* Como favoritar: O usuário pode clicar diretamente sobre o ícone ou usar o menu do prompt e selecionar "Adicionar aos favoritos".
* Contagem: Uma coluna ao final da lista exibe o número total de usuários que favoritaram aquele prompt. Quanto maior o número, mais usuários consideram aquele prompt útil para seu trabalho.
* Prompts favoritos aparecem sempre no topo da lista e ficam disponíveis no painel lateral do sistema processual (sidekick) e no Relatório de Acervo como "Tipo de Síntese".

**2. Avaliação por Estrelas**

Além dos favoritos, os usuários podem atribuir uma nota (de 1 a 5 estrelas) para os prompts.

* Na listagem, a coluna "Avaliação" exibe a **nota média** (ex.: "4,3") quando o prompt já possui ao menos uma avaliação.
* Ao passar o mouse sobre a nota, uma janela mostra a média em destaque, o número de avaliações, a **distribuição de votos** (barras de 5 a 1 estrelas) e a sua própria avaliação, quando já houver.
* Clique sobre a nota (ou sobre a estrela apagada, para prompts sem votos) para abrir o seletor de 1 a 5 estrelas e registrar (ou alterar) a sua avaliação. A média é recalculada imediatamente.

**3. Gerenciamento Automático de Qualidade**

A avaliação por estrelas está diretamente ligada ao status de compartilhamento dos prompts. A Apoia utiliza a nota média (com suavização estatística) para filtrar automaticamente a qualidade dos prompts públicos:

* Rebaixamento Automático: Se um prompt "Público" acumular pelo menos 5 avaliações e sua nota média cair para menos de 2,5 estrelas, o sistema o rebaixará automaticamente para o status "Não Listado".
* Status "Não Listado": Um prompt "Não Listado" não aparece mais na lista geral para todos os usuários. No entanto, ele continua acessível para os usuários que já o haviam favoritado anteriormente.

Esta é uma forma de garantir que apenas os prompts de maior qualidade e utilidade sejam destacados publicamente na plataforma.

**4. Avaliação Negativa de Resultados**

Além de avaliar o prompt, o usuário pode avaliar **negativamente um resultado específico** (botão de polegar para baixo sobre o texto gerado), informando o motivo — "Factualmente Incorreto", "Estilo Insatisfatório", "Incompleto", "Excessivamente Longo" ou "Outros" — e um detalhamento opcional. Essas avaliações alimentam os painéis de qualidade mantidos pela equipe da Apoia (veja [Painéis do Moderador](administracao/paineis-do-moderador.md)) e não afetam a nota do prompt.
