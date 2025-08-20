// Wait for the page to load
window.addEventListener("load", function() {
  const overlay = document.getElementById("overlay");
  const closeButton = document.getElementById("close-button");

  closeButton.addEventListener("click", function() {
    overlay.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const audioFilesChordsDf1 = [
     "sample_sounds2/chords/cho_df010_af075.wav",
     "sample_sounds2/chords/cho_df010_af100.wav",
     "sample_sounds2/chords/cho_df010_af150.wav",
  ];
  const audioFilesChordsDf2 = [
     "sample_sounds2/chords/cho_df050_af100.wav",
     "sample_sounds2/chords/cho_df050_af150.wav",
     "sample_sounds2/chords/cho_df050_af075.wav",
  ];
  const audioFilesChordsDf3 = [
     "sample_sounds2/chords/cho_df080_af150.wav",
     "sample_sounds2/chords/cho_df080_af075.wav",
     "sample_sounds2/chords/cho_df080_af100.wav",
  ];
  const audioFilesChordsDf4 = [
     "sample_sounds2/chords/cho_df100_af100.wav",
     "sample_sounds2/chords/cho_df100_af050.wav",
     "sample_sounds2/chords/cho_df100_af125.wav",
     "sample_sounds2/chords/cho_df100_af075.wav",
     "sample_sounds2/chords/cho_df100_af150.wav",
     "sample_sounds2/chords/cho_df100_af085.wav",
     "sample_sounds2/chords/cho_df100_af200.wav",
  ];
  const audioFilesChordsAf1 = [
      "sample_sounds2/chords/cho_df100_af075.wav",
      "sample_sounds2/chords/cho_df080_af075.wav",
      "sample_sounds2/chords/cho_df050_af075.wav",
      "sample_sounds2/chords/cho_df010_af075.wav",
  ];
  const audioFilesChordsAf2 = [
      "sample_sounds2/chords/cho_df100_af100.wav",
      "sample_sounds2/chords/cho_df080_af100.wav",
      "sample_sounds2/chords/cho_df050_af100.wav",
      "sample_sounds2/chords/cho_df010_af100.wav",
  ];
  const audioFilesChordsAf3 = [
      "sample_sounds2/chords/cho_df100_af150.wav",
      "sample_sounds2/chords/cho_df080_af150.wav",
      "sample_sounds2/chords/cho_df050_af150.wav",
      "sample_sounds2/chords/cho_df010_af150.wav",
  ];

  const audioFilesMelodiesAf1 = [
      "sample_sounds2/melody/mel_df050_af075.wav",
      "sample_sounds2/melody/mel_df080_af075.wav",
      "sample_sounds2/melody/mel_df100_af075.wav",
  ];
  const audioFilesMelodiesAf2 = [
      "sample_sounds2/melody/mel_df010_af100.wav",
      "sample_sounds2/melody/mel_df050_af100.wav",
      "sample_sounds2/melody/mel_df080_af100.wav",
      "sample_sounds2/melody/mel_df100_af100.wav",
  ];
  const audioFilesMelodiesAf3 = [
      "sample_sounds2/melody/mel_df010_af150.wav",
      "sample_sounds2/melody/mel_df050_af150.wav",
      "sample_sounds2/melody/mel_df080_af150.wav",
      "sample_sounds2/melody/mel_df100_af150.wav",
  ];

  const audioFilesMelodiesDf1 = [
      "sample_sounds2/melody/mel_df010_af075.wav",
      "sample_sounds2/melody/mel_df010_af100.wav",
      "sample_sounds2/melody/mel_df010_af150.wav",
  ];
  const audioFilesMelodiesDf2 = [
      "sample_sounds2/melody/mel_df050_af075.wav",
      "sample_sounds2/melody/mel_df050_af100.wav",
      "sample_sounds2/melody/mel_df050_af150.wav",
  ];
  const audioFilesMelodiesDf3 = [
      "sample_sounds2/melody/mel_df080_af150.wav",
      "sample_sounds2/melody/mel_df080_af075.wav",
      "sample_sounds2/melody/mel_df080_af100.wav",
  ];
  const audioFilesMelodiesDf4 = [
      "sample_sounds2/melody/mel_df100_af100.wav",
      "sample_sounds2/melody/mel_df100_af050.wav",
      "sample_sounds2/melody/mel_df100_af125.wav",
      "sample_sounds2/melody/mel_df100_af075.wav",
      "sample_sounds2/melody/mel_df100_af150.wav",
      "sample_sounds2/melody/mel_df100_af085.wav",
      "sample_sounds2/melody/mel_df100_af200.wav",
  ];
  const audioFilesMelodiesFixedAttack = [
      audioFilesMelodiesAf1,
      audioFilesMelodiesAf2,
      audioFilesMelodiesAf3,
  ];
  const audioFilesMelodiesFixedDecay = [
      audioFilesMelodiesDf1,
      audioFilesMelodiesDf2,
      audioFilesMelodiesDf3,
      audioFilesMelodiesDf4,
  ];
  const audioFilesMelodies = [
      audioFilesMelodiesFixedAttack,
      audioFilesMelodiesFixedDecay,
  ]
  const audioFilesChordsFixedAttack = [
      audioFilesChordsAf1,
      audioFilesChordsAf2,
      audioFilesChordsAf3,
  ];
  const audioFilesChordsFixedDecay = [
     audioFilesChordsDf1,
     audioFilesChordsDf2,
     audioFilesChordsDf3,
     audioFilesChordsDf4,
  ];
  const audioFilesChords = [
      audioFilesChordsFixedAttack,
      audioFilesChordsFixedDecay,
  ];
  const audioFiles = [
      audioFilesChords,
      audioFilesMelodies,
  ]

  const formLabelsLevel = [
      "Préfère ne pas répondre",
      "Aucune compétence musicale, n'a jamais joué d'un instrument",
      "Débutant, a déjà joué d'un instrument, amateur de musique",
      "Intermédiaire, joue couramment d'un instrument, audiophile",
      "Professionnel, a étudié formellement la musique ou est payé pour jouer",
  ];
  const formLabelsListen = [
      "Préfère ne pas répondre",
      "Écouteurs",
      "Appareil mobile",
      "Haut parleurs d'ordinateur portable",
      "Haut parleurs auxiliaires",
  ];


  const containerA = document.getElementById("SoundAContainer");
  const containerB = document.getElementById("SoundBContainer");
  const containerMessage = document.getElementById("messageContainer");
  const button = document.getElementById("choice-save");

  const buttonUserInfo = document.createElement("button");
  buttonUserInfo.textContent = "Enregistrer pour la session";

  const userInfoContainer = document.getElementById("userInfoForm");
  const buttonUserInfoRestart = document.createElement("button");
  buttonUserInfoRestart.textContent = "Nouvelle session utilisateur";
  buttonUserInfo.addEventListener("click", saveUserInfoAndHideQuestions);

  function loadRandomAudio(btn, firstRun=false) {
    containerMessage.innerHTML = "";
    if (firstRun == false){
      if (userMusicLevel === "-1" || userListenMode === "-1") {
          containerMessage.innerHTML = "Veuillez d'abord répondre au questionnaire ci-haut";
          return
      }
    }
    // Clear old content
    containerA.innerHTML = "";
    containerB.innerHTML = "";

    // Pick a random file
    const typeChoice = Math.floor(Math.random() * 2);
    const paramChoice = Math.floor(Math.random() * 2);
    const paramFiles = audioFiles[typeChoice][paramChoice]
    const paramValChoice = Math.floor(Math.random() * paramFiles.length);
    const audioFilesCurrent = paramFiles[paramValChoice];

    const randomIndexA = Math.floor(Math.random() * audioFilesCurrent.length);
    const randomIndexB = Math.floor(Math.random() * audioFilesCurrent.length);
    randomFileA = audioFilesCurrent[randomIndexA];
    randomFileB = audioFilesCurrent[randomIndexB];

    // Create audio element
    const audioElementA = document.createElement("audio");
    audioElementA.controls = true;
    audioElementA.src = randomFileA;
     
    // Create audio element
    const audioElementB = document.createElement("audio");
    audioElementB.controls = true;
    audioElementB.src = randomFileB;

    // Add to DOM
    containerA.appendChild(audioElementA);
    containerB.appendChild(audioElementB);

    let el = document.querySelector('input[name="sound-choice"]:checked');
    if (el) {
        let soundChoice = el.value;
        console.log(userId, userMusicLevel, userListenMode, randomFileA, randomFileB, soundChoice);
        choiceCounter += 1;
        if (choiceCounter == 2){
          containerMessage.innerHTML = "Bravo vous avez évalué 2 sons!";
        }
        else if (choiceCounter == 10){
          containerMessage.innerHTML = "Bravo vous avez évalué 20 sons!";
        }
    } else {
        if (firstRun == false){
          containerMessage.innerHTML += "Veuillez choisir un son";
        }
    }


    // Uncheck the buttons
    document.getElementById('SonA').checked = false;
    document.getElementById('SonB').checked = false;
  }

  function saveUserInfoAndHideQuestions() {
    userMusicLevel = document.querySelector('input[name="music_skills"]:checked').value;
    userListenMode = document.querySelector('input[name="listen_mode"]:checked').value;
    userInfoForm.innerHTML = "";
    rowContainer = document.createElement("div");
    rowContainer.className = "row2";
    rowContainer.appendChild(buttonUserInfoRestart);
    userInfoContainer.appendChild(rowContainer);
  }

  function restoreUserInfoForm() {
    rowContainer1 = document.createElement("div");
    rowContainer1.className = "row2";
    title1 = document.createElement("p");
    title1.innerHTML = "<b> Compétence musicale </b>";    
    rowContainer1.appendChild(title1);

    for (let i = 0; i < 5; i++) {
      levelInput = document.createElement("input");
      levelInput.type="radio";
      levelInput.id = "level" + i;
      levelInput.name = "music_skills";
      levelInput.value = i.toString();
      if (i == -1){
        levelInput.checked = "checked";
      }
      rowContainer1.appendChild(levelInput);
      levelInputLabel = document.createElement('label');
      levelInputLabel.textContent = formLabelsLevel[i]
      rowContainer1.appendChild(levelInputLabel);
      rowContainer1.appendChild(document.createElement('br'));
    }
    userInfoContainer.appendChild(rowContainer1);

    rowContainer2 = document.createElement("div");
    rowContainer2.className = "row2";
    title2 = document.createElement("p");
    title2.innerHTML = "<b> Méthode d'écoute </b>";    
    rowContainer2.appendChild(title2);
    for (let i = 0; i < 5; i++) {
      levelInput = document.createElement("input");
      levelInput.type="radio";
      levelInput.id = "listen" + i;
      levelInput.name = "listen_mode";
      levelInput.value = i.toString();
      if (i == -1){
        levelInput.checked = "checked";
      }
      rowContainer2.appendChild(levelInput);
      levelInputLabel = document.createElement('label');
      levelInputLabel.textContent = formLabelsListen[i]
      rowContainer2.appendChild(levelInputLabel);
      rowContainer2.appendChild(document.createElement('br'));
    }
    userInfoContainer.appendChild(rowContainer2);

    rowContainer3 = document.createElement("div");
    rowContainer3.className = "row2";
    rowContainer3.appendChild(buttonUserInfo);
    userInfoContainer.appendChild(rowContainer3);
  }
  
  // Add the user form
  restoreUserInfoForm();
  if (typeof userMusicLevel === "undefined") {
    userMusicLevel = "-1";
  }
  if (typeof userListenMode === "undefined") {
    userListenMode = "-1";
  }
  typeof choiceCounter === "undefined" && (choiceCounter = 0);
  if (typeof userId === "undefined") {
    fetch('https://api.ipify.org?format=json')
          .then(res => res.json())
          .then(data => {
          userId =  data.ip.replace(/\./g, "");
          });
  }

  // Load one on page load
  loadRandomAudio(button, firstRun=true);

  // Load new one on button click
  button.addEventListener("click", loadRandomAudio);

  // Save user info when the button is clicked
  buttonUserInfo.addEventListener("click", saveUserInfoAndHideQuestions);

  buttonUserInfoRestart.addEventListener("click", restoreUserInfoForm);
});

