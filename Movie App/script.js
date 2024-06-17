document.getElementById("3idiots").addEventListener("click", function() {
    window.location.href = "https://movieapne.co/movie/3-idiots";
  });

  document.getElementById("uri").addEventListener("click", function() {
    window.location.href = "https://movieapne.co/movie/Uri:-The-Surgical-Strike";
  });

  document.getElementById("Article370").addEventListener("click", function() {
    window.location.href = "https://movieapne.co/movie/Article-370";
  });

  document.getElementById("kashmir_files").addEventListener("click", function() {
    window.location.href = "https://movieapne.co/movie/The-Kashmir-Filese";
  });

  document.getElementById("fault").addEventListener("click", function() {
    window.location.href = "https://movieapne.co/movie/Uri:-The-Surgical-Strike";
  });

  document.getElementById("kantara").addEventListener("click", function() {
    window.location.href = "https://movieapne.co/movie/Kantara";
  });

  document.getElementById("KGF1").addEventListener("click", function() {
    window.location.href = "https://movieapne.co/movie/K.G.F:-Chapter-1";
  });

  document.getElementById("KGF2").addEventListener("click", function() {
    window.location.href = "https://movieapne.co/movie/KGF-Chapter-2";
  });

  document.getElementById("salaar").addEventListener("click", function() {
    window.location.href = "https://movieapne.co/movie/Salaar:-Part-1--Ceasefire";
  });

  document.getElementById("search_button").addEventListener("submit", function(event) {
    // Check if the input is empty
    if (document.getElementById("search").value === "") {
      event.preventDefault(); // Prevent default form submission
      window.location.href = "working.html"; // Redirect to your page
    }
  });