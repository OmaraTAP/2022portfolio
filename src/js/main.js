// You can include your own javascript here
// alert("hello, your main.js file was added properly.");
console.log("Logging from main.js, it was loaded.");
<html>
<body>
   <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="js/main.js"></script> 
</body>
<script>
  const toggleButton = document.getElementById('toggle-button');
  const naviList = document.getElementById('navi-list');

  toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
  })
</script>
</html>


