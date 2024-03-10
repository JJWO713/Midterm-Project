fetch('data.json')
.then(response => response.json())
.then(data => {
  // Iterate over each image in the JSON data
  data.Food.forEach(image => {
    // Create HTML elements for each image
    const imageCard = document.createElement('div');
    imageCard.classList.add('col');
    imageCard.innerHTML = `
      <div class="card shadow-sm">
        <img src="${image.url}" alt="${image.title}" height="235" style="object-fit: cover; object-position: 90% 60%;">
        <div class="card-body">
          <p class="card-text"><strong>${image.title}</strong></p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#modalSheet" data-modal-type="${image.title}" data-image-url="${image.url}" data-description="${image.description}">View</button>
            </div>
          </div>
        </div>
      </div>
    `;
    // Append the created card to the imageRow
    document.getElementById('imageRow').appendChild(imageCard);
  });

  // Add event listener for modal show event
  document.getElementById('modalSheet').addEventListener('show.bs.modal', function (event) {
    // Extract data from the button that triggered the modal
    const button = event.relatedTarget;
    const imageUrl = button.getAttribute('data-image-url');
    const title = button.closest('.card').querySelector('.card-text strong').textContent;
    const description = button.getAttribute('data-description');

    // Update modal content
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').innerHTML = `<p>${description}</p>`;
  });
})
.catch(error => console.error('Error fetching JSON:', error));
