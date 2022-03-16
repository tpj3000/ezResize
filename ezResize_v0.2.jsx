// A simple resize script for Adobe Photoshop
// Timothy Paton Jr.
// Photographer and Imaging Specialist at Chicago History Museum
// 2022

// Additional functionality needed as follows:
// Recursively search from top level folder.
// Duplicate file structure for saving.

startRulerUnits = app.preferences.rulerUnits;
app.preferences.rulerUnites = Units.PIXELS;
displayDialogs = DialogModes.NO

var openFile = app.activeDocument;
var width = openFile.width;
var height = openFile.height;


// adjust these variables to new height and width in pixels 
var newWidth = 2000;
var newHeight = 2000;

var targetPath = openFile.path; 
var outputFolder = new Folder(targetPath + '_resized');
if (!outputFolder.exists) {
    outputFolder.create();
}

// Resize based on orientation
function ezResize(){
    if (width > height){
        openFile.resizeImage(UnitValue(newWidth,'px'), null, 90, ResampleMethod.BICUBICSHARPER);
    }
        else {
            openFile.resizeImage(null, UnitValue(newHeight,'px'), 90, ResampleMethod.BICUBICSHARPER);
        }
    
}

ezResize();

