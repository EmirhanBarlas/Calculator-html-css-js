let result = document.getElementById('result');

function insertValue(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    let evalResult = eval(result.value);
    if (evalResult === Infinity) {
      result.value = 'Suyunu Çıkarma';
    } else {
      result.value = evalResult;
    }
  } catch (error) {
    result.value = '';
  }
}
