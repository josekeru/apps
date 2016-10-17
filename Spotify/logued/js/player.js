$('#submit').on('click', function(event) {
	event.preventDefault()
	var query = $('input[name="box"]').val();
	$('.searched').text(query);
	searchSong(query);
})


function searchSong(query) {
	$.ajax({
		url: 'https://api.spotify.com/v1/search?type=track&limit=1&q=' + query,
		success: formatSong,
		error: function() {
			console.log('error y nosé cuál es XD')
		},
		dataType: 'json'
	});
};

function formatSong(songs) {
	songs['tracks']['items']['0']['artists'].forEach(function displayAuthor (song) {
		var singerName = song.name;
		$('.author').text(singerName);
		
		searchArtist(singerName);
	});
	songs['tracks']['items'].forEach(function trackName (song) {
		var songName = song.name;
		$('.title').text(songName);
	});
	songs['tracks']['items'].forEach(function displayImage (song) {
		var songImage = song.album.images[0]['url'];
		$('.cover').html('<img width="300" height="300" alt="song cover" src="' + songImage + '">');
	});
	songs['tracks']['items'].forEach(function track (song) {
		var songTrack = song.preview_url;
		$('audio').attr('src', songTrack);
	});
};



$('.btn-play').on('click', function() {

	if ($( '.btn-play' ).hasClass( "playing" )) {
		$( '.btn-play' ).removeClass( "playing" );
		$('#song').trigger('pause');
	} else {
		$('#song').trigger('play');
		$( '.btn-play' ).addClass( "playing" );
	}
});


function searchArtist(query) {
   $.ajax({
       url: 'https://api.spotify.com/v1/search?type=artist&query=' + query,
       success: formatArtists,
       error: function () {
           console.log('error y nosé cuál es XD');
       },
       dataType: 'json'
   });
}
;

function formatArtists(artists) {
    artists["artists"]["items"].forEach(function displayArtist(artist) {
        var artistName = artist.name;
        //var artistGenres = artist.genres.join(", ");
        var artistImages = artist.images[0]["url"];

        var html = "";
        html += '<ul class="artistCard list-inline" id="artista">' + 
                    '<li id="' + artist.id + '"><h2> ' + artistName + ' </h2>' + 
                    '<img src =" ' + artistImages + ' " class="img-responsive artistImage height="200" width="200"">' + '</li>' +
                '</ul>';
        $("#results").append(html);
        
        $ ("#artista li").unbind("click").click (function () {
            var artistAlbm = $ (this).attr("id");
            //console.log(albumID);
            console.log(artistAlbm);
            
            searchAlbum(artistAlbm);
            
            
            
        }); 
    });
};

function searchAlbum(artistAlbm) {
    
    $.ajax({
        url: 'https://api.spotify.com/v1/artists/'+artistAlbm+'/albums',
        dataType: "json",
        success: formatAlbum,
        error: function () {
            console.log("error");
        }

    });

}

function formatAlbum(album) {
      $("#results").empty();
            
            album["items"].forEach(function (album) {
            var albumName = album.name;
            var albumImages = album.images[0]["url"];
            
            var html = "";
            html += '<li class="portada" id="'+album.id+'"><h2> ' + albumName + ' </h2>' +
                '<img src =" ' + albumImages + ' " class="img-responsive artistImage" height="200" width="200">' + '</li>';
        
       		 $("#results").append(html);
       		 $("#results li").click(function(){
            	var id=$(this).attr("id");
            	searchSing(id);
            	
            });

  
            });

}



function searchSing(artistSing) {
    
    $.ajax({
        url: 'https://api.spotify.com/v1/albums/'+artistSing+'/tracks',
        dataType: "json",
        success: formatSing,
        error: function () {
            console.log("error");
        }

    });

}

function formatSing(sing) {
      $ ("#results").empty();
            
            sing["items"].forEach(function (sing) {
            var singName = sing.name;
            var singPrev = sing.preview_url;
            var id = sing.id;

            
            var html = "";
            html += '<li id = "'+id+'">'+
            			'<h2> ' + singName + ' </h2>'+ 
            			'<a href = "'+singPrev+'" target = "a_blank"><img src="data:image/png;base64,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" alt="musica"/></a>'+
            			'<button type = "button">GUARDAR<img src=" https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSD-Q0XWzgdQnSGrsrEAsmTZMPzy7vJ0rSQLvo5heQZ60bjaPlB" alt="musica2" /></button>';       
        $("#results").append(html);
        
            });
            $("#results button").click(function(){
            	var id = $(this).parent().attr("id");
            	tusmuertosfavorito(id);
            	
            })
}



var unviajecanciones = [];

function tusmuertosfavorito(id){
	unviajecanciones.push(id);
	window.localStorage.setItem("tusmuertos", unviajecanciones);
}

var hijoputa = window.localStorage.getItem("tusmuertos");

var array = hijoputa.split(",");

