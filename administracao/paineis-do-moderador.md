# Painéis do Moderador

{% hint style="info" %}
**Vídeo explicativo:** espaço reservado — um vídeo demonstrativo desta funcionalidade será disponibilizado aqui em breve.
{% endhint %}

Os moderadores da Apoia dispõem de um conjunto de painéis administrativos, acessíveis pelo menu do usuário. Esta página resume cada um deles.

## Chamados

O painel **"Chamados (moderação)"** lista todos os chamados abertos pelos usuários (veja [Sistema de Chamados](../outras-funcionalidades/sistema-de-chamados.md)).

* **Cartões de estatística**: Abertos, Em análise, Resolvidos, Novos (7 dias), Tempo médio de atendimento e Top tribunais.
* **Filtros** por status e tabela com data, protocolo, solicitante, tribunal, tipo, status e mensagem.
* O **detalhe do chamado** reúne o contexto completo (página em que o erro ocorreu, navegador, stack do erro e captura de tela anexada) e a caixa de resposta ao solicitante.
* A seção **Assistência IA** mostra a solução de nível 1 já oferecida ao usuário, um resumo do chamado gerado por IA e chamados similares usados como contexto. Os botões "**Gerar resposta com IA**" (pré-preenche o rascunho de resposta) e "**Usar solução nível 1 como base**" aceleram o atendimento; o rascunho deve ser revisado antes de salvar.
* A resposta fica visível ao solicitante em "Meus chamados".

Quando há chamados aguardando, o menu do moderador exibe o indicador "**Chamados Abertos**".

## Erros do Servidor

O painel **"Erros do Servidor"** agrega e agrupa os erros de servidor da aplicação (erros de rotas e falhas de geração de IA), substituindo ferramentas externas de monitoramento.

* **Gráfico diário empilhado** com os 60 dias mais recentes: as 5 categorias de erro mais frequentes aparecem como séries coloridas, mais um bloco "Outros". Clicar em uma barra (ou na legenda em botões) abre as ocorrências daquele erro.
* **Filtro por status**: Aberto, Reconhecido, Resolvido e Desligado (o padrão exibe Aberto + Reconhecido). O status pode ser alterado diretamente na linha da tabela (por exemplo, marcar como "Reconhecido" quando o time assume a correção, ou "Desligado" para remover do radar).
* **Tabela de grupos de erro**: cada linha mostra a mensagem, o código HTTP, a primeira e a última ocorrência, a contagem e um mini-histograma dos últimos 30 dias.
* **Ocorrências**: cada grupo pode ser expandido, listando data, usuário, tribunal, URL e a stack completa de cada ocorrência (janela de retenção de 60 dias).

## Avaliações de IA

O painel **"Avaliações de IA"** consolida as **avaliações negativas** (polegar para baixo) registradas pelos usuários sobre os textos gerados.

* **Filtros** por período, modelo e prompt.
* Cartões-resumo: total de avaliações negativas, gerações no período, taxa de reprovação e motivo mais frequente.
* Gráficos de avaliações por motivo (por exemplo, "Factualmente Incorreto", "Incompleto") e por dia (comparando gerações x avaliações).
* Tabelas **por modelo** e **por prompt**, e a lista das **últimas avaliações** com o detalhamento informado pelo usuário.

Esse painel é a principal fonte para identificar prompts que precisam de revisão (veja [Avaliação de Prompts](../avaliacao-de-prompts.md)).

## Aviso da Página Inicial

O painel **"Aviso da Página Inicial"** gerencia a mensagem global exibida na home de todos os usuários corporativos, entre o subtítulo e a lista de ferramentas (comunicados de manutenção, novidades etc.).

* A mensagem aceita **markdown** (negrito, itálico, links, listas, títulos).
* A **variante do alerta** define a cor (Primária, Sucesso, Atenção, Informação etc.).
* Há **pré-visualização** fiel ao renderizado na home e um botão para remover o aviso.

Cada tribunal também pode publicar o seu próprio comunicado, independente do aviso global, na [Configuração do Tribunal](../integracao-com-tribunais.md#comunicado-aos-usuarios).

## Edição de Prompts

O painel **"Edição de Prompts"** permite ao moderador corrigir metadados de **qualquer prompt** (não apenas os próprios): informe o base\_id do prompt, revise as versões listadas e edite campos como o nome e o slug. A alteração vale para todas as versões do prompt. Moderadores também podem editar prompts diretamente pela página do prompt, na condição de moderador.

## Transferência de Prompts

O painel **"Transferência de Prompts"** transfere a propriedade de um prompt para outro usuário — usado, por exemplo, quando um assessor troca de gabinete e os prompts institucionais precisam ficar com o novo responsável. Basta informar o base\_id do prompt, buscar o novo dono por nome ou CPF e confirmar; todas as versões do prompt são transferidas.

## Testes de Modelos

O painel **"Testes de Modelos"** executa testes técnicos sobre o modelo de IA configurado, úteis ao configurar um tribunal ou validar um novo modelo:

* **Limite de tokens**: envia um texto de tamanho configurável e relata tokens de entrada/saída, custo, duração e o texto devolvido.
* **Cache na chamada de ferramentas**: compara o uso de tokens declarando o conjunto completo de ferramentas, o mínimo ou nenhum, verificando se o provedor está aproveitando cache de prompt.
* **Chat com e sem ferramentas**: conversa real com o modelo, medindo o uso por resposta.

{% hint style="warning" %}
As chamadas de teste geram registros de uso e consomem a cota diária de IA normalmente.
{% endhint %}

## Moderação de Conteúdo Público

Além dos painéis, a moderação de conteúdo é feita nos próprios lugares onde o conteúdo aparece:

* **Prompts**: na página de informações de um prompt, os moderadores veem os botões "Tornar Padrão", "Tornar Público", "Tornar Não Listado" e "Tornar Privado".
* **Biblioteca**: no menu de cada documento, os moderadores veem "Definir como Padrão", "Tornar Público", "Tornar Não Listado" e "Tornar Privado".

Prompts e documentos marcados como "Padrão" formam a curadoria oficial apresentada a todos os usuários.
