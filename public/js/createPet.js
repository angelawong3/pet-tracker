// event handler for button click to save pet
// to be updated
const createPetForm = document.querySelector('#create-pet-form');

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
      pet_picture: petPhoto,
      pet_breed: petBreed,
      birth_date: petDob,
      pet_gender: petGender,
      pet_weight: petWeight,
      next_appointment: petNextappt,
    };

    const response = await fetch('/api/pet', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post. Please try again');
    }
  } else {
    alert('Failed to create post. Please Fill in all fields');
  }
};

createPetForm.addEventListener('submit', handleCreatePet);
