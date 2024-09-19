import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export const renderImages = (images) => {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    images.forEach(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-item');

        const link = document.createElement('a');
        link.href = largeImageURL;
        link.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = webformatURL;
        img.alt = tags;

        const info = document.createElement('div');
        info.classList.add('info'); 
        info.innerHTML = `
            <span>Likes: ${likes}</span>
            <span>Views: ${views}</span>
            <span>Comments: ${comments}</span>
            <span>Downloads: ${downloads}</span>
        `;

        
        link.append(img);
        listItem.append(link);
        listItem.append(info);
        resultsDiv.append(listItem);
    });
};
export const showLoading = () => {
    document.getElementById('loading').style.display = 'block';
};

export const hideLoading = () => {
    document.getElementById('loading').style.display = 'none';
};

export const showError = (message) => {
    iziToast.error({
        title: 'Error',
        message: message,
    });
};

export const showWarning = (message) => {
    iziToast.warning({
        title: 'Attention',
        message: message,
    });
};