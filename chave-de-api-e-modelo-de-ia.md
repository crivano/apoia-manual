# Chave de API e Modelo de IA

Um ponto crucial da Apoia é a **escolha do provedor de inteligência artificial, do modelo e o custeio do uso**. Existe uma página na Apoia acessível pelo menu "Modelo de IA". Nesta página, há campos para inserir a chave da API dos principais provedores. Após obter a chave da API, ela deve ser cadastrada neste campo. Por exemplo, ao colar uma chave de API da OpenAI, será possível escolher um dos modelos disponíveis da OpenAI. Para usar modelos de outros provedores como Cloud ou Gemini, é necessário informar as chaves correspondentes (Antropic, Google, etc.). É possível preencher mais de uma chave, o que disponibiliza mais modelos para seleção. Após preencher a chave e escolher o modelo, basta clicar em salvar. O nome do modelo selecionado ficará visível entre parênteses no menu, indicando qual modelo será usado para processar todos os prompts pela Apoia.

Caso o usuário não tenha informado uma chave de API e um modelo de IA, a Apoia preparará um texto contendo o prompt e o conteúdo das peças em questão e o copiará para a área de transferência, permitindo que o usuário cole o texto em sua ferramenta de IA preferida.

O uso de APIs próprias ajuda na **proteção de informações sigilosas**.

A Apoia também oferece **centralização de custos e controle de limites de uso**.

{% embed url="https://youtu.be/7cZRJKgWG7c" %}

### Limites de Uso das APIs

Para novos usuários, é comum que as empresa provedoras de APIs limitem o uso. Isso é um problema muito sério, já que a Apoia, com frequência, precisa enviar grandes quantidades de dados (peças processuais) para serem analisadas pela IA.

Se for um novo usuário, **sugerimos utilizar o modelo gpt-4o-mini da OpenAI**, pois ele possui um limite elevado, mesmo para contas recém criadas.

Com o passar do tempo e o depósito de créditos, esses limites vão aumentando e novo modelos poderão ser utilizados pela Apoia.

### Seleção de Provedor e Modelo

#### OpenAI (ChatGPT)

1. Acesse o [site da OpenAI](https://openai.com/) e clique em “Sign up” ou “Sign in”, caso você já tenha uma conta.
2. Depois de fazer login, vá até a [página de Chaves de API](https://platform.openai.com/api-keys).
3. Clique em “Create new secret key” ou “Criar nova chave secreta”.
4. Copie a chave gerada e armazene-a em um local seguro. Observe que, por motivos de segurança, a OpenAI não exibirá novamente a chave completa depois que você fechar essa janela.
5. Vá em [Billing](https://platform.openai.com/settings/organization/billing/overview) e compre pelo menos $5 em créditos clicando em "Add to credit balance". **Atenção**, mesmo sendo usuário pago do ChatGPT é necessário comprar créditos de API para poder usá-la.

#### Anthropic (Claude)

Para obter uma chave de API da Anthropic, siga estes passos:

1. **Crie uma conta**: Acesse [console.anthropic.com](https://console.anthropic.com/) e registre-se.
2. **Gere uma chave de API**: Após o login, clique no seu perfil no canto superior direito e selecione "API Keys". Em seguida, clique em "Create Key", forneça um nome para a chave e confirme. Lembre-se de copiar e armazenar a chave gerada em um local seguro, pois não será possível visualizá-la novamente. ([docs.anthropic.com](https://docs.anthropic.com/pt/api/getting-started?utm_source=chatgpt.com))
3. **Configure o faturamento**: No menu à esquerda, selecione "Plans & Billing". Você pode optar por utilizar créditos de teste fornecendo seu número de telefone ou escolher um plano pago, inserindo os dados do cartão de crédito e adquirindo créditos iniciais. ([docs.anthropic.com](https://docs.anthropic.com/pt/api/getting-started?utm_source=chatgpt.com))

#### Google (Gemini)

1. Acesse a [página de criação de chave de API](https://aistudio.google.com/app/apikey) do Google IA Studio;
2. Gere a chave "paga". Lembre-se de copiar e armazenar a chave gerada em um local seguro, pois não será possível visualizá-la novamente.
3. **Atenção**: o Google fornece uma chave de API sem custo financeiro, no entanto esta chave não deve ser utilizada na ApoIA pois toda informação submetida à IA através dela poderá ser utilizada pelo Google para treinar seus modelos. Ou seja, utilizar uma chave gratuita acarretará em eventual violação à LGPD.

#### Microsoft (Azure)

1. Acessar o portal Acesse: https://portal.azure.com Faça login com sua conta administradora de recursos Azure da Microsoft.
2. Criar o recurso Azure OpenAI No menu inicial, clique em "Criar um recurso". Pesquise por "Azure OpenAI" (ícone azul e branco) e clique em "Criar". Preencha as informações: Assinatura (Subscription): selecione a conta que será cobrada. Grupo de recursos (Resource Group): crie um novo, se ainda não existir. Região (Region): escolha uma região que tenha o serviço disponível (ex: Brazil South). Nome do recurso: defina um nome (ex: APOIA-TJRN). Clique em "Próxima". Em Tipo de acesso, selecione: "Todas as redes, incluindo a Internet, podem acessar esse recurso." Clique novamente em "Próxima". Na aba "Tags", clique em "Próxima". Na aba "Examinar + enviar", clique em "Criar".
3. Implantar o modelo Após a criação do recurso, aguarde a implementação e clique em "Ir para o recurso". Dentro do recurso, clique em "Explore and Deploy", será aberta uma nova aba chamada "Playground de chat". Selecione "Criar uma implantação". Em Model, escolha o modelo desejado. Sugestão: use o modelo "gpt-4.1-mini", pois possui melhor custo-benefício. Clique em "Confirmar". Na próxima tela, revise as informações e clique em "Implantar".
4. Obter as chaves de API Retorne à aba anterior do recurso Azure OpenAI. Vá até "Keys and Endpoint" (ou "Chaves e Ponto de Extremidade"). Copie: Chave da API (Key 1). Nome do recurso (ex: APOIA-TJRN). Esses dados serão utilizados para configurar a Apoia.
5. Inserir as informações na ApoIA No formulário da Apoia, preencha os campos da seguinte forma: Azure: Chave da API Cole a chave copiada do portal Nome do Recurso/URL Cole apenas o nome do recurso (sem "openai.azure.com") Ex: APOIA-TJRN Modelo Padrão Será sugerido automaticamente o modelo implantado, ex: azure-gpt-4.1-mini Após preencher, clique em "Salvar".
