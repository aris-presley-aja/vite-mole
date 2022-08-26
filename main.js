import './style.css'
import javascriptLogo from './javascript.svg'

{/* <script language="JavaScript" type="text/javascript" src="../../script.js"></script> */}

document.querySelector('#app').innerHTML = `
<header>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
    <div class="px-6 w-full flex flex-wrap items-center justify-between">
      <div class="flex items-center">

      </div>
      
<div class="flex space-x-2 justify-center flex-wrap">
<button type="button" class="
  px-6
  py-2.5
  bg-blue-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out
" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
  Popover on top
</button>
<button type="button" class="
  px-6
  py-2.5
  bg-blue-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out
" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
  Popover on right
</button>
<button type="button" class="
  px-6
  py-2.5
  bg-blue-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out
" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
  Popover on bottom
</button>
<button type="button" class="
  px-6
  py-2.5
  bg-blue-600
  text-white
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out
" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
  Popover on left
</button>
</div>
<!-- Required popper.js -->
<script src="https://unpkg.com/@popperjs/core@2.9.1/dist/umd/popper.min.js" charset="utf-8"></script>
<script>
var popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new Popover(popoverTriggerEl);
});
</script>
    </div>
  </nav>
  <!-- Navbar -->

  <!-- Background image -->
 
 
  <!-- Background image -->
</header>

  <div>

    <div class="card">
   

    <h1>Whack-a-mole!</h1>
    <h1 class="score"> 0</h1>
    <div class = "start">
    <button onClick="startGame()">Start!</button>
    </div>
  
    <div class="game">
      <div class="hole hole1">
        <div class="mole"></div>
      </div>
      <div class="hole hole2">
        <div class="mole"></div>
      </div>
      <div class="hole hole3">
        <div class="mole"></div>
      </div>
      <div class="hole hole4">
        <div class="mole"></div>
      </div>
      <div class="hole hole5">
        <div class="mole"></div>
      </div>
      <div class="hole hole6">
        <div class="mole"></div>
      </div>
    <div class="hole hole7">
      <div class="mole"></div>
    </div>
    <div class="hole hole8">
      <div class="mole"></div>
    </div>
    <div class="hole hole9">
      <div class="mole"></div>
    </div>
  </div>
  
  <script src="././script.js"></script>
</div>
    <div class="card">

    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

