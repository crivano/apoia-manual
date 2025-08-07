# Criar Prompt a Partir de um Modelo

Um modelo é uma variação da criação de prompts. Essencialmente, o modelo funciona como um prompt oculto. O usuário não visualiza o prompt em si, mas fornece um modelo do resultado que deseja que a inteligência artificial gere.

Para magistrados, por exemplo, que possuem **modelos padrão de sentenças, decisões, etc.**, o processo envolve copiar e colar o modelo existente no campo apropriado do sistema. O modelo contém partes que são designadas para serem substituídas pela inteligência artificial. Por exemplo, seções como "resumo da petição inicial" ou "resumo da contestação" seriam preenchidas automaticamente pela Apoia diretamente sobre o modelo que o magistrado já utiliza normalmente.

**É fundamental que o modelo já contenha a informação sobre o resultado da decisão**, como se a sentença é de procedência ou improcedência. Isso é crucial porque a inteligência artificial não pode ser encarregada de decidir o mérito da questão.

Se o modelo for bem estruturado e já fornecer um tipo específico de explicação, indicando, por exemplo, que a decisão é improcedente, essa estrutura e resultado podem ser automatizados pela APOIA.

Para criar um modelo, você deve:\


1. Copiar e colar seu modelo (como uma sentença, decisão, etc.) no campo designado para o modelo.
2. Certifique-se de que o modelo já inclua a definição do resultado (procedência/improcedência).
3. Preencher os outros campos disponíveis na tela, da mesma forma que faria ao criar prompts.

Ao utilizar modelos, a APOIA facilitará a automação do preenchimento de partes repetitivas ou variáveis de documentos padronizados, baseando-se na estrutura e no resultado predefinidos por você.

{% embed url="https://youtu.be/vFc5Stfgb5Y" %}

## Marcações Especiais nos Modelos

Nos modelos utilizados pela ApoIA, é possível utilizar marcações especiais para guiar o comportamento da IA de forma dinâmica e controlada. Essas marcações permitem gerar textos personalizados, incluir trechos sob certas condições e estruturar seções complexas com flexibilidade. Existem três tipos principais de marcações:

1. **Inclusão `{...}`**
2. **Condicional `{{...}}`**
3. **Parte `{{{...}}}`**

### 1. Inclusão `{...}`

A marcação de **inclusão** serve para solicitar que a IA insira um conteúdo específico no lugar indicado. Esse conteúdo **não é uma variável**, mas sim uma **explicação natural para a IA** sobre o que deve ser incluído ali.

**Exemplo:**

```
O processo trata de {resuma o objeto do processo com base na petição inicial}.
```

Neste exemplo, o sistema pedirá à IA que gere um resumo com base na petição inicial. A instrução entre chaves é interpretada como um pedido de ação.

### 2. Condicional `{{...}}`

A marcação **condicional** permite incluir blocos de texto **apenas se uma determinada condição for satisfeita**. A ApoIA avalia automaticamente as condições, e o bloco só será exibido se a lógica da aplicação permitir.

As marcações condicionais são automaticamente encerradas quando uma nova condicional é encontrada. No entanto, também é possível fechá-las explicitamente com `{{}}`.

**Exemplo:**

```
{{Se houve audiência no processo}}
A audiência ocorreu em {informe a data da audiência} e tratou dos seguintes 
pontos: {resuma os principais temas discutidos na audiência}.
{{}}
```

Ou de forma abreviada:

```
{{Se houve audiência no processo}}A audiência ocorreu em {informe a data da audiência}
 e tratou dos seguintes pontos: {resuma os principais temas discutidos na audiência}.
```

Se a condição não for satisfeita, o conteúdo será omitido na resposta final.

### 3. Parte `{{{...}}}`

A marcação de **parte** funciona como uma estrutura de seção maior, podendo conter **vários condicionais e inclusões dentro dela**. Ela é ideal para isolar trechos complexos do modelo, que só devem aparecer sob determinadas circunstâncias.

Assim como os condicionais, as partes são encerradas automaticamente quando uma nova parte começa, ou podem ser encerradas manualmente com `{{{}}}`.

**Exemplo:**

```
{{{Se o processo tiver uma contestação relevante}}}
{{Se a contestação trouxer argumentos novos}}
A parte ré alegou: {resuma os argumentos da contestação}.
{{}}

{{Se houver contrarrazões relevantes}}
A parte autora respondeu: {resuma as contrarrazões}.
{{}}
{{{}}}
```

Nesse exemplo, todo o bloco só será considerado se a condição da parte for satisfeita, e os elementos internos dependem de suas próprias condições.

### Regras Gerais de Comportamento

* **Encerramento automático:** tanto `{{` quanto `{{{` encerram a marcação anterior do mesmo tipo.
* **Encerramento explícito:** use `{{}}` para fechar um condicional e `{{{}}}` para fechar uma parte, quando necessário.
* **Hierarquia:** partes podem conter condicionais e inclusões. Condicionais podem conter inclusões, mas não outras partes.

### Dicas Práticas

* Escreva as instruções entre `{...}` de forma clara e objetiva para obter resultados consistentes da IA.
* Use condicionais quando quiser evitar trechos que não façam sentido em todos os contextos.
* Use partes para isolar blocos inteiros que dependem de grandes variações do processo.
