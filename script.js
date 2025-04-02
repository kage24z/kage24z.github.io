const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

// Obtenemos los elementos del DOM
const categorySelect = document.getElementById('category');
const unitInput = document.getElementById('unitInput');
const valueInput = document.getElementById('valueInput');
const convertButton = document.getElementById('convertButton');
const resultElements = document.querySelectorAll('#results p span');

// Función para actualizar las unidades según la categoría
function updateUnits() {
  const category = categorySelect.value;
  let units = [];

  switch (category) {
    case 'masa':
      units = ['ton', 'kg', 'g', 'mg', 'ug'];
      break;
    case 'volumen':
      units = ['gal', 'm3', 'L', 'mL', 'uL'];
      break;
    case 'distancia':
      units = ['yardas', 'pulgada', 'm', 'cm', 'km', 'mm'];
      break;
    case 'densidad':
      units = ['kg/m3', 'g/mL', 'kg/L', 'g/L'];
      break;
    case 'presion':
      units = ['mmHg', 'atm', 'Pa', 'psi', 'Torr'];
      break;
    case 'tiempo':
      units = ['s', 'min', 'hora'];
      break;
    case 'fuerza':
      units = ['N', 'kN', 'µN', 'Dina', 'kgf'];
      break;
    case 'energia':
      units = ['KJ', 'Kcal'];
      break;
  }

  // Limpiar opciones y agregar las nuevas
  unitInput.innerHTML = '';
  units.forEach(unit => {
    const option = document.createElement('option');
    option.value = unit;
    option.textContent = unit;
    unitInput.appendChild(option);
  });
}

// Función de conversión
function convert() {
  const value = parseFloat(valueInput.value);
  const category = categorySelect.value;
  const unit = unitInput.value;

  if (isNaN(value)) {
    alert('Por favor, ingresa un valor válido');
    return;
  }

  let results = [];

  switch (category) {
    case 'masa':
      results = convertMasa(value, unit);
      break;
    case 'volumen':
      results = convertVolumen(value, unit);
      break;
    case 'distancia':
      results = convertDistancia(value, unit);
      break;
    case 'densidad':
      results = convertDensidad(value, unit);
      break;
    case 'presion':
      results = convertPresion(value, unit);
      break;
    case 'tiempo':
      results = convertTiempo(value, unit);
      break;
    case 'fuerza':
      results = convertFuerza(value, unit);
      break;
    case 'energia':
      results = convertEnergia(value, unit);
      break;
  }

  // Mostrar resultados con la unidad correspondiente
  resultElements.forEach((resultElement, index) => {
    if (results[index]) {
      resultElement.textContent = `${results[index].value} ${results[index].unit}`;
    } else {
      resultElement.textContent = '';
    }
  });
}

// Funciones para cada tipo de conversión (completas)

function convertMasa(value, unit) {
  switch (unit) {
    case 'ton':
      return [
        { value: value, unit: 'ton' },
        { value: value * 1000, unit: 'kg' },
        { value: value * 1e6, unit: 'g' },
        { value: value * 1e9, unit: 'mg' },
        { value: value * 1e12, unit: 'ug' }
      ];
    case 'kg':
      return [
        { value: value / 1000, unit: 'ton' },
        { value: value, unit: 'kg' },
        { value: value * 1000, unit: 'g' },
        { value: value * 1e6, unit: 'mg' },
        { value: value * 1e9, unit: 'ug' }
      ];
    case 'g':
      return [
        { value: value / 1e6, unit: 'ton' },
        { value: value / 1000, unit: 'kg' },
        { value: value, unit: 'g' },
        { value: value * 1000, unit: 'mg' },
        { value: value * 1000, unit: 'ug' }
      ];
    case 'mg':
      return [
        { value: value / 1e9, unit: 'ton' },
        { value: value / 1e6, unit: 'kg' },
        { value: value / 1000, unit: 'g' },
        { value: value, unit: 'mg' },
        { value: value * 1000, unit: 'ug' }
      ];
    case 'ug':
      return [
        { value: value / 1e12, unit: 'ton' },
        { value: value / 1e9, unit: 'kg' },
        { value: value / 1e6, unit: 'g' },
        { value: value / 1000, unit: 'mg' },
        { value: value, unit: 'ug' }
      ];
  }
}

function convertVolumen(value, unit) {
  switch (unit) {
    case 'gal':
      return [
        { value: value, unit: 'gal' },
        { value: value * 3.78541, unit: 'L' },
        { value: value * 3.78541e3, unit: 'mL' },
        { value: value * 3.78541e6, unit: 'uL' },
        { value: value * 3.78541e9, unit: 'm3' }
      ];
    case 'm3':
      return [
        { value: value / 3.78541, unit: 'gal' },
        { value: value * 1000, unit: 'L' },
        { value: value * 1e6, unit: 'mL' },
        { value: value * 1e9, unit: 'uL' },
        { value: value, unit: 'm3' }
      ];
    case 'L':
      return [
        { value: value / 3.78541, unit: 'gal' },
        { value: value, unit: 'L' },
        { value: value * 1000, unit: 'mL' },
        { value: value * 1e6, unit: 'uL' },
        { value: value / 1000, unit: 'm3' }
      ];
    case 'mL':
      return [
        { value: value / 3.78541e6, unit: 'gal' },
        { value: value / 1e6, unit: 'L' },
        { value: value, unit: 'mL' },
        { value: value * 1000, unit: 'uL' },
        { value: value / 1e6, unit: 'm3' }
      ];
    case 'uL':
      return [
        { value: value / 3.78541e9, unit: 'gal' },
        { value: value / 1e9, unit: 'L' },
        { value: value / 1e6, unit: 'mL' },
        { value: value, unit: 'uL' },
        { value: value / 1e9, unit: 'm3' }
      ];
  }
}

// Función de conversión para Distancia
function convertDistancia(value, unit) {
    switch (unit) {
      case 'yardas':
        return [
          { value: value, unit: 'yardas' },
          { value: value * 0.9144, unit: 'm' },
          { value: value * 91.44, unit: 'cm' },
          { value: value * 914.4, unit: 'mm' },
          { value: value * 0.0009144, unit: 'km' },
          { value: value * 36, unit: 'pulgada' }
        ];
      case 'pulgada':
        return [
          { value: value / 36, unit: 'yardas' },
          { value: value * 0.0254, unit: 'm' },
          { value: value * 2.54, unit: 'cm' },
          { value: value * 25.4, unit: 'mm' },
          { value: value * 0.0000254, unit: 'km' },
          { value: value, unit: 'pulgada' }
        ];
      case 'm':
        return [
          { value: value / 0.9144, unit: 'yardas' },
          { value: value, unit: 'm' },
          { value: value * 100, unit: 'cm' },
          { value: value * 1000, unit: 'mm' },
          { value: value / 1000, unit: 'km' },
          { value: value * 39.3701, unit: 'pulgada' }
        ];
      case 'cm':
        return [
          { value: value / 91.44, unit: 'yardas' },
          { value: value / 100, unit: 'm' },
          { value: value, unit: 'cm' },
          { value: value * 10, unit: 'mm' },
          { value: value / 100000, unit: 'km' },
          { value: value * 0.393701, unit: 'pulgada' }
        ];
      case 'km':
        return [
          { value: value / 0.0009144, unit: 'yardas' },
          { value: value * 1000, unit: 'm' },
          { value: value * 100000, unit: 'cm' },
          { value: value * 1000000, unit: 'mm' },
          { value: value, unit: 'km' },
          { value: value * 39370.1, unit: 'pulgada' }
        ];
      case 'mm':
        return [
          { value: value / 914.4, unit: 'yardas' },
          { value: value / 1000, unit: 'm' },
          { value: value / 10, unit: 'cm' },
          { value: value, unit: 'mm' },
          { value: value / 1000000, unit: 'km' },
          { value: value * 0.0393701, unit: 'pulgada' }
        ];
    }
  }
  
  // Función de conversión para Densidad
  function convertDensidad(value, unit) {
    switch (unit) {
      case 'kg/m3':
        return [
          { value: value, unit: 'kg/m3' },
          { value: value / 1000, unit: 'g/mL' },
          { value: value / 1000, unit: 'kg/L' },
          { value: value, unit: 'g/L' }
        ];
      case 'g/mL':
        return [
          { value: value * 1000, unit: 'kg/m3' },
          { value: value, unit: 'g/mL' },
          { value: value * 1000, unit: 'kg/L' },
          { value: value * 1000, unit: 'g/L' }
        ];
      case 'kg/L':
        return [
          { value: value * 1000, unit: 'kg/m3' },
          { value: value / 1000, unit: 'g/mL' },
          { value: value, unit: 'kg/L' },
          { value: value * 1000, unit: 'g/L' }
        ];
      case 'g/L':
        return [
          { value: value * 1000, unit: 'kg/m3' },
          { value: value / 1000, unit: 'g/mL' },
          { value: value / 1000, unit: 'kg/L' },
          { value: value, unit: 'g/L' }
        ];
    }
  }
  
  // Función de conversión para Presión
  function convertPresion(value, unit) {
    switch (unit) {
      case 'mmHg':
        return [
          { value: value, unit: 'mmHg' },
          { value: value / 760, unit: 'atm' },
          { value: value * 133.322, unit: 'Pa' },
          { value: value * 0.0193368, unit: 'psi' },
          { value: value, unit: 'Torr' }
        ];
      case 'atm':
        return [
          { value: value * 760, unit: 'mmHg' },
          { value: value, unit: 'atm' },
          { value: value * 101325, unit: 'Pa' },
          { value: value * 14.696, unit: 'psi' },
          { value: value * 760, unit: 'Torr' }
        ];
      case 'Pa':
        return [
          { value: value / 133.322, unit: 'mmHg' },
          { value: value / 101325, unit: 'atm' },
          { value: value, unit: 'Pa' },
          { value: value / 6895, unit: 'psi' },
          { value: value / 133.322, unit: 'Torr' }
        ];
      case 'psi':
        return [
          { value: value / 0.0193368, unit: 'mmHg' },
          { value: value / 14.696, unit: 'atm' },
          { value: value * 6895, unit: 'Pa' },
          { value: value, unit: 'psi' },
          { value: value * 51.7149, unit: 'Torr' }
        ];
      case 'Torr':
        return [
          { value: value, unit: 'mmHg' },
          { value: value / 760, unit: 'atm' },
          { value: value * 133.322, unit: 'Pa' },
          { value: value / 51.7149, unit: 'psi' },
          { value: value, unit: 'Torr' }
        ];
    }
  }
  
  // Función de conversión para Tiempo
  function convertTiempo(value, unit) {
    switch (unit) {
      case 's':
        return [
          { value: value, unit: 's' },
          { value: value / 60, unit: 'min' },
          { value: value / 3600, unit: 'hora' }
        ];
      case 'min':
        return [
          { value: value * 60, unit: 's' },
          { value: value, unit: 'min' },
          { value: value / 60, unit: 'hora' }
        ];
      case 'hora':
        return [
          { value: value * 3600, unit: 's' },
          { value: value * 60, unit: 'min' },
          { value: value, unit: 'hora' }
        ];
    }
  }
  
  // Función de conversión para Fuerza
  function convertFuerza(value, unit) {
    switch (unit) {
      case 'N':
        return [
          { value: value, unit: 'N' },
          { value: value / 1000, unit: 'kN' },
          { value: value * 1e6, unit: 'µN' },
          { value: value * 1e5, unit: 'Dina' },
          { value: value / 9.81, unit: 'kgf' }
        ];
      case 'kN':
        return [
          { value: value * 1000, unit: 'N' },
          { value: value, unit: 'kN' },
          { value: value * 1e9, unit: 'µN' },
          { value: value * 1e8, unit: 'Dina' },
          { value: value * 101.97, unit: 'kgf' }
        ];
      case 'µN':
        return [
          { value: value / 1e6, unit: 'N' },
          { value: value / 1e9, unit: 'kN' },
          { value: value, unit: 'µN' },
          { value: value / 1000, unit: 'Dina' },
          { value: value / 9.81e6, unit: 'kgf' }
        ];
      case 'Dina':
        return [
          { value: value / 1e5, unit: 'N' },
          { value: value / 1e8, unit: 'kN' },
          { value: value * 1000, unit: 'µN' },
          { value: value, unit: 'Dina' },
          { value: value / 9.81e5, unit: 'kgf' }
        ];
      case 'kgf':
        return [
          { value: value * 9.81, unit: 'N' },
          { value: value / 101.97, unit: 'kN' },
          { value: value * 9.81e6, unit: 'µN' },
          { value: value * 9.81e5, unit: 'Dina' },
          { value: value, unit: 'kgf' }
        ];
    }
  }
  
  // Función de conversión para Energía
  function convertEnergia(value, unit) {
    switch (unit) {
      case 'KJ':
        return [
          { value: value, unit: 'KJ' },
          { value: value * 0.239006, unit: 'Kcal' }
        ];
      case 'Kcal':
        return [
          { value: value / 0.239006, unit: 'KJ' },
          { value: value, unit: 'Kcal' }
        ];
    }
  }
  

convertButton.addEventListener('click', convert);
categorySelect.addEventListener('change', updateUnits);

// Inicializar las unidades al cargar
updateUnits();


botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})
