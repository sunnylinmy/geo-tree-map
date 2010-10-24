function setTitleDescription(obj, measure, occupation) {
	  if (measure == "total") {
		  if (level != 1) {
			  measure = "% of people employed";
		  } else {
			  measure = "total number of people employed";			  
		  }
	  } else if (measure == "annualMeanWage") {
		  measure = "annual mean wage";	
	  } else if (measure == "ann10Wage") {
		  measure = "annual 10th percentile wage";	
	  } else if (measure == "ann25Wage") {
		  measure = "annual 25th percentile wage";	
	  } else if (measure == "ann50Wage") {
		  measure = "annual 50th percentile wage";	
	  } else if (measure == "ann75Wage") {
		  measure = "annual 75th percentile wage";	
	  } else if (measure == "ann90Wage") {
		  measure = "annual 90th percentile wage";	
	  }
	  obj = document.getElementById(obj);
	  var text = "Map Showing the " + measure + " per state in 2009";
	  
	  if (occupation.subcategory) {
		  text += occupation.subcategory;
	  } else if (occupation.category) {
		  text += " for " + occupation.category;
	  }
	  var description = document.createTextNode(text);
	  clearContainer(obj);
	  obj.appendChild(description);
}

function clearContainer(container) {
	  while (container.hasChildNodes()) {
	    container.removeChild(container.lastChild);
	  }
}