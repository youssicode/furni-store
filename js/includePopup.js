document.getElementById("popupId").innerHTML = `
<div id="rightNav">
        <div id="closerId" onclick="closePopup()"><i class="fas fa-times"></i></div>

        <div id="navId" class="navContainer">
          <ul>
            <li><a href="./index.html">home</a></li>
            <li><a href="./shop.html">shop</a></li>
            <li><a href="./about.html">about</a></li>
            <li><a href="./team.html">team</a></li>
            <li><a href="./blog.html">blog</a></li>
            <li><a href="./contact.html">contact</a></li>
          </ul>
        </div>

        <div id="cartId" class="cartContainer">
          <div id="cartItem1" class="cartItem"> 
            <img src="./images/cart-img-1.jpg" alt="item1">
            <div class="itemDesc">
              <h5>modern furniture</h5>
              <p>1x $140.00</p>
            </div>
            <!-- this.id => Id of the element we clicked on-->
            <i  onclick="deleteFromCart(this.id)" id="closeItem1" class="fas fa-times"></i>
          </div>

          <div id="cartItem2" class="cartItem">
            <img src="./images/cart-img-2.jpg" alt="item1">
            <div class="itemDesc">
              <h5>modern furniture</h5>
              <p>1x $140.00</p>
            </div>
            <i  onclick="deleteFromCart(this.id)" id="closeItem2" class="fas fa-times"></i>
          </div>

          <div id="cartItem3" class="cartItem">
            <img src="./images/cart-img-3.jpg" alt="item1">
            <div class="itemDesc">
              <h5>modern furniture</h5>
              <p>1x $140.00</p>
            </div>
            <i onclick="deleteFromCart(this.id)" id="closeItem3" class="fas fa-times"></i>
          </div>
          
          <div id="cartItem4" class="cartItem">
            <img src="./images/cart-img-4.jpg" alt="item1">
            <div class="itemDesc">
              <h5>modern furniture</h5>
              <p>1x $140.00</p>
            </div>
            <i onclick="deleteFromCart(this.id)" id="closeItem4" class="fas fa-times"></i>
          </div>

          <div class="total">
            <h4><span>total : </span><span id="totPrice"></span></h4>
          </div>
          <button>checkout cart</button>
        </div>

        <div id="userId" class="userContainer">
          <h4>login form</h4>
          <form action="">
            <input type="email" name="email" id="email" placeholder="enter your email">
            <input type="password" name="pass" id="pass" placeholder="enter your password">
            <input type="checkbox" id="rememberMe">
            <label for="rememberMe">Remember Me</label>
            <button>login now</button>
            <p>forget password? <a href="#">click here</a></p>
            <p>don't have an account? <a href="#">create one</a></p>
          </form>
        </div>

      </div>
`;
function closePopup() {
  document.getElementById("rightNav").style.width= "0";
  document.getElementById("popupId").style.width= "0";
  document.getElementById("navId").style.display= "none";
  document.getElementById("cartId").style.display= "none";
  document.getElementById("userId").style.display= "none";
  document.getElementById("closerId").style.animation = "none";
}
closePopup();