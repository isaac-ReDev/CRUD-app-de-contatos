# app de genrencair contatos do androido

### uma tentatica de implementar um CRUD com uma interface que lembre um, aplicativo de ##adicionar contato de um celular android

- ### implementar funcionalaidades de 
  - CREATE 
  - READ 
  - UPDATE 
  - DELETE


- ### funcionalidades
  - CREATE 
   - - criando uma funcao para criar contatos.
   funcao criar uma funcao que recebe com parametros os valores das cahves do novo objeto user que e seu nome, id e numero. e depos essse novo contato e adicionado ao nosso DATABASE
   Pegando valores da inteface e adicionado a um objetos para dar push nos contatos, etudo OK
   parte de criacao finalizada oor enquanto eu mesmo tempo q eu crio no meu database eu tambem consigo mostrar os usuariuos adicionados para o user do app.


  - READ 
   - - criando uma funcao para ler os contatos.
   bom basicamente eu quero que ele mostre os detalhesdo meu contato quando for clicado nele, mostrar o nome o numero e pipipi popopo em um pop-up
   mas para isso eu tenho q criar uma forma de que ele saiba exatamente o contato que foi clicado e que ele so seja mostrado quando eu clicar por exemplo na LI que o elemento esta dentro ou em seus filhos e nao quero que mostre quando for clicado em seu pai q e uma ul ou outroas tag HTML.
   RESOLUCAO: aparente mente deu certo quando clico no elemento LI desejado eu consigo mostrar no console o elemento clicado com o target e se eu clicar nos seus filhos q e uma tag O e uma tag IMg tambem da certo porque ao clicar nos filhos do LI eu mostro no console o sue parentNode que e a propria LI.
   PROBLEMA: Tenho que conseguir armazenar os calores deles por exemplo o nome do contato ou o id, para que seja mostrado no pop-up ou eu posso pegar o id dele que e gerado apartir do ultimo valor do meu arrey de objetos do database e fassa uma pesquisa e mostre no pop-up o resultado.
   RESOLICAO: Atraves do metodo de arrey FIND eu consegui pegar o valorda propriedade data-js da LI ja que ela e passada dinamicamente quando nono contato e criado e seu valor e igual a o userID, e filtrando por isso eu tenho como retorn um objeto desejado.
   PROBLEMA: Destro de cada else if na funcao que abre o popup para mostrar o contato desejado eu tiver q re fazaer a funcao de find do objeto porque eu tive que pegar o valor o data-js do parent node de IMG e do P
  - UPDATE 
  - DELETE
  -
  -


 - STYLE:
 -  
