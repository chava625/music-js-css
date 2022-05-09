const makeApi = () => {
  let url = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=mbd`;
  fetch(url,{
    method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
		'X-RapidAPI-Key': '35c367b20bmsh32dcd34c48f7736p156ad3jsneebc0e8317a9'
	}

  })
    .then((resp) => resp.json())
    .then((body) => {
      data = body.data;
      console.log(data);
      renderAllSongs(data);
    });
};