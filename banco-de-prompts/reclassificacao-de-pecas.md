# Reclassificação de Peças Processuais

{% hint style="info" %}
**Vídeo explicativo:** espaço reservado — um vídeo demonstrativo desta funcionalidade será disponibilizado aqui em breve.
{% endhint %}

A seleção automática de peças da Apoia baseia-se no **tipo** de cada peça, que vem do próprio tribunal. Alguns sistemas classificam peças de forma incorreta ou genérica (por exemplo, uma contestação cadastrada como "Petição"), o que atrapalha a seleção automática e os prompts que dependem de tipos específicos.

Para resolver isso, qualquer usuário autenticado pode **reclassificar o tipo de uma peça diretamente na lista de peças**. A reclassificação fica valendo para todos os usuários que acessarem o processo depois — é uma correção colaborativa dos metadados.

## Passo a Passo

1. Ao executar um prompt baseado em peças, clique em "**Alterar**" na linha "Peças: ..." para abrir o editor de peças.
2. Na coluna "**Tipo**" da tabela, cada linha tem um **ícone azul de caneta** ao lado do tipo atual.
3. Clique no ícone para abrir a janela "**Reclassificar Peça**", que mostra os dados básicos da peça (Evento, Descrição, Rótulo e Tipo).
4. Selecione o novo tipo na lista alfabética "**Escolha o novo tipo:**". A alteração é aplicada imediatamente e a janela se fecha.
5. Confirme a nova seleção de peças com "**Salvar Alterações e Refazer**" para reexecutar o prompt.

## Restaurar o Tipo Original

Peças já reclassificadas aparecem com o tipo em **negrito** (com a dica "Tipo alterado pelo usuário" indicando o tipo original). Na janela de reclassificação, a linha "**Tipo Original**" exibe o tipo registrado pelo tribunal e um **ícone de seta de volta (Restaurar)** que desfaz a alteração, retornando ao tipo original.

## Efeitos da Reclassificação

O novo tipo é usado pela Apoia em todos os pontos que dependem dele:

* **Seleção automática de peças** (estratégias e prompts filtrados por tipo);
* **Casamento de padrões** que identificam fases do processo;
* **Pré-processamento de peças** — por exemplo, uma peça reclassificada como CNIS passa a ser pré-processada pela Fábrica de Cálculos (dados estruturados em JSON);
* Prompts com "Peças de tipos específicos" passam a receber (ou deixar de receber) a peça.

A reclassificação é gravada no servidor: ela permanece válida nas suas próximas visitas e para os demais usuários do processo, até que alguém a restaure ou a altere novamente.
