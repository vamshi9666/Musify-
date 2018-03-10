
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
        chrome.runtime.sendMessage(files);
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
  console.log("song is null")
}
var _next = 0,
  len,
  urls = [],
  check,
  end,
  fileNames = [],
  fileName = "";

function setup() {
  console.log('started');
}

function draw() {
  songs = document.getElementById("songs"),
    myAudio = document.getElementById("myAudio");
  songs.addEventListener('change', function () {
    var files = songs.files;
    var filesLength = files.length;
    if (check !== files) {
      for (var i = 0; i < filesLength; i++) {
        var checker = urls.concat(URL.createObjectURL(files[i]));
        if (checker !== "") {
          urls = checker;
          check = files;
          fileNames.push(files[i].name);
        }
      }
      len = urls.length;
      if (checker !== "") {
        for (var i = 0; i < fileNames.length; i++) {
          var split = fileNames[i].split('.');
          split.pop();
          var join = split.join('');
          fileName += '<li>' + join + '</li>';
          var btn = document.createElement("BUTTON");
          btn.innerHTML = `${i + 1}`;
          document.body.appendChild(btn);
          btn.addEventListener("click", function (e) {
            var x = e.target.innerHTML;
            _next = x - 1;
            next(_next);
          }, false);
        }
      }
      document.getElementById('list').innerHTML = fileName;
      fileName = "";
    }
    if (len) {
      next(_next);
    }
  });
  myAudio.addEventListener("ended", function () {
    if (end === _next) {
      _next += 1;
      end = _next + 1;
      next(_next);
      if (len <= _next) {
        _next = 0;
        next(_next);
      }
    }
  });
}
}
