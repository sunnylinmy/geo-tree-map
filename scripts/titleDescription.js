function setTitleDescription(obj, measure, occupation) {
	
	var line1 = ""; // measure name
	var line2 = ""; // category/subcategory
	var line3 = ""; // occupation title
	
	if (measure == "total") {
		if (level != 1) {
			line1 = "Percent of employees";
		} else {
			line1 = "Total number of employees";				
		}
	} else if (measure == "annualMeanWage") {
		line1 = "Annual mean wage";	
	} else if (measure == "ann10Wage") {
		line1 = "Annual 10th percentile wage";	
	} else if (measure == "ann25Wage") {
		line1 = "Annual 25th percentile wage";	
	} else if (measure == "ann50Wage") {
		line1 = "Annual 50th percentile wage";	
	} else if (measure == "ann75Wage") {
		line1 = "Annual 75th percentile wage";	
	} else if (measure == "ann90Wage") {
		line1 = "Annual 90th percentile wage";	
	}
	
	titleDiv = document.getElementById(obj);
	
	if (occupation.subcategory) {
		line2 = "in category";
		line3 = occupation.subcategory;
	} else if (occupation.category) {
		line2 = "in subcategory";
		line3 = occupation.category;
	}
	
	var lineNodes = [document.createTextNode(line1), document.createTextNode(line2), document.createTextNode(line3)];
	var childNodes = titleDiv.childNodes;
	for (var i=0; i<3; i++) {
		clearContainer(childNodes[i]);
		childNodes[i].appendChild(lineNodes[i]);
	}
}

function clearContainer(container) {
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
}
