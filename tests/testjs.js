/**
 * @author jkrizenesky
 */

/*at the heel about all those fancy libraries, JavaScript has it built-in:

    function httpGet(theUrl)
    {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
    }
*/


var fExcelApplication = new ActiveXObject("Excel.Application");
var fExcelSheet       = new ActiveXObject("Excel.Sheet");
var sExcelSaveLocation    = "C:\\Users\\JKrizenesky\\Documents\\Aptana Studio 3 Workspace\\skycaster";
//fExcelApplication.Visible = true;  -- opens the Excel window.

var xmlHTTP = new XMLHttpRequest();
//In Internet Explorer, you create the object using new ActiveXObject("Msxml2.XMLHTTP") 
//or new ActiveXObject("Microsoft.XMLHTTP") depending on the version of MSXML installed





//  year-month-date    format
//  getMonth is zero-base for some reason... so add +1.
var oDate = new Date();
var sCurrentYear  = oDate.getFullYear().toString();
var sCurrentMonth = (oDate.getMonth() + 1).toString();

//pull the billing start date from Excel
//    use this date in makeStartDate()
//var sBillingStart = 


//take the sBillingStart minus 1,
//    use sBillingEnd in as the Date value in makeEndDate()
//var sBillingEnd   =





//write a function to grab the proper Skycaster-accountnum  excel
//grab the billing date from that excel
//also format an email this way too? 
//    Possibly create a new excel sheet which includes the recorded bandwidth?



var sNocSiteURL = "http://10.7.4.70/nocsite/";
var sResponseTextXML = "";
var sStartDate       = "";
var sEndDate         = "";
var sName = "";  







//need to write a case for the new year billing - January back through December
function makeStartDate(){
	//getMonth is zero-base for some reason... leave
	

	sStartDate =  oDate.getFullYear().toString();
	
	sStartDate += "-" + oDate.getMonth().toString();
	//grabe the biling date from the excel sheet next
	sStartDate += "-" + oDate.getDate().toString();
	
	
}

function makeEndDate(){
	
	sEndDate =  oDate.getFullYear().toString();
	
	//getMonth is zero-base for some reason... so add +1.
	sEndDate += "-" + (oDate.getMonth() + 1).toString();
	
	//grabe the biling date from the excel sheet next
	sEndDate += "-" + (oDate.getDate() - 1).toString();
	
	
}





function getPage(){
	
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", sNocSiteURL, false);
	xmlHttp.send( null );
	
    
    xmlDoc = xmlHttp.responseXML;
	
	
	sResponseTextXML = xmlHttp.responseText;
	
	alert(sResponseTextXML);
	
	return xmlHttp.responseText;

}


function fillTextArea(){
	
	//document.getElementById("textArea").value = xmlHttp.responseText;
	document.getElementById("textArea").value = sResponseTextXML;
}


function filterDateForm(){
	
	alert(sResponseTextXML);
	makeStartDate();
    makeEndDate();

	/*
	if(sStartDate != "")
	{
		sStartDate = "value parsed";
	}
	*/
	
	
	/*sStartDate = sResponseTextXML.getElementsByID("startdate").value;*/
	
	document.getElementById("textArea").value = "Start Date: " + sStartDate + '\n' +
	                                            "End Date: "   + sEndDate;
	
}


function getFormData(){
	
	sName = document.getElementById("name").value;
	alert(sName);
	
	document.getElementById("startDate").value = sStartDate;
	alert(document.getElementById("startDate").value);
}



function func1(){
	
	alert("this is the first");
	makeStartDate();
	document.getElementById("startDate").innerHTML = sStartDate;
}

window.onload = func1;






function helloWorld()
{
	alert("Hello World!");
}

