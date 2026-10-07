# Relatório de Acervo

Esta funcionalidade permite a criação de relatórios detalhados a partir de um conjunto de processos, utilizando a inteligência artificial para sintetizar e organizar as informações em lote.

{% embed url="https://youtu.be/NycUEoGPXzA" %}

{% hint style="warning" %}
**Requisito de acesso:** relatórios de acervo consomem muitos tokens e podem gerar custos elevados. Para usá-los com a chave de API do tribunal, o seu CPF precisa estar na lista de limites ampliados (power users) configurada pelo gestor do tribunal (veja [Integração com Tribunais](../integracao-com-tribunais.md)). Caso contrário, cadastre a sua própria chave de API em "Modelo de IA".
{% endhint %}

### Passo a Passo para Gerar seu Relatório

1. Acesse a Área de Relatórios: No menu principal, selecione a opção "Relatório de Acervo". Você verá uma lista dos relatórios que já foram criados, com nome, tipo, status (Pausado/Em execução), contagens por status, total e **custo**.
2. Inicie um Novo Relatório: Clique no botão "Novo relatório" para começar.
3. Dê um Nome ao Relatório: No campo indicado, insira um nome de sua preferência para identificar o relatório que está sendo criado.
4. Selecione o Tipo de Síntese: Escolha o tipo de síntese que será utilizada para gerar o relatório. Você terá acesso às sínteses internas da Apoia e também aos seus prompts "**favoritos**" habilitados para lote.
   * Importante: Para utilizar um _prompt_ pessoal ou de um colega, é necessário que ele tenha sido previamente marcado como favorito.
5. Defina o Escopo da Análise: A opção "**Completo**" faz com que a ferramenta considere todas as peças do processo.
   * Atenção: Esta opção pode aumentar consideravelmente o custo e o tempo de processamento, mas pode ser necessária em alguns casos.
6. Insira os Processos: No campo de texto, cole os números dos processos que farão parte do relatório. A ferramenta é capaz de identificar os números dos processos mesmo que outros textos estejam misturados.
7. Crie o Relatório: Após preencher todas as informações, clique em "Criar".

### Painel de Processamento

Após a criação, você será direcionado a um painel onde poderá acompanhar o andamento do relatório. Neste painel, você verá:

* Uma **barra de progresso** e as abas de status: "**Todos**", "**Aguardando**", "**Em Progresso**", "**Prontos**" e "**Erros**".
* O **custo atual** e o **custo total estimado** (ou custo total, ao concluir), em reais quando há cotação disponível.
* A tabela de processos, com status, tentativas, duração, custo e mensagem de erro de cada item.

Você tem duas opções para processar os processos:

* **Processamento em Lote**: Clique no botão de **"Play"** para que a ferramenta processe todos os processos em sequência (o botão "**Pause**" interrompe). O play continua de onde parou, inclusive em outro dia.
* **Processamento Manual**: Clique individualmente em cada processo ("**Executar**") para processá-lo um por um. Há ainda, por linha, as ações "**Tentar novamente**" (reprocessa um item pronto ou com erro) e "**Parar**" (interrompe um item em execução).

O botão "**Reprocessar Erros**" recoloca automaticamente todos os itens com erro na fila e inicia o processamento. A lista de erros também pode ser baixada em CSV pelo botão "**Erros CSV**".

### Visualizando e Otimizando o Relatório

1. Visualize o Relatório: Clique em "**Visualizar Relatório**" (abre a versão HTML completa). O relatório inclui:
   * Nuvem de Palavras-chave: Uma representação visual dos termos mais frequentes.
   * Índice: Um índice com os tópicos gerados pela inteligência artificial.
   * Detalhes dos Processos: As informações de cada processo, organizadas de acordo com os tópicos do índice.
   * Dica: Para uma melhor visualização, utilize a função de impressão do seu navegador.
2. Funcionalidades Adicionais:
   * **Otimizar o Índice**: Caso o índice apresente informações muito próximas ou repetidas, clique no botão "Otimizar o Índice" para que a ferramenta reorganize os tópicos de uma maneira mais clara e concisa.
   * **Adicionar ou Excluir Processos**: Os botões "**Adicionar**" e "**Remover**" permitem incluir novos processos ao relatório ou excluir processos existentes, mesmo após a criação (cole os números no campo exibido e confirme).
   * **Exportação**: relatórios com saída estruturada (JSON Schema) podem ser baixados em **CSV** ou **JSON** para uso em planilhas e outras ferramentas.
   * **Excluir**: exclui o relatório e todos os seus dados (exige confirmação).
