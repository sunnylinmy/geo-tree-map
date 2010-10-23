
function setTitleDescription(obj, desc) {
	  if (desc == "total") {
		  if (level != 1) {
			  desc = "% total number of people employed";
		  } else {
			  desc = "total number of people employed";			  
		  }
	  } else if (desc == "annualMeanWage") {
		  desc = "annual mean wage";	
	  } else if (desc == "ann10Wage") {
		  desc = "annual 10th percentile wage";	
	  } else if (desc == "ann25Wage") {
		  desc = "annual 25th percentile wage";	
	  } else if (desc == "ann50Wage") {
		  desc = "annual 50th percentile wage";	
	  } else if (desc == "ann75Wage") {
		  desc = "annual 75th percentile wage";	
	  } else if (desc == "ann90Wage") {
		  desc = "annual 90th percentile wage";	
	  }
	  obj = document.getElementById(obj);
	  var text = "Map Showing the " + desc + " per state in 2009";
	  
	  if (minorCategory) {
		  text += minorCategory;
	  } else if (majorCategory) {
		  text+= " for " + majorCategory;
	  }
	  var description = document.createTextNode(text);
	  obj.appendChild(description);
}

function clearContainer(container) {
	  while (container.hasChildNodes()) {
	    container.removeChild(container.lastChild);
	  }
}