# Anonimização

A funcionalidade de **anonimização** foi implementada na ApoIA com o objetivo de proteger dados pessoais e sensíveis durante as interações com a inteligência artificial (IA). Quando ativada, essa funcionalidade busca que **as informações extraídas do processo sejam automaticamente anonimizadas antes de serem enviadas para análise pela IA**, reduzindo riscos de exposição de dados identificáveis.

Essa funcionalidade não utiliza recursos de IA, apenas trata os textos através da busca de padrões. Embora os resultados sejam de ótima qualidade, **não há garantia de que nenhum dado pessoal resistirá ao processo de anonimização**.

A anonimização pode ser ativada ou desativada diretamente pelo usuário, por meio de uma **opção disponível no menu de configurações do usuário**, na interface da aplicação. A ativação é feita por meio de uma **caixa de seleção** (checkbox) identificada como "Anonimizar".

{% hint style="info" %}
Não é realizada anonimização em arquivos enviados como anexos no Chat.
{% endhint %}

## Ferramenta de Anonimização de Texto

Além da opção global do menu, a página inicial da Apoia disponibiliza a ferramenta **"Anonimização"**, para tratamento pontual de textos. Ela funciona de forma independente do checkbox do menu e **não utiliza IA**: o processamento é feito por padrões de texto, com controle total do usuário sobre o que será anonimizado.

Como utilizar:

1. Acesse a ferramenta pelo cartão "Anonimização" na página inicial.
2. Cole o texto no editor (também é possível carregar um PDF).
3. Marque ou desmarque, nas caixas de seleção, os tipos de dado que devem ser anonimizados.
4. Clique em "**Anonimizar**".
5. O resultado é exibido com a contagem de substituições realizadas e pode ser editado diretamente no editor antes de copiado.

Os tipos de dados disponíveis para seleção são (entre parênteses, o estado padrão): Números (ativo), CPF (ativo), Identidade/RG (ativo), Número de Processo (inativo), Número de Benefício (inativo), Endereços (ativo), Telefone fixo (ativo), Telefone móvel (ativo), E-mails (ativo), OAB (ativo), URLs (ativo), CRM (ativo) e Nomes próprios (ativo).

## Informações anonimizadas

Quando a anonimização está ativa, o sistema aplica transformações automáticas no conteúdo textual das peças processuais e dos metadados, cobrindo os seguintes tipos de dados:

| Tipo de dado                 | Descrição                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------- |
| **Números**                  | Substituição de números que não sejam parte de expressões legais ou processuais. |
| **Identificadores pessoais** | Remoção ou ofuscação de documentos como RG e CPF.                                |
| **Endereços**                | Supressão de logradouros, números, bairros e CEPs.                               |
| **Telefones fixos**          | Detecção e substituição de números fixos.                                        |
| **Telefones móveis**         | Detecção e substituição de números celulares.                                    |
| **E-mails**                  | Remoção ou substituição de endereços de e-mail.                                  |
| **Números de OAB**           | Supressão de registros de advogados.                                             |
| **URLs**                     | Remoção de endereços de sites.                                                   |
| **Números de CRM**           | Supressão de registros profissionais médicos.                                    |
| **Nomes próprios**           | Anonimização de nomes próprios com base em um banco de nomes comuns.             |

#### Detalhes sobre a anonimização de nomes

A anonimização de nomes é realizada por meio de uma abordagem heurística baseada em uma **lista de pré-nomes mais comuns no Brasil**, obtida da Receita Federal (RFB). Essa lista contém nomes que ocorrem **mais de 1.500 vezes** e é usada para identificar prováveis nomes próprios no texto.

O algoritmo:

1. **Segmenta o texto em palavras e símbolos** preservando espaços e pontuação.
2. **Verifica se as palavras correspondem a nomes válidos** (com inicial maiúscula e estrutura típica).
3. **Aplica substituição por iniciais** (ex.: “João da Silva” se torna “J. S.”).
4. **Mantém conectivos comuns de nomes brasileiros** como “de”, “da”, “do”, “das”, “dos”.
5. **Preserva a estrutura e fluidez do texto**, mesmo após as substituições.

> Exemplo:\
> Texto original: "O autor João da Silva compareceu à audiência."\
> Texto anonimizado: "O autor J. S. compareceu à audiência."

Esse processo é inteiramente automático e transparente para o usuário, ocorrendo no momento em que o conteúdo do processo é lido e antes de ser enviado à IA.
