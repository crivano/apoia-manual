# Visão Geral da Administração

{% hint style="info" %}
**Vídeo explicativo:** espaço reservado — um vídeo demonstrativo desta funcionalidade será disponibilizado aqui em breve.
{% endhint %}

A administração da Apoia é distribuída em dois papéis, além dos usuários comuns:

* **Moderadores**: equipe da Apoia (TRF2), com acesso a todas as ferramentas administrativas de todos os tribunais.
* **Representantes do Tribunal**: gestores indicados pelo próprio tribunal e nomeados pelos moderadores, com acesso à configuração e às estatísticas **do próprio tribunal**.

## O que Cada Papel Pode Fazer

| Ferramenta | Representante | Moderador |
| --- | --- | --- |
| [Configuração do Tribunal](../integracao-com-tribunais.md) (chaves, modelos, limites, power users, comunicado) | Sim (só o seu tribunal) | Sim (qualquer tribunal + gestão de representantes e do cadastro de tribunais) |
| [Dashboard de Uso do Tribunal](dashboard-de-uso.md) | Sim (só o seu tribunal) | Sim (qualquer tribunal) |
| [Chamados — moderação](paineis-do-moderador.md#chamados) | Não | Sim |
| [Erros do Servidor](paineis-do-moderador.md#erros-do-servidor) | Não | Sim |
| [Avaliações de IA](paineis-do-moderador.md#avaliacoes-de-ia) | Não | Sim |
| [Aviso da Página Inicial](paineis-do-moderador.md#aviso-da-pagina-inicial) | Não | Sim |
| [Edição de Prompts](paineis-do-moderador.md#edicao-de-prompts) | Não | Sim |
| [Transferência de Prompts](paineis-do-moderador.md#transferencia-de-prompts) | Não | Sim |
| [Testes de Modelos](paineis-do-moderador.md#testes-de-modelos) | Não | Sim |
| Moderação de prompts e documentos públicos (tornar Padrão/Público/Não Listado/Privado) | Não | Sim |
| Relatórios de uso gerais (Gerações de IA e Uso de Prompts) | Não | Sim |

## Onde Ficam as Entradas

* **Representantes**: no menu do usuário, após um separador, aparecem os itens "**Estatísticas de Uso**" (dashboard do tribunal) e "**Configuração do Tribunal**".
* **Moderadores**: no menu do usuário, após um separador, aparecem os itens "Chamados (moderação)", "Erros do Servidor", "Avaliações de IA", "Tribunais", "Aviso da Página Inicial", "Edição de Prompts", "Transferência de Prompts" e "Testes de Modelos". A moderação de prompts e documentos públicos é feita pelos menus de contexto das próprias listagens (por exemplo, "Tornar Padrão" e "Definir como Padrão").

## Nomeação de Representantes

A nomeação de representantes é feita pelo moderador na página **Configuração do Tribunal** (seção "Representantes do tribunal"), mediante o CPF do usuário — que precisa já estar vinculado ao tribunal. Representantes não podem nomear outros representantes. O fluxo para um tribunal entrar na Apoia e indicar seu gestor está descrito em [Integração com Tribunais](../integracao-com-tribunais.md).
