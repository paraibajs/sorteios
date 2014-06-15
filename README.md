Sorteios
========

Webapp para sorteios nos meet-ups e eventos do paraiba.js que integra com os fomulários e planilhas do Google Drive

## A proposta
Decidimos usar o Google Drive para armazenar as informações pela praticidade que um cliente magro, que no nosso caso roda apenas no browser, nos trás no corre-corre da organização dos meet-ups. Então, distribuímos o link do formulários, as pessoas podem acessar a planilha o que dá total transparência ao sorteio.

## Como usar
Nos sorteios do paraiba.js usamos geralmente três campos nos formulários: Nome, Email e Perfil do Facebook (pra identificar a pessoa).

### Criando o formulário
Basta entrar no seu Google Drive e criar um novo formulário. Se você quiser usar a aplicação exatamente como está, pode usar seguir este [modelo](https://docs.google.com/forms/d/1KKuS2WzvrlUg_6vcnR_cmCF-ERqs6MCvO-9qdb2JRk8/viewform?usp=send_form). Se não, você precisará alterar algumas coisas no arquivo `recuperar.js`.

Durante a criação do formulário você precisará escolher o destino das respostas. Clique em `Respostas(0) > Escolher destino da resposta > Nova folha de cálculo`, isso fará com que todos os dados dos usuários que preencheram o formulário vão para uma planilha que você escolheu.

### Vinculando a planilha com sua aplicação

Agora é mamata! Abra a planilha que você acabou de criar no passo anterior e após vá em `Ficheiro > Publicar na web...` e copie o link que foi gerado. Edite o arquivo `recuperar.js` com o link público da sua planilha que acaba de ser gerado.