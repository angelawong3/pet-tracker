console.log('in singlePet.js');

const editFields = document.querySelectorAll('.edit-field');
const editBtn = document.querySelector('#edit-btn');
const doneBtn = document.querySelector('#done-btn');
doneBtn.style.display = 'none';
editBtn.addEventListener('click', () => {
  doneBtn.style.display = 'block';
  editBtn.style.display = 'none';
  editFields.forEach((el) => {
    el.contentEditable = true;
    el.style.backgroundColor = '#dddbdb';
  });
});

doneBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const id = document.querySelector('#pet_id').value;
  const petName = document.querySelector('#pet-name').textContent;
  const petBreed = document.querySelector('#pet-breed').textContent;
  const petGender = document.querySelector('#pet-gender').textContent;
  const petWeight = document.querySelector('#pet-weight').textContent;
  const petNextappt = document.querySelector('#pet-nextappt').textContent;
  doneBtn.style.display = 'none';
  editBtn.style.display = 'block';
  editFields.forEach((el) => {
    el.contentEditable = false;
    el.style.backgroundColor = '#ffffff';
  });
  const payload = {
    pet_name: petName,
    pet_breed: petBreed,
    pet_gender: petGender,
    pet_weight: petWeight,
    next_appointment: petNextappt,
  };

  const response = await fetch(`/api/pet/${id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to edit your Pet Profile');
  }
  document.location.replace('/dashboard');
});
