console.log("Let's get this party started!");
const searchInput = document.querySelector('#search');
const gifResults = document.querySelector('#results');
const form = document.querySelector('#GiphyForm');
const removeButton = document.querySelector('#delete')


function addGif(result){
    let newResults = result.data.length;
    if(newResults){
        let randomIdx = Math.floor(Math.random() * newResults);
        let newGif = document.createElement('img');
        newGif.classList.add('card-body');
        newGif.src = result.data[randomIdx].images.original.url;

        gifResults.appendChild(newGif);
    }
}

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchInput = document.querySelector('#search');
    
    let gifSearch = searchInput.value;
    searchInput.value = '';
    console.log(gifSearch);

    const result = await axios.get('https://api.giphy.com/v1/gifs/search', 
    {params: {q: gifSearch, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});
    console.log(result.data);

    addGif(result.data);
})

removeButton.addEventListener('click', function(e){
    while(gifResults.firstChild){
        gifResults.removeChild(gifResults.firstChild);
    }
})

