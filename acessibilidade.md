# Acessibilidade

## Diretrizes e Plano de Acessibilidade

O ecossistema Apoia adota uma política rigorosa de Acessibilidade Universal e Inclusão Digital, em estrita observância à Lei Geral de Proteção de Dados Pessoais (LGPD), à Resolução CNJ nº 615/2025 e ao Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015).

Esta seção descreve a arquitetura de acessibilidade implementada na plataforma, os padrões de navegação por teclado, o mapa de atalhos e os recursos de apoio às tecnologias assistivas.

### Princípios de Design Inclusivo

A arquitetura do Apoia foi projetada sob o princípio de melhoria aditiva: todos os recursos de acessibilidade aprimoram a navegação via leitores de tela e teclado sem alterar a identidade visual, o layout ou as regras de negócio do sistema.

#### 1. Semântica e Estrutura Landmark

* Pular para o Conteúdo: A plataforma oferece um _skip link_ no topo de todas as páginas, permitindo que usuários de leitores de tela e navegação por teclado saltem diretamente para a região principal (`<main id="conteudo-principal">`), ignorando o cabeçalho global.
* Marcos de Navegação: Uso rigoroso de tags HTML5 semânticas (`<header>`, `<main>`, `<nav>`, `<fieldset>`, `<legend>`) para estruturar a interface.
* Hierarquia Teatral de Títulos: Cada página possui apenas um título primário (`<h1>`), seguido por uma ordenação encadeada e coerente de subseções (`<h2>`, `<h3>`), incluindo títulos ocultos para apoio de voz quando necessário (`visually-hidden`).

#### 2. Leitores de Tela e Anúncios Dinâmicos (_Live Regions_)

* Streaming de IA e Erros: As respostas geradas em tempo real pelas ferramentas de IA, assim como as trocas de mensagens do Chat, utilizam regiões dinâmicas (`aria-live="polite"` e `role="log"`). O leitor de tela anuncia o início e o término da geração sem interromper a navegação.
* Formulários e Validação: Todos os campos de entrada possuem rótulos explicitamente associados (`htmlFor`/`id`). Mensagens de validação e erros de formulário são equipados com `role="alert"`, `aria-invalid` e `aria-describedby`, garantindo feedback imediato em caso de erro.
* Correção de Áreas Ocultas: Informações essenciais do processo (classe processual, partes, número e data) possuem leitura integral por tecnologias assistivas, evitando o uso indevido de atributos de ocultação em elementos interativos.

#### 3. Controles Interativos e Teclado

* Atribuição Semântica: Ícones interativos, favoritos e botões de ação foram implementados via elementos `<button>` nativos (e não elementos genéricos como `<span>` ou `<div>`), mantendo o foco do teclado, os acionamentos por tecla Enter / Espaço e rótulos acessíveis via `aria-label`.
* Botões Desabilitados: Quando uma ação encontra-se indisponível (ex.: campo de processo incompleto), o sistema inclui instruções e dicas contextuais explicativas informando a condição necessária para a liberação da funcionalidade.

### Navegação Acelerada via Teclado (`accessKey`)

A Apoia fornece atalhos de teclado de acesso rápido (`accessKey`) em todos os seus principais módulos e menus. No navegador, as teclas visivelmente sublinhadas na interface indicam o caractere de atalho.

#### Como Acionar os Atalhos no Navegador

* Windows / Linux: Alt + Shift + Tecla (Google Chrome, Edge, Firefox)
* macOS: Control + Option + Tecla (Safari, Chrome)

#### Mapa Global de Atalhos (`accessKeys`)

**Menu Principal (Navbar)**

O menu global está sempre acessível e mantém a consistência em todas as telas da aplicação:

* `c` — Chat com o Processo
* `p` — Prompts (Banco de Prompts)
* `t` — Revisão de Texto
* `m` — Ementa

**Módulo de Banco de Prompts (`/prompts`)**

Para evitar conflitos com a barra de navegação global, as guias e os filtros específicos do módulo de prompts utilizam as seguintes combinações:

* `i` — Tab "Principais"
* `a` — Tab "Prompts Não Avaliados"
* `r` — Filtro "Tramitação"
* `n` — Filtro pelo Número do Processo
* `f` — Filtro por texto
* `s` — Salvar / Prosseguir (Seleção de Peças)

**Módulos de Execução e Ferramentas Internas**

| **Módulo / Tela**     | **Atalho** | **Função / Ação**                    |
| --------------------- | ---------- | ------------------------------------ |
| Chat                  | `e`        | Enviar mensagem para a IA            |
| Chat                  | `x`        | Anexar documentos/PDFs               |
| Revisão de Texto      | `r`        | Revisar texto no editor              |
| Geração de Pedidos    | `g`        | Gerar análise de pedidos             |
| Visualizador / Slots  | `d`        | Gerar PDF da página (Print/Download) |
| Visualizador / Slots  | `u`        | Ouvir / Leitura de áudio             |
| Formulário de Entrada | `s`        | Prosseguir / Confirmar               |

### Feedback Sonoro Assistivo

A Apoia possui um sistema de feedback áudio-assistivo integrado projetado para auxiliar na identificação do status das operações pesadas de Inteligência Artificial:

* 🔔 Início de Tarefa (`Task Start`): Sinal sonoro emitido ao submeter um prompt, iniciar a síntese ou enviar uma pergunta no Chat.
* ✅ Conclusão com Sucesso (`Task End`): Sinal suave emitido quando o modelo de IA finaliza a geração do texto ou a resposta do streaming é concluída.
* ⚠️ Aviso de Erro (`Error Sound`): Alerta sonoro diferenciado emitido caso ocorra falha de conexão, erro de validação ou indisponibilidade da API.
