# FAQ

### 1. Sobre

#### 1.1. O que é?

A Apoia é uma aplicação web que utiliza Inteligência Artificial Generativa para auxiliar magistrados e servidores no tratamento de processos judiciais. Seus principais módulos são: Banco de Prompts, Síntese Processual, Revisão de Texto e Geração de Ementas.

#### 1.2. Quem pode acessar?

Apenas magistrados e servidores da Justiça Federal podem acessar a Apoia. O login via Gov.BR não é permitido.

#### 1.3. Por quem foi criada?

A Apoia foi desenvolvida internamente no TRF2, sob iniciativa da Corregedoria. Atualmente, o projeto está sob a Presidência do TRF2.

### 2. Primeiros Passos

#### 2.1. Como faço para acessar o sistema?

Você pode acessar pelo site [https://apoia.pdpj.jus.br](https://apoia.pdpj.jus.br/) ou diretamente via [www.jus.br](https://www.jus.br/), usando seu CPF e senha institucional.

#### 2.2. Esqueci minha senha. O que devo fazer?

Siga o procedimento de recuperação de senha no portal [www.jus.br](https://www.jus.br/) ou entre em contato com o suporte da sua unidade de TI.

#### 2.3. Quais navegadores são compatíveis com o sistema?

Recomenda-se o uso das versões mais recentes dos navegadores Chrome, Firefox ou Edge para melhor desempenho.

### 3. Funcionalidades Básicas

#### 3.1. Como realizar a geração de uma ementa?

Acesse o menu **“Ementa”**, cole o texto do voto e clique em “gerar ementa”. A Apoia formatará a ementa de acordo com o padrão do STF/CNJ.

#### 3.2. O que significa “prompt”?

Prompt é uma instrução enviada à IA com o objetivo de gerar uma resposta. Na Apoia, prompts podem ser personalizados, compartilhados e utilizados com base nas peças do processo ou em textos inseridos manualmente.

#### 3.3. Como gerar um relatório de análise de processo?

Utilize o módulo **Síntese Processual**, informe o número do processo e a Apoia executará automaticamente prompts internos para gerar resumos e análises.

### 4. Solução de Problemas

#### O sistema apresenta erro \[código de erro]. Como resolver?

Anote o código e o contexto do erro e entre em contato com o suporte técnico em: [https://suporteti.cnj.jus.br](https://suporteti.cnj.jus.br/)

#### Erro acessando processo

Recebi um erro do tipo:

{% hint style="info" %}
Error: Não foi possível acessar o processo \[número do processo] no DataLake/Codex da PDPJ (Error: Erro ao realizar consulta. Exception: br.jus.cnj.datalake.exception.ConsultaProcessoException - Erro ao realizar consulta. Exception: br.jus.cnj.datalake.exception.RegistroNaoEncontradoException - Não foram encontrados registros. Origem: br.jus.cnj.datalake.repository.impl.ProcessoRepositoryImpl.buscarProcessoPorPath)
{% endhint %}

Isso é um erro bem comum, mas não é um erro da Apoia.

A Apoia utiliza o Datalake para obter informações sobre os processos e também o conteúdo das peças processuais.

Esse erro acontece quando a Apoia solicita os metadados de um processo e o datalake responde com um erro.

Este erro pode ser causado por um problema na fila de processamento do Datalake ou na integração entre o tribunal em questão e o Datalake.  Se o processo for sigiloso, este erro pode estar relacionado à [omissão de processos sigilosos](faq.md#nao-e-possivel-acessar-processos-e-pecas-sigilosos).

Sugimos entrar em contato com a equipe que cuida do datalake para resolver esse problema.

#### Erro recuperando peça processual

Recebi um erro do tipo:

{% hint style="info" %}
Error: Não foi possível obter o texto da peça no DataLake/Codex da PDPJ. (Error: Erro interno na API do Codex. - número do processo/identificador da peça)
{% endhint %}

Isso é um erro bem comum, mas não é um erro da Apoia.

A Apoia utiliza o Datalake para obter informações sobre os processos e também o conteúdo das peças processuais.

Esse erro acontece quando o Datalake diz que um processo tem determinada peça e quando a Apoia solicita o conteúdo textual dessa peça, o datalake responde com um erro.

Este erro pode ser causado por um problema na fila de processamento do Datalake ou na integração entre o tribunal em questão e o Datalake.&#x20;

Sugimos entrar em contato com a equipe que cuida do datalake para resolver esse problema.

#### Peça processual indisponível na listagem

Existem novos eventos e peças processuais que não aparecem na lista de seleção de peças da Apoia.

Isso é um erro bem comum, mas não é um erro da Apoia.

A Apoia utiliza o Datalake para obter informações sobre os processos e também o conteúdo das peças processuais.

Este erro pode ser causado por um problema na integração entre o tribunal em questão e o Datalake.&#x20;

Sugimos entrar em contato com a equipe que cuida do datalake ou a TI do próprio tribunal para resolver esse problema.

#### Não é possível acessar processos e peças sigilosos

A Apoia utiliza o Datalake para obter informações sobre os processos e também o conteúdo das peças processuais.

O Datalake omite a existência de processos sigilosos e também omite a existência de peças sigilosas.

Está sendo feito um estudo a respeito da liberação dessas peças para pessoas específicas, como por exemplo para o magistrado responsável.

Quando esse estudo for concluído, é possível que algumas situações de sigilo possam ser tratadas pela Apoia. No entanto, mesmo assim ainda haverá questões delicadas em relação ao envio de informações sigilosas para empresas provedoras de IA, como OpenAI, Google e Anthropic.

Enquanto essas duas questões não são resolvidas, a Apoia fica restrita aos processos e peças não sigilosas.

#### Erro ao utilizar modelos da OpenAI

Caso esteja usando uma chave privada e tente acessar os modelos gpt-5 e gpt-5-mini, é possível que receba o seguinte erro:

{% hint style="info" %}
Erro na comunicação com o provedor de inteligência artificial: AI\_APICallError: Your organization must be verified to stream this model. Please go to: https://platform.openai.com/settings/organization/general and click on Verify Organization. If you just verified, it can take up to 15 minutes for access to propagate.
{% endhint %}

Isso não é um problema da Apoia, mas sim uma exigência da OpenAI. Para acessar os modelos mais novos é necessário fazer a verificação. Isso incluí o envio de foto de documento de identidade e também do reconhecimento facial. Vá para [https://platform.openai.com/settings/organization/general](https://platform.openai.com/settings/organization/general) e clique em "Verify Organization" para inicial o processo de verificação.

#### Erro ao acessar a Apoia

Para acessar a Apoia é necessário utilizar o Login Corporativo do CNJ, veja mais informações em [entrando-na-apoia.md](entrando-na-apoia.md "mention").

#### Erro ao selecionar automaticamente as peças processuais relevantes

A Apoia conta como uma heurística para a seleção automática das peças processuais mais importantes. É importante enviar para a IA apenas as peças principais pois, se enviarmos todas elas, o custo será maior e a qualidade da resposta será pior.

Para identificar as peças importantes, a Apoia se baseia no tipo da peça, que deve estar de acordo com a [Tabela Unificada de Documentos Processuais](https://www.cnj.jus.br/sgt/consulta_publica_documentos.php).

Alguns sistemas usam uma tabela própria e isso inviabiliza que a Apoia realize a seleção automática. Se for esse o caso, será sempre necessário selecionar as peças manualmente como pode ser visto em [execucao-de-prompts-baseados-em-pecas-processuais.md](execucao-de-prompts-baseados-em-pecas-processuais.md "mention").

#### Não consigo visualizar \[elemento específico]. O que pode estar acontecendo?

Verifique se você está usando um navegador compatível e se sua conexão está estável. Tente atualizar a página ou utilizar outro navegador.

#### O sistema está lento. O que posso fazer?

Certifique-se de que sua chave de API está ativa e com créditos suficientes. Modelos como o **gpt-4o-mini** da OpenAI são recomendados para contas novas por oferecerem maior limite de uso.

### 5. Segurança e Privacidade

#### 5.1. Como meus dados são protegidos?

A Apoia utiliza integração segura com o Codex/DataLake e só acessa processos e peças processuais não sigilosas. O uso de IA através de APIs protege mais as informações sigilosas.

#### 5.2. O sistema está em conformidade com a LGPD?

Sim. A Apoia foi desenvolvida considerando os princípios da LGPD, como segurança, transparência e consentimento. No entanto, cabe ao usuário utilizar uma chave de API de um mecanismo de IA compatível com a LGPD, ou seja, que não utilize os dados para treinamento.

#### 5.3. Como posso alterar minhas configurações de privacidade?

As configurações de uso de API e modelo de IA podem ser alteradas diretamente na interface da Apoia. Não existem opções para configuração de privacidade.

#### 5.4. Como altero meus dados cadastrais?

Dados cadastrais devem ser atualizados através do sistema corporativo do CNJ, entrando em contato com a própria TI de cada tribunal.

#### 5.5. Posso excluir a minha conta?

A exclusão de contas não é realizada diretamente pelo usuário.

### 6. Atualizações e Manutenção

#### 6.1. Com que frequência o sistema é atualizado?

As atualizações são contínuas e registradas no repositório do projeto no GitHub: [https://github.com/trf2-jus-br/apoia](https://github.com/trf2-jus-br/apoia)

#### 6.2. Como serei informado sobre novas atualizações?

Informações são divulgadas pelos canais institucionais do TRF2 ou comunicados internos. Por ser uma aplicação web, sempre que o usuário acessa está usando a versão mais recente.

#### 6.3. O sistema ficará fora do ar para manutenção?

Sim. Pode haver manutenções programadas. Sempre que possível, os usuários serão informados previamente.

### 7. Serviços e Sistemas Integrados

A Apoia se integra aos seguintes sistemas e serviços:

* **Codex/DataLake** – para acesso às peças dos processos
* **Modelos de IA externos** – como OpenAI, Google Gemini e Anthropic
* **Portal Jus.br** – autenticação

***
