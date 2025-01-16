import iziToast from "izitoast";

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

export const onSearchFormSubmit = event => {
    event.preventDefault();

    const searchedQuery = event.currentTarget.elements.user_query.value.trim();

    if (searchedQuery === '') {
        iziToast.warning({
            title: "Caution",
            titleColor: '#fff',
            message: 'The field must be filled!',
            messageColor: '#fff',
            position: 'topRight',
            color: '#ffa000',
        });

        return;
    }
    
    fetch(
        `https://pixabay.com/api/?q=${searchedQuery}&key=48268337-f168b7768f25a86360e21e8ce&image_type=photo&orientation=horizontal&safesearch=true`
    )
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        })
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    title: "Error",
                    titleColor: '#fff',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: '#fff',
                    position: 'topRight',
                    color: '#ef4040',
                });

                galleryEl.innerHTML = '';

                searchFormEl.reset();
            }
        })
        .catch(err => {
            console.log(err);
        });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);