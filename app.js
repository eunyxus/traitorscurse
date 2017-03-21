	var i;
$.ajax({

	url:"https://api.spotify.com/v1/albums/3T4tUhGYeRNVUGevb0wThu"
}).done(function(eds){
	console.log(eds);

	let count = eds.tracks.items.length;
	let html = `
	<img src="${eds.images[0].url}"  alt=""><div id="mrs"></div>`;

	document.querySelector('#yong').innerHTML = html;
	html = `<h4>Playlist</h4>
								<div class="table-wrapper">
									<table class="alt">
										<thead>
											<tr>
												<th>Name</th>
												<th>Track</th>
											</tr>
										</thead>
										<tbody>`;
	for(i=0;i<count;i++){
		html += `
		<tr>
		<td>${eds.tracks.items[i].name}</td>
		<td><audio controls><source src="${eds.tracks.items[i].preview_url}" type="audio/ogg"></audio></td>
		</tr>
		`;
	}
	html += `</tbody>`;
		document.querySelector('#mrs').innerHTML = html;
	
});

// $.ajax({
// url:""
// 	}).done(function(brn2){
// let html2=``;
// let count2 = brn2.tracks.items.length;


// 	})