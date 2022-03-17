var listGames = [
    "https://www.exorbeo.com/wp-content/uploads/2016/10/todas-capas-jogos-snes.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/8/83/Donkey_Kong_Country_capa.png",
    "https://afontegeek.files.wordpress.com/2016/09/top-gear-capa-snes.jpg",
  
    "https://pbs.twimg.com/media/EtA0KMaXIAIKVJk.jpg"
  ];
  for (var i = 0; i < listGames.length; i++) {
    document.write("<img src= " + listGames[i] + ">");
  }
  
  function Adicionar() {
    let novoFilme = document.getElementById("imagem").value;
  
    if (novoFilme.length > 0) {
      if (listGames.indexOf(novoFilme) < 0) {
        listGames.push(novoFilme);
        //Insere o que já tem mais o novo filme
        document.body.innerHTML +=
          "<img src=" + listGames[listGames.length - 1] + ">";
      } else {
        alert("Essa URL ja foi adicionada");
      }
    } else {
      alert("Insira a URL do jogo");
    }
  }
  