const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value;
    const apiKey = '48a16ee0a61242c880748cec660cf465';
    const apiUrl = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            searchResults.innerHTML = '';

            if (data.articles && data.articles.length > 0) {
                data.articles.forEach(article => {
                    const card = document.createElement('div');
                    card.classList.add('card');

                    if (article.urlToImage) {
                        const image = document.createElement('img');
                        image.classList.add('card-img');
                        image.src = article.urlToImage;
                        card.appendChild(image);
                    }

                    const title = document.createElement('h3');
                    title.textContent = article.title;
                    card.appendChild(title);

                    searchResults.appendChild(card);
                });
            } else {
                searchResults.innerHTML = '<p>No results found</p>';
            }
        })
        .catch(error => console.error(error));
});
