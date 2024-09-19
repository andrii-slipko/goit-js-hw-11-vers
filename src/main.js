import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showLoading, hideLoading, showError, showWarning } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const queryInput = document.getElementById('searchQuery');
    const query = queryInput.value.trim();

    if (query === "") {
        showWarning('Fill this field!');
        return;
    }

    showLoading();
    
    try {
        const data = await fetchImages(query);
        
        if (data.hits.length === 0) {
            showWarning('Sorry, there are no images matching your search query. Please try again!');
        } else {
            renderImages(data.hits);
            const lightbox = new SimpleLightbox('.gallery a');
            lightbox.refresh();
        }
    } catch (error) {
        showError('Щось пішло не так. Спробуйте ще раз.');
        console.error('Error fetching data:', error);
    } finally {
        hideLoading();
        queryInput.value = '';
    }
});