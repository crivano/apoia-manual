# Integração com Tribunais

Além do próprio usuário poder fornecer uma chave de API para uso pela Apoia, cada tribunal tem a possibilidade de registrar uma ou mais chaves de API que ficarão automaticamente disponíveis para todos os usuários provenientes do tribunal em questão.

Atualmente, nesta modalidade, a Apoia suporta chaves de API dos seguintes provedores:

* Google Gemini
* Anthropic
* OpenAI
* Amazon Web Services - AWS
* Microsoft Azure
* DeepSeek
* OpenRouter
* On-Premises (modelos hospedados na infraestrutura do próprio tribunal)

Além de fornecer uma ou mais chaves de API, o tribunal também pode:

* Selecionar quais os modelos devem estar disponíveis para seus usuários.
* Informar limites diários de gastos por usuário e gerais, de modo que a Apoia proteja o contrato evitando gastos excessivos.
* Ampliar os limites de usuários específicos (power users).
* Publicar um comunicado aos usuários do tribunal (exibido na página inicial).
* Consultar o Dashboard de Uso, no qual são apresentadas a quantidade de utilizações e o gasto diário (veja [Dashboard de Uso do Tribunal](administracao/dashboard-de-uso.md)).

Para realizar a integração, o tribunal deve seguir as instruções abaixo.

### Identifique os Códigos do Tribunal

Para identificar o tribunal, o primeiro passo é que algum usuário do tribunal em questão faça o login na Apoia utilizando as credenciais de login corporativo do CNJ (CPF e senha).

Depois de autenticado, o usuário deve apontar o navegador para:&#x20;

```
https://apoia.pdpj.jus.br/api/env/court
```

Será então apresentados dois números: o seq\_tribunal\_pai e o seq\_orgão. Estes números são os códigos do tribunal.

Se em vez de um número for apresentada uma mensagem de erro dizendo "Código do tribunal não encontrado", por favor, [abra um chamado](https://trf2.gitbook.io/apoia/faq#o-sistema-apresenta-erro-codigo-de-erro-.-como-resolver) para o suporte relatando o problema.

### Avalie a Identificação por Email

Em alguns casos, pode ser interessante solicitar que todos os email com determinada terminação devam ser redirecionados para seu órgão. Essa é uma estratégia interessante para garantir que mesmo os servidores requisitados tem acesso à chave de API.

No formulário de configuração do tribunal, esse vínculo é feito pelo campo "Terminações de e-mail do tribunal". Ele só deve ser preenchido quando se desejar desacoplar a configuração de um determinado órgão em relação ao seu nó superior no barramento da PDPJ: tribunais que atuam como órgãos-pai (como TRFs e TJs) devem mantê-lo em branco para que a regra se estenda automaticamente às suas subseções ou jurisdições vinculadas.

### Selecione Provedores de IA e Modelos

Escolha entre os provedores acima quais que deseja disponibilizar para seus usuários.

Para cada provedor, selecione quais os modelos devem ser acessíveis. Lembre-se de que alguns modelos são especialmente caros e a Apoia envia muitos tokens (input) pois submete o texto das peças processuais à IA.

Atualmente, acreditamos que modelos como o gemini-3.7-flash e o gpt-5.4-mini são opções com bom custo benefício.

{% hint style="info" %}
Note que alguns provedores requerem dados adicionais além da chave de API:\
\- AWS: access-key, key-id e region;\
\- Azure: api-key e resource-name (o resource-name pode ser algo do tipo "apoia-instance" ou uma url como "https://apoia-instance.openai.azure.com/openai/deployments")
{% endhint %}

### Selecione Limites de Gasto

Como explicado anteriormente, a Apoia pode limitar o gasto diário de cada usuário e também o gasto geral. Uma sugestão de limites diários seria: 4 dólares por usuário e 200 dólares ao todo.

### Cadastre-se como Gestor do Tribunal

Prepare um email com os seguintes dados:

* Códigos do tribunal (seq\_tribunal\_pai e seq\_orgao);
* Nome e sigla do tribunal
* Nome completo, cargo e CPF do usuário responsável
* Telefone ou WhatsApp

Envie o email para apoia@trf2.jus.br com o assunto "Integração com Tribunal: \[sigla]".

### Utilize o Formulário de Configuração do Tribunal

Depois de receber os dados completos, o responsável será configurado no sistema como **representante do tribunal** e o TRF2 entrará em contato informando que o gestor está autorizado a fazer a configuração.

A configuração é feita na página **"Configuração do Tribunal"**, disponível no menu do usuário (item "Configuração do Tribunal" para representantes; moderadores acessam pelo item "Tribunais" e podem selecionar qualquer tribunal). O representante gerencia apenas o próprio tribunal.

Veja no vídeo abaixo como realizar a configuração do tribunal.

{% embed url="https://youtu.be/Dn9HJe-ULU8" %}

{% hint style="info" %}
**Atenção**: a alteração da configuração pode demorar 1 minuto ou mais para ser aplicada à Apoia. Por motivo de desempenho, a aplicação armazena esses dados em cache.
{% endhint %}

#### Contexto e Requisito de Acesso

O formulário de Configuração do Tribunal no sistema Apoia é a interface central onde o gestor regional administra os recursos de Inteligência Artificial Generativa para a sua jurisdição. O acesso a este painel é restrito a usuários previamente autorizados: os **moderadores da Apoia** e os **representantes do tribunal** nomeados a pedido do próprio tribunal. A gestão centralizada garante governança orçamentária, segurança de chaves, interoperabilidade com sistemas processuais e controle de modelos.

O formulário substitui as antigas variáveis de ambiente do configmap: a configuração fica armazenada no banco de dados da Apoia e tem precedência sobre os valores globais.

#### Gestão Corporativa de Chaves de API

A primeira seção destina-se ao cadastramento das chaves de API fornecidas pelas empresas mantenedoras dos modelos de linguagem, como Google, OpenAI, Anthropic e Azure. O gestor deve marcar o checkbox do provedor desejado e colar a chave correspondente.

Para proteger as credenciais do órgão, a plataforma encripta o segredo antes de gravá-lo no banco de dados. Após a gravação, o valor da chave não é reexibido na tela, impedindo a visualização por terceiros ou a cópia indevida do código. Caso seja necessário revogar ou trocar a credencial de um provedor, a seção **"Segredos configurados"** no rodapé do formulário lista as chaves gravadas e permite a exclusão definitiva do registro para que uma nova chave seja inserida.

#### Mapeamento Dinâmico de Modelos e Hierarquia de Prompt

A seção de modelos divide-se entre escolhas manuais para o usuário e o roteamento automático de prompts por perfis de complexidade.

Para a escolha manual, o formulário permite definir até quatro modelos principais ("Modelo 1" a "Modelo 4"). O primeiro funciona como o padrão da plataforma, enquanto os demais oferecem flexibilidade caso o tribunal opte por dar liberdade de escolha ao usuário final (que os vê na página "Modelo de IA", em /prefs).

Para a execução automatizada, o Apoia classifica suas requisições por perfis de complexidade: **Padrão**, Eficiente, Versátil e Premium. O perfil Eficiente abrange tarefas simples como resumos operacionais usando modelos mais baratos; o Versátil atende tarefas intermediárias; e o Premium destina-se a análises jurídicas complexas. Se não houver modelo configurado para o perfil solicitado, o fallback é o modelo Padrão — por isso, preencha ao menos o modelo Padrão.

Além disso, cada perfil contém variações baseadas no tipo de mídia recebida na requisição, categorizadas com as extensões para áudio MP3, arquivos PDF ou a combinação simultânea de MP3 e PDF. Isso é necessário porque nem todos os LLMs possuem capacidade multimodal para processar arquivos de som ou documentos pesados. Ao utilizar um modelo unificado com suporte nativo a mídia, como a família Gemini, o gestor pode preencher apenas o campo combinado, permitindo que a plataforma aplique o mecanismo de fallback e direcione automaticamente todas as requisições para essa opção.

#### Restrição de Acesso e Governança de Domínio

O controle de quem pode utilizar a infraestrutura do tribunal é feito por dois campos específicos.

O campo **"Usuários autorizados a usar os modelos"** permite restringir a utilização da API corporativa inserindo uma lista de CPFs separados por ponto e vírgula. Essa funcionalidade é recomendada durante fases de testes ou projetos piloto. Usuários cujo CPF não conste na lista ainda poderão utilizar a plataforma Apoia, mas deverão fornecer suas próprias chaves pessoais de API.

O campo **"Terminações de e-mail do tribunal"** associa automaticamente à configuração os usuários cujos e-mails terminam nos domínios informados (ex.: `jfrj.jus.br`), conforme explicado na seção "Avalie a Identificação por Email".

#### Conexões de Infraestrutura e Sigilo Processual

O formulário também gerencia os pontos de integração com a infraestrutura de dados e sistemas de processo eletrônico.

Por padrão, as consultas a dados de processos são direcionadas ao Data Lake da PDPJ. Caso o tribunal utilize integração direta com o eproc ou outro sistema de gestão processual interno, a **URL da API do Data Lake corporativo** deve ser informada para substituir o barramento nacional. O mesmo se aplica ao sistema SEI, onde a inserção do endereço do módulo específico do Apoia viabiliza a análise de processos administrativos (veja [Modo Administrativo (SEI)](outras-funcionalidades/modo-administrativo-sei.md)). Há ainda a **URL do Eproc para jurisprudência**, que habilita a busca de jurisprudência do tribunal no Chat (em branco, a busca fica desabilitada).

{% hint style="info" %}
Só configure URLs para Data Lake e SEI caso tenha instalado na infraestrutura do tribunal os conectores fornecidos pelo TRF2. Não há conexão com sistema processual ou SEI sem a prévia instalação destes conectores. Entre em contato com o TRF2 para saber mais detalhes.
{% endhint %}

Quanto ao **nível máximo de sigilo** (há um campo geral e um específico para o SEI), o valor padrão é mantido no nível zero, equivalente a processos públicos, que é a limitação nativa do Data Lake da PDPJ. A alteração para níveis mais elevados de sigilo é restrita a ambientes que utilizam conexões diretas aos sistemas processuais e infraestruturas internas de inteligência artificial.

#### Definição de Limites Orçamentários e Consumo Diário

Para evitar custos imprevisíveis decorrentes do uso ostensivo das APIs, o formulário impõe travas de consumo diárias distribuídas em quatro variáveis principais: **"Consultas por usuário"**, **"Gastos por usuário (US$)"**, **"Consultas do tribunal"** e **"Gastos do tribunal (US$)"**.

Esses limites atuam como um teto de segurança. Quando qualquer uma das métricas diárias é atingida, a plataforma interrompe novas chamadas sob a chave corporativa até a renovação do ciclo de 24 horas, protegendo o orçamento do órgão contra picos imprevistos de requisições.

#### Limites Ampliados para Usuários Específicos (Power Users)

Na seção "Limites diários", o checkbox **"Limites ampliados para usuários específicos"** expande três campos adicionais: a lista de **CPFs com limites ampliados**, o número de **consultas por usuário (ampliadas)** e o **gasto por usuário (US$, ampliado)**. Os valores são compartilhados por todos os CPFs da lista.

Os limites ampliados substituem **apenas os limites por usuário**, e só nos eixos configurados — os limites globais do tribunal continuam valendo para todos. Os CPFs da lista também ganham acesso ao **Relatório de Acervo** usando a chave do tribunal, sem necessidade de chave própria (veja [Relatório de Acervo](outras-funcionalidades/relatorio-de-acervo.md)).

{% hint style="warning" %}
Ocultar os campos de power users (desmarcando o checkbox) não limpa os valores já salvos. Para limpar, exiba os campos, esvazie-os e salve.
{% endhint %}

#### Comunicado aos Usuários

O campo **"Comunicado aos usuários"** (mensagem em markdown) exibe um aviso na página inicial dos usuários do tribunal, em um alerta amarelo. É útil para comunicar indisponibilidades, novas funcionalidades ou orientações de uso. Deixe em branco para não exibir nada.

#### Representantes do Tribunal

Moderadores também gerenciam, nesta mesma página, a lista de **representantes do tribunal**: a nomeação é feita pelo CPF e exige que o usuário já esteja vinculado ao tribunal. Representantes podem configurar o próprio tribunal, mas não nomear outros representantes.

#### Homologação e Testes Prévios

Antes de aplicar qualquer alteração em âmbito corporativo, a boa prática de gestão exige a validação individual das chaves de API e das capacidades dos modelos. O gestor deve testar as credenciais em seu painel pessoal de configurações de IA, onde é possível realizar chamadas de teste diretamente na interface de chat. Esse procedimento garante que erros de autenticação, falta de saldo na conta do provedor ou falhas de permissão sejam identificados e corrigidos antes da disponibilização dos modelos para todo o corpo funcional do tribunal.
