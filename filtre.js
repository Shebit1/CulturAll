document.getElementById('butonFiltru').addEventListener('click', function() {
  var panouFiltre = document.getElementById('panouFiltre');

  // Verificăm dacă panoul este deja deschis
  if (panouFiltre.style.right === '0px') {
      // Dacă este deschis, îl închidem
      panouFiltre.style.right = '-100%';
  } else {
      // Dacă este închis, îl deschidem
      panouFiltre.style.right = '0px';
  }
});

// Adăugăm un eveniment pentru butonul de "Aplică filtre"
document.getElementById('aplicaFiltre').addEventListener('click', function() {
  var data = document.getElementById('data').value;
  var locatie = document.getElementById('locatie').value;
  var categorie = document.getElementById('categorie').value;
  var intervalPret = document.getElementById('intervalPret').value;
  var rating = document.getElementById('rating').value;

  // Verificăm care tipuri de evenimente sunt bifate
  var tipEvenimente = [];
  if (document.getElementById('concert').checked) {
      tipEvenimente.push('Concert');
  }
  if (document.getElementById('festival').checked) {
      tipEvenimente.push('Festival');
  }
  if (document.getElementById('workshop').checked) {
      tipEvenimente.push('Workshop');
  }
  if (document.getElementById('expozitie').checked) {
      tipEvenimente.push('Expoziție');
  }

  // Afișăm filtrele selectate
  alert('Filtre aplicate:\n' +
      'Data: ' + data + '\n' +
      'Locație: ' + locatie + '\n' +
      'Categorie: ' + categorie + '\n' +
      'Preț: ' + intervalPret + ' RON\n' +
      'Rating: ' + rating + '\n' +
      'Tipuri Eveniment: ' + tipEvenimente.join(', ')
  );

  // După aplicare, putem închide panoul de filtre
  document.getElementById('panouFiltre').style.right = '-100%';
});

const sliderMin = document.getElementById("sliderMin");
const sliderMax = document.getElementById("sliderMax");
const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");

function sincronizeazaSliderSiInputuri() {
const valoareMin = parseInt(sliderMin.value, 10);
const valoareMax = parseInt(sliderMax.value, 10);

// Previne suprapunerea sliderelor
if (valoareMin >= valoareMax) {
  sliderMin.value = valoareMax - 1;
}

if (valoareMax <= valoareMin) {
  sliderMax.value = valoareMin + 1;
}

// Actualizează input-urile
minInput.value = sliderMin.value;
maxInput.value = sliderMax.value;
}

// Evenimente pentru slider
sliderMin.addEventListener("input", sincronizeazaSliderSiInputuri);
sliderMax.addEventListener("input", sincronizeazaSliderSiInputuri);

// Evenimente pentru input-uri
minInput.addEventListener("change", function () {
sliderMin.value = this.value;
sincronizeazaSliderSiInputuri();
});

maxInput.addEventListener("change", function () {
sliderMax.value = this.value;
sincronizeazaSliderSiInputuri();
});
