# Chat

A plataforma ApoIA disponibiliza uma poderosa funcionalidade de **chat com inteligência artificial**, projetada para auxiliar magistrados, assessores e servidores em tarefas de análise e triagem processual. Essa funcionalidade combina recursos avançados de linguagem com acesso direto a dados processuais, permitindo interações precisas, seguras e produtivas.

<figure><img src="../.gitbook/assets/apoia.pdpj.jus.br_chat(Desktop 1260x800) (1).png" alt=""><figcaption></figcaption></figure>

O chat tem como objetivo oferecer **respostas fundamentadas exclusivamente com base no conteúdo processual e nos dados disponíveis**, respeitando rigorosamente os limites da informação acessada. Ele está instruído para não inventar, presumir ou deduz fatos fora do que está documentado nas peças ou nos metadados de processo, no entanto, tudo que é produzido pela IA deve ser cuidadosamente validado.

Para utilizar, basta iniciar a conversa no chat e informar o número do processo ou perguntas diretas sobre os elementos processuais. A IA conduzirá a análise de forma autônoma, utilizando as ferramentas quando necessário, sem exigir comandos específicos do usuário.

Você também pode utilizar os **botões de sugestão abaixo da caixa de texto** para facilitar o início da interação ("Resumir o processo", "Pontos controvertidos", "Argumentos das partes"; no painel lateral do sistema processual há também atalhos de sentença e voto).

Dicas de uso:

* Pressione **Enter** para enviar e **Shift+Enter** para quebrar linha.
* Use o botão de clipe (**Anexar PDFs**) para anexar até 3 PDFs de até 10MB cada à conversa. Os anexos aparecem como marcadores acima da caixa de texto e podem ser removidos antes do envio. Não é realizada anonimização nos anexos.
* Suas próprias mensagens podem ser **editadas** (ícone de lápis), para reformular a pergunta sem reescrever do zero.
* O texto das respostas destaca as **citações das peças** (passando o mouse, é indicada a página da peça citada) e converte menções a peças em **links clicáveis** que abrem o PDF correspondente.
* A conversa pode ser impressa/exportada para PDF.

{% embed url="https://youtu.be/8IDmQcYfiq0" %}

## Ferramentas Integradas

O chat é **agêntico**: a IA decide sozinha quais ferramentas acionar conforme a pergunta. As ferramentas atualmente integradas são:

| Ferramenta | O que faz |
| --- | --- |
| **Consulta a Metadados de Processo** | Recupera dados básicos do processo (classe, assunto, partes, magistrado, órgão julgador), a lista completa de movimentos processuais e as referências entre movimentos e peças. Ativada automaticamente quando você informa um número de processo válido (20 dígitos). |
| **Consulta ao Texto de Peças Processuais** | Acessa o conteúdo integral de qualquer peça do processo (identificada por seu UUID, resolvido automaticamente pela própria IA). Exemplo: pedir para resumir a petição inicial. |
| **Documentos da Biblioteca** | Obtém o conteúdo de documentos e anexos da sua Biblioteca, para fundamentar as respostas no seu material de referência. |
| **Busca no Pangea** | Pesquisa teses, súmulas, OJs, temas de repercussão geral e recursos repetitivos no Pangea (STF/STJ por padrão). |
| **Busca Semântica de Temas** | Busca semântica/híbrida de temas de repercussão geral do STF e recursos especiais repetitivos do STJ. |
| **Busca por Processo Paradigma** | Localiza temas de repercussão geral e repetitivos a partir do número do processo paradigma (leading case). |
| **Busca de Jurisprudência** | Pesquisa a base de jurisprudência do tribunal (quando o tribunal configurou a integração — em fase piloto no TRF2), com operadores de busca, filtros por relator, órgão, tipo e período, e obtenção do inteiro teor das decisões. |
| **Data atual, cálculos e operações com datas** | A IA pode consultar a data de hoje, calcular diferenças entre datas (anos, meses e dias) e avaliar expressões matemáticas. |

A anonimização (quando ativada no menu do usuário) e os níveis de sigilo são aplicados automaticamente ao conteúdo obtido pelas ferramentas.

## Chat Administrativo

No **modo administrativo** (SEI), o cartão "Chat Administrativo" abre um chat voltado a assuntos administrativos (RH, contratos, etc.), que consulta processos administrativos em vez de processos judiciais. Veja [Modo Administrativo (SEI)](modo-administrativo-sei.md).

## Comportamento da IA

A IA que opera o chat é orientada por diretrizes específicas para favorecer:

* **Aderência rigorosa ao conteúdo processual e metadados disponíveis**
* **Atualização jurídica permanente**, com profundo conhecimento do direito brasileiro
* Análises imparciais, concisas e baseadas nas melhores práticas do Direito, Linguística e Ciências Cognitivas
* **Proibição expressa de criação de conteúdo hipotético ou não embasado**
* **Restrições à menção de jurisprudência** que não esteja expressamente citada nas peças do processo ou obtida pelas ferramentas de busca integradas
