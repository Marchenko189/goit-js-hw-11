export const createGalleryCardTemplate = imgInfo => {

  return `
    <li class="gallery-card">
    <div class="container-gallery">
     <a class="gallery-link" href="${imgInfo.largeImageURL}">
      <img
      class="gallery-img"
      src="${imgInfo.webformatURL}" 
      alt="${imgInfo.tags}" 
      />
      </a>
      <div class="gallery-info">
  <p class="gallery-stats">
    Likes: <span class="gallery-num">${imgInfo.likes}</span>
    Views: <span class="gallery-num">${imgInfo.views}</span>
    Comments: <span class="gallery-num">${imgInfo.comments}</span>
    Downloads: <span class="gallery-num">${imgInfo.downloads}</span>
  </p>
    </div>
    </div>
    </li>
  `;
};

