
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

   
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

  
    receivedEvent: function(id) 
    {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

document.getElementById("uploadFile").addEventListener("click", uploadFile);


document.getElementById("downloadFile").addEventListener("click", downloadFile);

var fileTransfer;
var uri;
var fileURL;

 
function downloadFile() {

    fileTransfer = new FileTransfer();

    uri = "http://www.pdf995.com/samples/pdf.pdf";

    fileURL =cordova.file.externalApplicationStorageDirectory+'pdf.pdf',

    fileTransfer.download

    (uri , fileURL,

    function(entry)
     {

        alert("download complete: " + entry.toURL());
        console.log("download complete: " + entry.toURL());

    },
    function(error) 
    {
        console.log("download source error" + error.source);
        console.log("download target error" + error.target);
        console.log("upload code error" + error.code);
        alert("download error source " + error.source);
    },
    false,
     {
        headers: 
        {
           "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
        }
    }
);
}


 function uploadFile(){
   
   
     alert("upload complete")

     console.log('upload complete')
 }
 
