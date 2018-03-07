var _next = 0,
      files,
      len;
  
function next(n) {
  var url = URL.createObjectURL(files[n]);
  myAudio.setAttribute('src', url);
  var playPromise =  myAudio.play();
  
  if(playPromise != undefined){
    playPromise.then(myAudio.play())
    .catch((error) => {
          console.log(error);
    })
  }

}    

function setup(){
  var  myAudio = document.getElementById("myAudio");
}
function draw() {
  var songs = document.getElementById("songs");
  if (songs) {

    songs.addEventListener('change', function () {
      files = songs.files;
      len = files.length;
      if (len) {
        next(_next);
      }
    });
    myAudio.addEventListener("ended", function () {
      _next += 1;
      next(_next);
      console.log(len, _next);
      if ((len - 1) == _next) {
        _next = -1;
      }
    });
}
else{
  console.log("song si snull")
}
}