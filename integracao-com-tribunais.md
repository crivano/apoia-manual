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
* On-Premises

Além de fornecer uma ou mais chaves de API, o tribunal também pode:

* Selecionar quais os modelos devem estar disponíveis para seus usuários.
* Informar limites diários de gastos por usuário e gerais, de modo que a Apoia proteja o contrato evitando gastos excessivos.
* Consultar um painel no qual é apresentado a quantidade de utilizações e o gasto diário.

Para realizar a integração, o tribunal deve seguir as instruções abaixo.

### Identifique os Códigos do Tribunal

Para identificar o tribunal, o primeiro passo é que algum usuário do tribunal em questão faça o login na Apoia utilizando as credenciais de login corporativo do CNJ (CPF e senha).

Depois de autenticado, o usuário deve apontar o navegador para:&#x20;

```
https://apoia.pdpj.jus.br/api/env/court
```

Será então apresentados dois números: o seq\_tribunal\_pai e o seq\_orgão. Estes números são os códigos do tribunal.

Se em vez de um número for apresentada uma mensagem de erro dizendo "Código do tribunal não encontrado", por favor, [abra uma chamado](https://trf2.gitbook.io/apoia/faq#o-sistema-apresenta-erro-codigo-de-erro-.-como-resolver) para o suporte relatando o problema.

### Avalie a Identificação por Email

Em alguns casos, pode ser interessante solicitar que todos os email com determinada terminação devam ser redirecionados para seu órgão. Essa é uma estratégia interessante para garantir que mesmo os servidores requisitados tem acesso à chave de API.

### Selecione Provedores de IA e Modelos

Escolha entre os provedores acima quais que deseja disponibilizar para seus usuários.

Para cada provedor, selecione quais os modelos devem estar acessíveis. Lembre-se de que alguns modelos são especialmente caros e a Apoia envia muitos tokens (input) pois submete o texto das peças processuais à IA.

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

Depois de receber os dados completos, o responsável será configurado no sistema e o TRF2 entrará em contato informando que o gestor está aurizado a fazer a configuração. Nessa ocasião, será informado como acessar o painel de controle de gastos.

Veja no vídeo abaixo como realizar a configuração do tribunal.

{% embed url="https://youtu.be/Dn9HJe-ULU8" %}

{% hint style="info" %}
**Atenção**: a alteração da configuração pode demorar 1 minuto ou mais para ser aplicada à Apoia. Por motivo de desempenho, a aplicação armazena esses dados em cache.
{% endhint %}

#### Contexto e Requisito de Acesso

O formulário de Configuração do Tribunal no sistema Apoia é a interface central onde o gestor regional administra os recursos de Inteligência Artificial Generativa para a sua jurisdição. O acesso a este painel é restrito a usuários previamente autorizados pelo TRF2, exigindo o cadastro do e-mail do gestor. Uma vez concedida a permissão, o painel fica disponível no menu de opções do usuário. A gestão centralizada garante governança orçamentária, segurança de chaves, interoperabilidade com sistemas processuais e controle de modelos.

#### Gestão Corporativa de Chaves de API

A primeira etapa do formulário destina-se ao cadastramento das chaves de API fornecidas pelas empresas mantenedoras dos modelos de linguagem, como Google, OpenAI, Anthropic e Azure. O gestor deve marcar o checkbox do provedor desejado e colar a chave correspondente.

Para proteger as credenciais do órgão, a plataforma encripta o segredo antes de gravá-lo no banco de dados. Após a gravação, o valor da chave não é reexibido na tela, impedindo a visualização por terceiros ou a cópia indevida do código. Caso seja necessário revogar ou trocar a credencial de um provedor, o formulário disponibiliza a seções de segredos configurados no rodapé, permitindo a exclusão definitiva do registro para que uma nova chave seja inserida.

#### Mapeamento Dinâmico de Modelos e Hierarquia de Prompt

A seção de modelos divide-se entre escolhas manuais para o usuário e o roteamento automático de prompts por perfis de complexidade.

Para a escolha manual, o formulário permite definir até quatro modelos principais. O primeiro funciona como o padrão da plataforma, enquanto os demais oferecem flexibilidade caso o tribunal opte por dar liberdade de escolha ao usuário final.

Para a execução automatizada, o Apoia classifica suas requisições por perfis de complexidade: Padrão, Eficiente, Versátil e Premium. Cada perfil destina-se a um grau de exigência analítica. O perfil Eficiente abrange tarefas simples como resumos operacionais usando modelos mais baratos; o Versátil atende tarefas intermediárias; e o Premium destina-se a análises jurídicas complexas.

Além disso, cada perfil contém variações baseadas no tipo de mídia recebida na requisição, categorizadas com as extensões para áudio MP3, arquivos PDF ou a combinação simultânea de MP3 e PDF. Isso é necessário porque nem todos os LLMs possuem capacidade multimodal para processar arquivos de som ou documentos pesados. Ao utilizar um modelo unificado com suporte nativo a mídia, como a família Gemini, o gestor pode preencher apenas o campo combinado, permitindo que a plataforma aplique o mecanismo de fallback e direcione automaticamente todas as requisições para essa opção.

#### Restrição de Acesso e Governança de Domínio

O controle de quem pode utilizar a infraestrutura do tribunal é feito por dois campos específicos.\
O campo de usuários autorizados permite restringir a utilização da API corporativa inserindo uma lista de CPFs separados por vírgula. Essa funcionalidade é recomendada durante fases de testes ou projetos piloto. Usuários cujo CPF não conste na lista ainda poderão utilizar a plataforma Apoia, mas deverão fornecer suas próprias chaves pessoais de API.

O campo de terminação de e-mail é utilizado quando se deseja desacoplar a configuração de um determinado órgão em relação ao seu nó superior no barramento da PDPJ. Como o sistema identifica a estrutura hierárquica a partir da autenticação, tribunais que atuam como órgãos-pai (como TRFs e TJs) devem manter este campo em branco para que a regra se estenda automaticamente às suas subseções ou jurisdições vinculadas.

#### Conexões de Infraestrutura e Sigilo Processual

O formulário também gerencia os pontos de integração com a infraestrutura de dados e sistemas de processo eletrônico.

Por padrão, as consultas a dados de processos são direcionadas ao Data Lake da PDPJ. Caso o tribunal utilize integração direta com o eproc ou outro sistema de gestão processual interno, a URL da API do Data Lake corporativo deve ser informada para substituir o barramento nacional. O mesmo se aplica ao sistema SEI, onde a inserção do endereço do módulo específico do Apoia viabiliza a análise de processos administrativos.

{% hint style="info" %}
Só configure URLs para Data Lake e SEI caso tenha instalado na infraestrutura do tribunal os conectores fornecidos pelo TRF2. Não há conexão com sistema processual ou SEI sem a prévia instalação destes conectores. Entre em contato com o TRF2 para saber mais detalhes.
{% endhint %}

Quanto ao nível máximo de sigilo, o valor padrão é mantido no nível zero, equivalente a processos públicos, que é a limitação nativa do Data Lake da PDPJ. A alteração para níveis mais elevados de sigilo é restrita a ambientes que utilizam conexões diretas aos sistemas processuais e infraestruturas internas de inteligência artificial.

#### Definição de Limites Orçamentários e Consumo Diário

Para evitar custos imprevisíveis decorrentes do uso ostensivo das APIs, o formulário impõe travas de consumo diárias distribuídas em quatro variáveis principais: número máximo de consultas por usuário, limite de gasto individual por usuário em dólares, volume total de consultas do tribunal e teto orçamentário diário do tribunal em dólares.

Esses limites atuam como um teto de segurança. Quando qualquer uma das métricas diárias é atingida, a plataforma interrompe novas chamadas sob a chave corporativa até a renovação do ciclo de 24 horas, protegendo o orçamento do órgão contra picos imprevistos de requisições.

#### Homologação e Testes Prévios

Antes de aplicar qualquer alteração em âmbito corporativo, a boa prática de gestão exige a validação individual das chaves de API e das capacidades dos modelos. O gestor deve testar as credenciais em seu painel pessoal de configurações de IA, onde é possível realizar chamadas de teste diretamente na interface de chat. Esse procedimento garante que erros de autenticação, falta de saldo na conta do provedor ou falhas de permissão sejam identificados e corrigidos antes da disponibilização dos modelos para todo o corpo funcional do tribunal.
