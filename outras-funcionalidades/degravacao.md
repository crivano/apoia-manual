# Degravação

A Apoia possui uma ferramenta avançada para a degravação de arquivos de áudio e vídeo, acessível pelo menu principal (modo judicial). Essa funcionalidade utiliza Inteligência Artificial para converter falas em texto e, além disso, gerar análises estruturadas do conteúdo. O objetivo é transformar gravações longas, como audiências e sessões, em documentos textuais organizados, resumidos e fáceis de consultar.

{% embed url="https://youtu.be/KlcEvij5WtQ" %}

Recursos:

* **Transcrição Automática:** Converte o conteúdo de áudio em texto, identificando os interlocutores e a minutagem (timestamp) de cada fala.
* **Otimização de Arquivo:** O arquivo é convertido no próprio navegador para um formato de áudio leve (MP3 mono), antes do processamento, garantindo mais agilidade e economia de custos. Se o arquivo enviado for um vídeo, apenas o áudio é extraído. É possível cancelar a conversão enquanto ela acontece.
* **Análises com IA:** Gera automaticamente um resumo narrativo, um sumário executivo e uma lista de itens de atenção a partir da transcrição.
* **Interação via Chat:** Permite que o usuário faça perguntas e interaja com o conteúdo transcrito.

**Como utilizar:**

1. Acesse a ferramenta no menu principal, clicando em **"Degravação"**.
2. Na tela "Degravação de Áudio/Vídeo", selecione um arquivo de áudio ou vídeo. É possível arrastar e soltar o arquivo na área indicada ou clicar nela para abrir o seletor de arquivos.
   * **Formatos Suportados:** MP3, MP4, WAV, AIFF, AAC, OGG, FLAC, entre outros.
   * **Limite:** O tamanho máximo do arquivo é de 100 MB.
   * Após selecionar, o arquivo pode ser trocado pelo botão "**Trocar Arquivo**".
3. Após o upload, o sistema iniciará a otimização automática, com barra de progresso. Opcionalmente, o usuário pode baixar essa versão otimizada do áudio.
4. Clique no botão **"Transcrever"** para iniciar o processamento (o botão fica habilitado quando o arquivo é válido, o modelo de IA escolhido suporta áudio/vídeo e a conversão terminou).
5. O sistema apresentará a transcrição completa, juntamente com as análises geradas pela IA. O resultado é dividido nas seguintes seções:
   * **Transcrição:** O texto literal da gravação, com a minutagem e a identificação de cada interlocutor.
   * **Resumo da Transcrição:** Um texto corrido que resume o diálogo de forma narrativa.
   * **Sumário Executivo:** Um parágrafo conciso destacando os pontos processuais mais importantes.
   * **Itens de Atenção:** Uma lista de pontos que merecem destaque ou análise aprofundada.

Ao final da página, o usuário pode utilizar o **Chat** para fazer perguntas sobre o conteúdo da transcrição ou usar o botão de impressão para exportar um relatório completo em **PDF** com todas as informações geradas.

{% hint style="info" %}
A degravação exige um modelo de IA com suporte a áudio. Se o seu modelo não suportar, a ferramenta avisará e sugerirá configurar uma chave com um modelo multimodal (por exemplo, Gemini).
{% endhint %}
