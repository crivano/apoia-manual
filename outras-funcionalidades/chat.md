# Chat

A plataforma ApoIA disponibiliza uma poderosa funcionalidade de **chat com inteligência artificial**, projetada para auxiliar magistrados, assessores e servidores em tarefas de análise e triagem processual. Essa funcionalidade combina recursos avançados de linguagem com acesso direto a dados processuais, permitindo interações precisas, seguras e produtivas.

<figure><img src="../.gitbook/assets/apoia.pdpj.jus.br_chat(Desktop 1260x800) (1).png" alt=""><figcaption></figcaption></figure>

O chat tem como objetivo oferecer **respostas fundamentadas exclusivamente com base no conteúdo processual e nos dados disponíveis**, respeitando rigorosamente os limites da informação acessada. Ele está instruído para não inventar, presumir ou deduz fatos fora do que está documentado nas peças ou nos metadados de processo, no entanto, tudo que é produzido pela IA deve ser cuidadosamente validado.

Para utilizar, basta iniciar a conversa no chat e informar o número do processo ou perguntas diretas sobre os elementos processuais. A IA conduzirá a análise de forma autônoma, utilizando as ferramentas quando necessário, sem exigir comandos específicos do usuário.

Você também pode utilizar os **botões de sugestão abaixo da caixa de texto** para facilitar o início da interação.

{% embed url="https://youtu.be/8IDmQcYfiq0" %}

## Ferramentas Integradas

O chat é capaz de utilizar automaticamente três ferramentas especializadas, sempre que necessário:

#### **1. Consulta a Metadados de Processo**

Permite recuperar e analisar:

* Dados básicos do processo (classe, assunto, partes, magistrado, órgão julgador etc.)
* **Lista completa de movimentos processuais**
* Referências cruzadas entre movimentos e peças processuais disponíveis

Essa consulta é ativada automaticamente quando o usuário informa um **número de processo judicial válido (20 dígitos)**, com ou sem formatação.

#### **2. Consulta ao Texto de Peças Processuais**

Permite acessar o conteúdo integral de qualquer peça processual identificada por seu UUID. Essa ferramenta é utilizada sempre que o chat precisa fundamentar a análise no texto da peça. O usuário não precisa informar o UUID, isso será feito automaticamente pela IA com informações que ela obtem ao recuperar os metadados do processo.

Um exemplo de uso dessa ferramenta pode ser observado se o usuário, por exemplo, pedir para resumir a petição inicial.

#### **3. Busca de Precedentes**

Ferramenta ainda **em fase piloto**, atualmente disponível apenas para o **TRF2**. Permite a busca por decisões semelhantes relacionadas ao tema jurídico em análise, desde que o sistema identifique com clareza a matéria e o contexto relevante com base nas peças processuais.

## Sugestões de Perguntas

Abaixo da caixa de chat, há uma **lista de sugestões rápidas**, acessíveis por meio de botões. Esses atalhos foram elaborados para facilitar o uso e inspirar perguntas úteis que podem ser feitas à IA. As sugestões disponíveis incluem:

* **Resumir o processo** – “Resuma o processo em um parágrafo.”
* **Listar as partes** – “Liste as partes e seus advogados.”
* **Valor da causa** – “Qual o valor da causa?”
* **Pontos controvertidos** – “Quais são os pontos ainda controvertidos?”
* **Argumentos das partes** – “Quais são os principais argumentos das partes?”

Essas sugestões podem ser acionadas com um clique, e o conteúdo correspondente será enviado automaticamente para o chat.

## Comportamento da IA

A IA que opera o chat é orientada por diretrizes específicas para favorecer:

* **Aderência rigorosa ao conteúdo processual e metadados disponíveis**
* **Atualização jurídica permanente**, com profundo conhecimento do direito brasileiro
* Análises imparciais, concisas e baseadas nas melhores práticas do Direito, Linguística e Ciências Cognitivas
* **Proibição expressa de criação de conteúdo hipotético ou não embasado**
* **Restrições à menção de jurisprudência** que não esteja expressamente citada nas peças do processo

