function setVisible(obj, state, occupation, show, treemapNode) {
	obj = document.getElementById(obj);
	if (show == true && getValue(state.code, occupation, selectedMeasure) != -1 && getValue(state.code, occupation, selectedMeasure) != undefined) {
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
		
		if (treemapNode) {
			obj.style.left = Math.floor(treemapNode.x + treemapNode.dx + 245) + 'px';
			var newHeight = obj.offsetHeight;
			var currentTop = treemapNode.y + 430; // + treemapNode.dy/2
			obj.style.top = Math.floor(currentTop - newHeight) + 'px';
		} else {
			obj.style.left = (geoScale(state.centLatLon).x + 245 + 90) +  'px';
			obj.style.top = geoScale(state.centLatLon).y + 'px';	
		}
		
	} else {
		obj.style.visibility = 'hidden';
	}
}

function clearContainer(container) {
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
}
