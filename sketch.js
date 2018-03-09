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

function next(n) {
  var url = urls[n];
  myAudio.setAttribute('src', url);
  var playPromise = myAudio.play();

  if (playPromise != undefined) {
    playPromise.then(blob => {
      end = _next;
      myAudio.srcObject = blob;
      return myAudio.play()
    })
      .catch((error) => {
        console.log(error);
      });
  }
}