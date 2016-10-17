var data;
var id = $('#numberSelector').val();
var type = $('#typeSelector').val();
var Pkmntypes = []

$('#pokenumber').on('click', function() {
  downloadPokeNumber();
});

$('#typechooser').on('click', function() {
  downloadPokeType();
});

function error() {
  console.log('error y nosé cuál es XD');
}

function downloadPokeNumber(number) {
  console.log("click ok");
  id = number || $('#numberSelector').val() ;
  console.log(id);

  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/' + id + '/',
    data: data,
    error: error,
    dataType: 'json',
    success: success,
  })

  function success(data) {
    var types = data.types[0].type.name;
    var evolved = 'Missingno'
    var HTML = '<div class="card"><div class="lado frente"><h2 id="pokename">' + data.name + '</h2><img src="' + data.sprites.front_default + '" alt="image"></div><div class="lado atras"><div id="poketype">' + types + '</div><div id="pokedesc"> Weight: ' + data.weight + "\nHeight: " + data.height + '</div><div id="pokevolve"> Evolves from ' + evolved + '</div></div></div>';
    document.getElementById('pokename').innerHTML = data.name;
    document.getElementById('pokesprite').innerHTML = '<img src="' + data.sprites.front_default + '" alt="image">';
    document.getElementById('pokedesc').innerHTML = ('Weight: ' + data.weight + "\n\nHeight: " + data.height);
    document.getElementById('poketype').innerHTML = types;
    document.getElementById('pokevolve').innerHTML = evolved
    $('.pkmnlist').append(HTML);
  }
}

function downloadPokeType() {
  console.log("click ok2");
  type = $('#typeSelector').val();
  console.log(type);
  

  $.ajax({
    url: 'http://pokeapi.co/api/v2/type/' + type + '/',
    data: data,
    error: error,
    data: 'json',
    success: success

  })

  function success(data) {
    console.log('éxito en la primera')
    for (var i = 0; i < data.pokemon.length && i < 9; i++) {
      console.log('He añadido un pokemon nuevo: ' + data.pokemon[i].pokemon.name);

      Pkmntypes.push(data.pokemon[i]);
      downloadPokeNumber(data.pokemon[i].pokemon.name)

    }
    console.log(Pkmntypes)
  }

}

