function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];
    total += Number(payment[type]);
  }

  return total;
}

function calculateTipPercent(billAmt, tipAmt) {
  return Math.round((tipAmt / billAmt) * 100);
}

function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;
  tr.append(newTd);
}

function appendDeleteBtn(tr, type) {
  let newTd = document.createElement('td');
  newTd.className = 'deleteBtn';
  newTd.innerText = 'X';

  newTd.addEventListener('click', removeElement);

  tr.append(newTd);
}

function removeElement(evt) {
  let element = evt.target.closest('tr');
  delete allServers[element.id];
  element.parentNode.removeChild(element);
  updateServerTable();
}
