x = 0;
y = 0;
function setVisible(obj, state, occupation, show) {
	setTimeout("placeIt('popupData')",0); 
	obj = document.getElementById(obj);
	if (show == true) {
		obj.style.visibility = 'visible'
		if (level(occupation) != 1) {
			var dataLbl = "Total % Employed: " + getValue(state.code, occupation, "total") + "%";		
		} else {
			var dataLbl = "Total Employed: " + getValue(state.code, occupation, "total");
		}
		var ocupationInfo;
		if (occupation.subcategory) {
			occupationInfo = occupation.subcategory;
		} else if (occupation.category) {
			occupationInfo = occupation.category;
		}
		var titleDiv = document.createElement('div');
		titleDiv.setAttribute("id", "titlePopupDiv");
		var popupTitleLabel = document.createTextNode(occupationInfo + " in " + state.name);
		titleDiv.appendChild(popupTitleLabel);
		var totalLabel = document.createTextNode(dataLbl);
		dataLbl = "Annual Mean Wage: " + getValue(state.code, occupation, "annualMeanWage");
		var annualMeanWageLabel = document.createTextNode(dataLbl);
		dataLbl = "Annual 10% Wage: " + getValue(state.code, occupation, "ann10Wage");
		var ann10WageLabel = document.createTextNode(dataLbl);
		dataLbl = "Annual 25% Wage: " + getValue(state.code, occupation, "ann25Wage");
		var ann25WageLabel = document.createTextNode(dataLbl);
		dataLbl = "Annual Median Wage: " + getValue(state.code, occupation, "ann50Wage");
		var ann50WageLabel = document.createTextNode(dataLbl);
		dataLbl = "Annual 75% Wage: " + getValue(state.code, occupation, "ann75Wage");
		var ann75WageLabel = document.createTextNode(dataLbl);
		dataLbl = "Annual 90% Wage: " + getValue(state.code, occupation, "ann90Wage");
		var ann90WageLabel = document.createTextNode(dataLbl);
		clearContainer(obj);
		
		obj.appendChild(titleDiv);
		obj.appendChild(totalLabel);
		obj.appendChild(document.createElement('br'));
		obj.appendChild(annualMeanWageLabel);
		obj.appendChild(document.createElement('br'));
		obj.appendChild(ann10WageLabel);
		obj.appendChild(document.createElement('br'));
		obj.appendChild(ann25WageLabel);
		obj.appendChild(document.createElement('br'));
		obj.appendChild(ann50WageLabel);
		obj.appendChild(document.createElement('br'));
		obj.appendChild(ann75WageLabel);
		obj.appendChild(document.createElement('br'));
		obj.appendChild(ann90WageLabel);
	} else {
		obj.style.visibility = 'hidden';
	}
}

function init() {
	setTimeout("placeIt('popupData')",0); 
	if (window.Event) {
		 document.captureEvents(Event.CLICK);
	}
	document.onmousemove = getCursorXY;
}

function getCursorXY(e) {
	x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
	x+=5;
	y+=5;
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
