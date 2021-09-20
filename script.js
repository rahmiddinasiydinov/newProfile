let profile = document.querySelector('.profile__form');
let btn = document.querySelector('.submit');
let createdProfiles = [];
let count= 0;
profile.addEventListener('submit',(event)=>{
  event.preventDefault();
  //creating elements
  let newProfile = document.createElement('li');
  let profileHeader = document.createElement('h2');
  let profileJob = document.createElement('span');
  let profileGender = document.createElement('span');
  let profileDescription = document.createElement('p');
  let profileAge = document.createElement('span');
  //appanding
  profile.appendChild(newProfile);
  newProfile.appendChild(profileHeader);
  newProfile.appendChild(profileJob);
  newProfile.appendChild(profileAge);
  newProfile.appendChild(profileGender);
  newProfile.appendChild(profileDescription);
  console.log(document.querySelector('.user__name').value);
  //taking values from html form;
  let userName = document.querySelector('.user__name').value;
  let userJob = document.querySelector('.user__job').value;
  let userAge = document.querySelector('.user__age').value;
  let userGender = document.querySelector('.user__gender').value;
  let userDescribe = document.querySelector('.user__describe').value;

  //adding atributes
  newProfile.setAttribute('class', 'profile');
  profileHeader.setAttribute('class','profile__header');profileJob.setAttribute('class','profile__job');
  profileGender.setAttribute('class', 'profile__gender');
  profileAge.setAttribute('class', 'profile__age')
  profileDescription.setAttribute('class', 'profile__describe');
 // adding objects  to an array
  createdProfiles.push({
    id: count++ ,
    name:userName,
    job:userJob,
    age:userAge,
    gender:userGender, 
    describe: userDescribe,
  })
   
  //displayong them on the window
   profileHeader.textContent = createdProfiles[0].name;
   profileJob.textContent = createdProfiles[0].job;
   profileAge.textContent =`Age: ${createdProfiles[0].age}` ;
   profileGender.textContent = createdProfiles[0].gender;
   profileDescription.textContent = createdProfiles[0].describe;

  
  
  
  
})

