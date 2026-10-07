# Modo Administrativo (SEI)

{% hint style="info" %}
**Vídeo explicativo:** espaço reservado — um vídeo demonstrativo desta funcionalidade será disponibilizado aqui em breve.
{% endhint %}

A Apoia opera em dois modos: o **modo judicial** (padrão), voltado a processos judiciais, e o **modo administrativo**, voltado a processos administrativos tramitando no **SEI** — o sistema eletrônico de informações usado na administração pública.

## Como Ativar

No menu do usuário (canto superior direito), o item **"Modo SEI!"** alterna entre os dois modos: marcado, você navega no modo administrativo; desmarcado, volta ao modo judicial. O item só aparece para usuários de tribunais que possuem a integração com o SEI configurada (veja [Integração com Tribunais](../integracao-com-tribunais.md)).

O modo ativo é indicado pelo prefixo `/adm` no endereço das páginas. Todos os links da Apoia preservam o modo em que você está — não é preciso ficar alternando manualmente.

## O que Muda

No modo administrativo:

* A página inicial destaca o **Chat Administrativo** ("Converse com a IA sobre assuntos administrativos (RH, Contratos, etc.)") e oculta os cartões exclusivos do modo judicial (Síntese, Sentença, Voto, Ementa, Degravação, Busca de Temas, Relatório de Acervo e MCP).
* O menu deixa de exibir o item "Ementa".
* A listagem de prompts exibe apenas os prompts **administrativos** — tanto os criados por você quanto os da curadoria da Apoia. Os filtros de Segmento, Instância e Natureza ficam ocultos, pois não se aplicam a processos administrativos.
* Os prompts executados consultam os **documentos do processo administrativo no SEI** (por meio do módulo de integração instalado no tribunal), em vez do DataLake/Codex.
* No formulário de criação de prompt, o campo "**Modo**" permite classificar o prompt como Judicial, Administrativo ou Ambos.

As demais ferramentas de texto (Revisão de Texto, Linguagem Simples), a Biblioteca e os chamados funcionam nos dois modos.

## Painel no SEI (Sidekick)

Em tribunais com a integração instalada, a Apoia também pode ser usada **dentro do SEI** por meio de um painel lateral (sem a barra de navegação da Apoia), que sugere prompts adequados à tela em que o usuário está. O botão "Abrir em nova aba" expande a Apoia completa, preservando o processo e o prompt em uso.
