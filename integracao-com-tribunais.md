# Integração com Tribunais

Além do próprio usuário poder fornecer uma chave de API para uso pela Apoia, cada tribunal tem a possibilidade de registrar uma ou mais chaves de API que ficarão automaticamente disponíveis para todos os usuários provenientes do tribunal em questão.

Atualmente, nesta modalidade, a Apoia suporta chaves de API dos seguintes provedores:

* Google Gemini
* Anthropic
* OpenAI
* Amazon Web Services - AWS
* Microsoft Azure

Além de fornecer uma ou mais chaves de API, o tribunal também pode:

* Selecionar quais os modelos devem estar disponíveis para seus usuários.
* Informar limites diários de gastos por usuário e gerais, de modo que a Apoia proteja o contrato evitando gastos excessivos.
* Consultar um painel no qual é apresentado a quantidade de utilizações e o gasto diário.

Para realizar a integração, o tribunal deve seguir as instruções abaixo.

### Identifique o Código do Tribunal

Para identificar o tribunal, o primeiro passo é que algum usuário do tribunal em questão faça o login na Apoia utilizando as credenciais de login corporativo do CNJ (CPF e senha).

Depois de autenticado, o usuário deve apontar o navegador para:&#x20;

```
https://apoia.pdpj.jus.br/api/env/court
```

Será então apresentado um número. Este número é o código do tribunal.

Se em vez de um número for apresentada uma mensagem de erro dizendo "Código do tribunal não encontrado", por favor, [abra uma chamado](https://trf2.gitbook.io/apoia/faq#o-sistema-apresenta-erro-codigo-de-erro-.-como-resolver) para o suporte relatando o problema.

### Selecione Provedores de IA e Modelos

Escolha entre os provedores acima quais que deseja disponibilizar para seus usuários.

Para cada provedor, selecione quais os modelos devem estar acessíveis. Lembre-se de que alguns modelos são especialmente caros e a Apoia envia muitos tokens (input) pois submete o texto das peças processuais à IA.

Atualmente, acreditamos que modelos como o gemini-2.5-flash e o gpt-5-mini são opções com bom custo benefício.

### Selecione Limites de Gasto

Como explicado anteriormente, a Apoia pode limitar o gasto diário de cada usuário e também o gasto geral. Uma sugestão de limites diários seria: 2 dólares por usuário e 40 dólares ao todo.

### Envie os Dados

Crie um email com todos os dados que foram obtidos nas etapas anteriores:

* Código do tribunal;
* Para cada provedor: nome do provedor, chave de API, modelos a serem disponibilizados
* Limite diário por usuário e geral

Note que alguns provedores requerem dados adicionais além da chave de API:

* AWS: access-key, key-id e region;
* Azure: api-key e resource-name (o resource-name pode ser algo do tipo "apoia-instance" ou uma url como "https://apoia-instance.openai.azure.com/openai/deployments")

Não se esqueça de incluir também:

* Nome e sigla do tribunal
* Nome completo e cargo do usuário responsável
* Telefone ou WhatsApp

Envie o email para apoia@trf2.jus.br com o assunto "Integração com Tribunal: \[sigla]".

Depois de receber os dados completos, será feita a configuração e o TRF2 entrará em contato para que o usuário faça os devidos testes de homologação. Nessa ocasião, será informado como acessar o painel de controle de gastos.
