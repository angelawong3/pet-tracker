// event handler for button click to save pet
// to be updated

const handleCreatePet = async (e) => {
  e.preventDefault();

  const postTitle = document.querySelector('#post-title').value.trim();
  const postContent = document.querySelector('#post-content').value.trim();

  if (postTitle && postContent) {
    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({ postTitle, postContent }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('#create-pet-form')
  .addEventListener('submit', handleCreatePet);
