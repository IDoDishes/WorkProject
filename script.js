/**
 * @author jkrizenesky
 */
var sHelloWorld = "Hello World";

var fExcelApplication = new ActiveXObject("Excel.Application");
var fExcelSheet       = new ActiveXObject("Excel.Sheet");
var sExcelSaveLocation    = "C:\\Users\\JKrizenesky\\Documents\\Aptana Studio 3 Workspace\\skycaster";
//fExcelApplication.Visible = true;  -- opens the Excel window.


/*
//filepath directory  C:\Users\JKrizenesky\Documents\Aptana Studio 3 Workspace\skycaster
JavaScript

// Make Excel visible through the Application object.
ExcelSheet.Application.Visible = true;

// Place some text in the first cell of the sheet.
ExcelSheet.ActiveSheet.Cells(1,1).Value = "This is column A, row 1";

// Save the sheet.
ExcelSheet.SaveAs("C:\\TEST.XLS");

// Close Excel with the Quit method on the Application object.
ExcelSheet.Application.Quit();
*/


var getData = function()
{

	alert(sExcelSaveLocation);
	
	
};




var parseFile = function(){
	alert("parseFile");
	
	
};





var generateReport = function()
{
	alert("generateReport");
	fExcelApplication.Visible = true;
	
	for(var iRow = 1; iRow < 5; iRow++)
	{
		for(var iColumn = 1; iColumn < 5; iColumn++)
		
			fExcelSheet.ActiveSheet.Cells(iRow, iColumn).Value = "This is column: " + iColumn + " Row: " + iRow;
	}

	
	
	
	
	fExcelSheet.SaveAs(sExcelSaveLocation);
	fExcelSheet.Application.Quit();
	//fExcelApplication.Visible = false;
	
};




var myFunction = function(){
	alert(sHelloWorld);
	fExcelApplication.Visible = false;
};




/*
	    <button type="button" onclick="getData()">GetTrafficData</button>
		<button type="button" onclick="parseFile()">parseFile</button>
	    <button type="button" onclick="generateReport()">GenerateReport</button>
		<button type="button" onclick="myFunction()">Alert!</button>
*/