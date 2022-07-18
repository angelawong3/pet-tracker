// event handler for button click to save pet
// to be updated

const handleCreatePet = async (e) => {
  e.preventDefault();

  const petName = document.querySelector('#pet-name').value.trim();
  const petPhoto = document.querySelector('#pet-photo').value.trim();
  const petBreed = document.querySelector('#pet-breed').value.trim();
  const petDob = document.querySelector('#pet-dob').value.trim();
  const petGender = document.querySelector('#pet-gender').value.trim();
  const petWeight = document.querySelector('#pet-weight').value.trim();
  const petNextappt = document.querySelector('#pet-nextappt').value.trim();

  if (
    petName &&
    petPhoto &&
    petBreed &&
    petDob &&
    petGender &&
    petWeight &&
    petNextappt
  ) {
    const payload = {
      petName,
      petPhoto,
      petBreed,
      petDob,
      petGender,
      petWeight,
      petNextappt,
    };

    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({
        payload,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post. Please try again');
    }
  } else {
    alert('Failed to create post. Please Fill in all fields');
  }
};

document
  .querySelector('#create-pet-form')
  .addEventListener('submit', handleCreatePet);
