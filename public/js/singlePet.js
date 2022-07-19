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

doneBtn.addEventListener('click', async () => {
  // TODO: hard coded, need to figure how to get id
  const user_id = 17;
  const petName = document.querySelector('#pet-name').value;
  const petBreed = document.querySelector('#pet-breed').value;
  const petDob = document.querySelector('#pet-dob').value;
  const petGender = document.querySelector('#pet-gender').value;
  const petWeight = document.querySelector('#pet-weight').value;
  const petNextappt = document.querySelector('#pet-nextappt').value;
  doneBtn.style.display = 'none';
  editBtn.style.display = 'block';
  editFields.forEach((el) => {
    el.contentEditable = false;
    el.style.backgroundColor = '#ffffff';
  });
  console.log(petName);
  const payload = {
    user_id: user_id,
    pet_name: petName,
    pet_breed: petBreed,
    pet_gender: petGender,
    birth_date: petDob,
    pet_weight: petWeight,
    next_appointment: petNextappt,
  };

  const response = await fetch(`/api/pet/${user_id}`, {
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
