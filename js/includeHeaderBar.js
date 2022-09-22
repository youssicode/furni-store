document.getElementById("mainHeader").innerHTML = `
  <div class="container">
    <a class="logo" href="index.html" alt="Home">
      <i class="fas fa-lightbulb"></i>
      <span>furni</span>
    </a>
      <form role="search" class="srchForm" id="srch-form">
        <input type="search" id="srchField" name="s" autocomplete="off" placeholder="Search here..." />
        <i class="fas fa-search"></i>
      </form>
    <div role="navigation" class="socials">
      <label onclick="displayNav()" ><i class="fas fa-bars"></i></label>
      <label onclick="displaySrchForm()" class="searchLink"><i class="fas fa-search"></i></label>
      <label onclick="displayCart()"><i class="fas fa-shopping-cart"></i></label>
      <label onclick="displayUser()"><i class="fas fa-user"></i></label>
    </div>
  </div>
  `;