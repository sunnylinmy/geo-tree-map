x = 0;
y = 0;
function setVisible(obj, data) {
  setTimeout("placeIt('popupData')",0); 
  obj = document.getElementById(obj);
  if (obj.style.visibility == 'hidden' || obj.style.visibility == '') {
    obj.style.visibility = 'visible'
    var dataLbl = "Total Employed: " + getStateValue(data, majorCategory, minorCategory, "total");
    var totalLabel = document.createTextNode(dataLbl);
    dataLbl = "Annual Mean Wage: " + getStateValue(data, majorCategory, minorCategory, "annualMeanWage");
    var annualMeanWageLabel = document.createTextNode(dataLbl);
    dataLbl = "Annual 10% Wage: " + getStateValue(data, majorCategory, minorCategory, "ann10Wage");
    var ann10WageLabel = document.createTextNode(dataLbl);
    dataLbl = "Annual 25% Wage: " + getStateValue(data, majorCategory, minorCategory, "ann25Wage");
    var ann25WageLabel = document.createTextNode(dataLbl);
    dataLbl = "Annual Median Wage: " + getStateValue(data, majorCategory, minorCategory, "ann50Wage");
    var ann50WageLabel = document.createTextNode(dataLbl);
    dataLbl = "Annual 75% Wage: " + getStateValue(data, majorCategory, minorCategory, "ann75Wage");
    var ann75WageLabel = document.createTextNode(dataLbl);
    dataLbl = "Annual 90% Wage: " + getStateValue(data, majorCategory, minorCategory, "ann90Wage");
    var ann90WageLabel = document.createTextNode(dataLbl);
    var dataDiv = document.getElementById('dataDiv');
    clearContainer(dataDiv);
    dataDiv.appendChild(document.createElement('br'));
    dataDiv.appendChild(totalLabel);
    dataDiv.appendChild(document.createElement('br'));
    dataDiv.appendChild(annualMeanWageLabel);
    dataDiv.appendChild(document.createElement('br'));
    dataDiv.appendChild(ann10WageLabel);
    dataDiv.appendChild(document.createElement('br'));
    dataDiv.appendChild(ann25WageLabel);
    dataDiv.appendChild(document.createElement('br'));
    dataDiv.appendChild(ann50WageLabel);
    dataDiv.appendChild(document.createElement('br'));
    dataDiv.appendChild(ann75WageLabel);
    dataDiv.appendChild(document.createElement('br'));
    dataDiv.appendChild(ann90WageLabel);
  } else {
    obj.style.visibility = 'hidden';
  }
}

function init() {
  setTimeout("placeIt('popupData')",0); 
  if (window.Event) {
     document.captureEvents(Event.CLICK);
  }
  document.onclick = getCursorXY;
}

function getCursorXY(e) {
  x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
  y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

function placeIt(obj) {
  obj = document.getElementById(obj);
  obj.style.left = x + 'px' ;
  obj.style.top = y + 'px' ;
}

function clearContainer(container) {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
}

window.onload = init;
