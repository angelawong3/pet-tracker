console.log('in createPet.js');

const handleCreatePet = async (event) => {
  event.preventDefault();

  const petName = document.querySelector('#pet-name').value;
  const petPhoto = document.querySelector('#pet-photo').value;
  const petBreed = document.querySelector('#pet-breed').value;
  const petDob = document.querySelector('#pet-dob').value;
  const petGender = document.querySelector('#pet-gender').value;
  const petWeight = document.querySelector('#pet-weight').value;
  const petNextappt = document.querySelector('#pet-nextappt').value;
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
      pet_name: petName,
      pet_breed: petBreed,
      pet_gender: petGender,
      birth_date: petDob,
      pet_weight: petWeight,
      next_appointment: petNextappt,
      pet_picture: petPhoto,
    };

    const response = await fetch('/api/pet', {
      method: 'POST',
      body: JSON.stringify(payload),
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
