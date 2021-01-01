// var video=document.getElementById("video");
// navigator.getUserMedia=navigator.getUserMedia || navigator.webKitGetUserMedia ||navigator.mozGetUserMedia || navigator.msGetUserMedia
// || navigator.oGetUserMedia;
// if(navigator.getUserMedia){
//     navigator.getUserMedia({video:true},web,error);
// }
// function web(stream){
//     video.src=window.URL.createObjectURL(stream);
// }
// // console.log(navigator.getUserMedia);
// function error(){
//     alert("error");
// }
const obj = {hello: 'world'};
const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});
const text =  (new Response(blob)).text();
const text1 = blob.text();

console.log(text,text1,"text ss")
console.log("blob iss",blob)
const reader = new FileReader();
reader.addEventListener('loadend', () => {
   // reader.result contains the contents of blob as a typed array
   console.log(reader.result,"result ss")
});
reader.readAsArrayBuffer(blob);
var video = document.querySelector("#videoElement");
// if (navigator.getUserMedia) {
//   console.log("hiii",navigator.getUserMedia)
  // navigator.mediaDevices.getUserMedia({ video: true })
  //   .then(function (stream) {
  //     video.srcObject = stream;
  //     console.log(stream,"stream iss")
  //   })
  //   .catch(function (err0r) {
  //     console.log("Something went wrong!");
  //   });
// }
function on(){
  console.log("vedio on")
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
      console.log(stream,"stream iss")
    })
    // .catch(function (err0r) {
    //   console.log("Something went wrong!");
    // });
}
function off(){
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = null;
      console.log(stream,"stream iss")
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}