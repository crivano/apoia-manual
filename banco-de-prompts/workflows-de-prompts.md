# Workflows de Prompts

{% hint style="info" %}
**Vídeo explicativo:** espaço reservado — um vídeo demonstrativo desta funcionalidade será disponibilizado aqui em breve.
{% endhint %}

Muitas tarefas judiciais não se resolvem com um único prompt: primeiro é preciso extrair os pedidos e as fundamentações, depois decidir cada pedido e, só então, redigir a minuta. Para isso, a Apoia suporta **workflows**: encadeamentos de prompts nos quais o resultado de um prompt (**predecessor**) alimenta o prompt seguinte.

## Como Funciona na Prática

Ao executar um prompt que faz parte de um workflow, a Apoia executa automaticamente, em ordem, todos os prompts predecessores obrigatórios. Os resultados aparecem empilhados na página, um acima do outro, e o texto gerado por cada um é entregue ao prompt seguinte como "resultados de prompts anteriores". Assim, quando você chega ao prompt de minuta de sentença, a IA já tem à disposição os pedidos extraídos e as fundamentações levantadas pelos passos anteriores — sem retrabalho e sem que você precise copiar e colar nada.

Cada resultado do fluxo tem o mesmo comportamento de um resultado isolado: pode ser copiado, avaliado, gerado novamente e visualizado em diferentes modos. Se um resultado intermediário ficar ruim, você pode gerá-lo novamente antes de prosseguir.

## Prompts Opcionais

Nem todo passo do fluxo é obrigatório. Prompts marcados como **opcionais** pelo autor do workflow aparecem como **botões** acima dos resultados. Clicar no botão ativa aquele passo para a execução corrente — por exemplo, uma "Pesquisa de Temas" que só faz sentido em processos com tese repetitiva. Se você não ativar, o passo é simplesmente ignorado e o fluxo segue sem ele.

## Formulário de Pedidos (Decisão Humana)

Nos workflows de minuta de sentença e de voto, a Apoia insere um passo especial: após a extração dos pedidos e fundamentações, é exibido um **formulário de pedidos** no qual o próprio magistrado indica, para cada pedido, se é procedente ou improcedente (e fundamenta a decisão). Os prompts seguintes ficam aguardando até que o formulário seja revisado e confirmado.

Isso é uma exigência da Resolução CNJ nº 615/2025: a IA não decide o mérito — a minuta só é redigida após a diretriz humana. Veja [Segurança da Informação](../seguranca-da-informacao.md).

## Como Criar um Workflow

Na criação ou edição de um prompt (veja [Criar Novo Prompt](../criar-novo-prompt.md)), a seção **Workflow** permite definir:

* **Prompts Predecessores**: executados antes deste prompt. Cada predecessor pode ser marcado como **Opcional** e pode ter uma **condição** para ser incluído.
* **Prompts Sucessores**: sugeridos ao usuário como próximos passos ao final da geração.

Os prompts são referenciados por nome na interface; nos arquivos do repositório de prompts, são referenciados por `path` (slug) ou `uuid` (veja [Como Escrever Arquivos de Prompt](../repositorio-de-prompts/como-escrever-arquivos-de-prompt.md)).

{% hint style="info" %}
Prompts com a estratégia "Peças de tipos específicos" e lista de tipos vazia não recebem peças do processo: são úteis justamente como passos de workflow que trabalham somente sobre os resultados dos predecessores (por exemplo, uma busca de jurisprudência sobre os pedidos já extraídos).
{% endhint %}
