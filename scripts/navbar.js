var nav = () => {
    return `
  <div id="navbar">
   <div id="img">
   <a href="index.html">
      <img src="/Images/Logo.png" alt="">
      </a>
   </div>
   <div id="detaisd">
      <div class="dropdown" id="cat">
          <a class="dropbtn">Categories</a>
          <div class="dropdown-content" id="Categories">
              <div id="BEGINNER">
                  <!-- <h5></h5> -->
                  <b>BEGINNER</b>
                  <a href="Earphones.html">Earphones</a>
                  <a href="Headphones.html">Headphones</a>
                  <a href="">Portable Amp/DACs</a>
                  <a href="">Desktop Amp/DACs</a>
                  <a href="">Hi Res-Players</a>
                  <a href="">Bundles</a>
              </div>
              <div id="FLAGSHIP">
                  <!-- <h5></h5> -->
                  <b>FLAGSHIP</b>
                  <a href="">New Arrivals</a>
                  <a href="">Earphones</a>
                  <a href="">Headphone</a>
                  <a href="">Portable Amp/DACs</a>
                  <a href="">Desktop Amp/DACs</a>
                  <a href="">Hi Res-Players</a>
              </div>
              <div id="COLLECTIONS">
                  <!-- <h5></h5> -->
                  <b>COLLECTIONS</b>
                  <a href="">Work from Home</a>
                  <a href="">Gaming</a>
                  <a href="">Studio & Professional</a>
                  <a href="">Top Sellers</a>
              </div>
              <div id="WIRELESS">
                  <!-- <h5></h5> -->
                  <b>WIRELESS</b>
                  <a href="">True Wireless Earbuds</a>
                  <a href="">Wireless Headphones</a>
                  <a href="">Wireless Earphones</a>
              </div>
              <div id="ACCESSORIES">
                  <!-- <h5></h5> -->
                  <b>ACCESSORIES</b>
                  <a href="">Eartips</a>
                  <a href="">Earpads</a>
                  <a href="">Cases</a>
                  <a href="">Cables</a>
                  <a href="">Headphone Stands</a>
                  <a href="">Digital Cables</a>
                  <a href="">Interconnects</a>
              </div>
          </div>
      </div>
      <div class="dropdown" id="band">
          <a class="dropbtn">Brands</a>
          <div class="dropdown-content" id="brand">
              <div id="a">
                  <a href="#">1Custom</a>
                  <a href="#">Bowers & wilkons</a>
                  <a href="#">Devialet</a>
                  <a href="#">Headgear Audio</a>
                  <a href="#">Koss</a>
                  <a href="#">Razer</a>
                  <a href="#">TempoTec</a>
                  <a href="#">Abyss</a>
                  <a href="#">BOEYZ</a>
                  <a href="#">EarMen</a>
                  <a href="#">Headphone Zone</a>
                  <a href="#">KZ Acoustics</a>
                  <a href="#">RME</a>
                  <a href="#">ThieAudio</a>
                  <a href="#">AIAIAI</a>
                  <a href="#">Burson Audio</a>
                  <a href="#">Edifier</a>
                  <a href="#">HEDD Audio</a>
                  <a href="#">Little Dot</a>
                  <a href="#">Schiit</a>
                  <a href="#">TIN HiFi</a>
                  <a href="#">AKG</a>
                  <a href="">Cambridge Audio</a>
                  <a href="">Effect Audio</a>
                  <a href="">HiBy</a>
                  <a href="">Lotoo</a>
                  <a href="">Sennheiser</a>
                  <a href="">Toppping</a>
                  <a href="">ALO Audio</a>
                  <a href="">Campfire Audio</a>
                  <a href="">EIKON</a>
                  <a href="">Hidizs</a>
                  <a href="">Lypertek</a>
                  <a href="">Shanling</a>
                  <a href="">Tripowin</a>
                  <a href="">ASI Audio</a>
                  <a href="">Cayin</a>
                  <a href="">EPOS</a>
                  <a href="">HiFiMAN</a>
                  <a href="">Mangiird</a>
                  <a href="">Shure</a>
                  <a href="">Unique Melody</a>
                  <a href="">Astell&Kern</a>
                  <a href="">CCA</a>
                  <a href="">Etymotic</a>
                  <a href="">iBasso</a>
                  <a href="">Marshall</a>
                  <a href="">Singxer</a>
                  <a href="">Venture Electronics</a>
                  <a href="">Audeze</a>
                  <a href="">Chord Electronics</a>
                  <a href="">FiiO</a>
                  <a href="">iFi Audio</a>
                  <a href="">Matrix Audio</a>
                  <a href="">SMSL</a>
                  <a href="">Violectric</a>
                  <a href="">Audio-Technica</a>
                  <a href="">Comply</a>
                  <a href="">Final Audio</a>
                  <a href="">IKKO</a>
                  <a href="">MEE Audio</a>
                  <a href="">Sonos</a>
                  <a href="">Vision Ears</a>
                  <a href="">AudioQuest</a>
                  <a href="">Dail</a>
                  <a href="">Flare Audio</a>
                  <a href="">Jabra</a>
                  <a href="">Meze Audio</a>
                  <a href="">Sony</a>
                  <a href="">V-MODA</a>
              </div>
          </div>
      </div>
      <div class="dropdown" id="price">
          <a class="dropbtn">Price</a>
          <div class="dropdown-content" id="price_dropdown">
              <a href="#">Best Headphones Under Rs. 1,000</a>
              <a href="#">Best Headphones Under Rs. 2,000</a>
              <a href="#">Best Headphones Under Rs. 3,000</a>
              <a href="#">Best Headphones Under Rs. 5,000</a>
              <a href="#">Best Headphones Under Rs. 10,000</a>
              <a href="#">Best Headphones Under Rs. 20,000</a>
              <a href="#">Best Headphones Under Rs. 50,000</a>
          </div>
      </div>
      <div class="dropdown" id="Deals">
          <a class="dropbtn">Deals</a>
          <div class="dropdown-content" id="Deals_dropdown">
              <div id="del">
                  <div id="wireless_earphone">
                      <b>WIRELESS EARPHONES</b>
                      <a href="">Unboxed</a>
                      <a href="">Demo & Refurbished</a>
                      <a href="">Pre-Owned</a>
                      <a href="">Clearance</a>
                  </div>
                  <div id="wireless_headphones">
                      <b>WIRELESS HEADPHONES</b>
                      <a href="">Unboxed</a>
                      <a href="">Demo & Refurbished</a>
                      <a href="">Pre-Owned</a>
                      <a href="">Clearance</a>
                  </div>
                  <div id="wireless_earbuds">
                      <b>TRUE WIRELESS EARBUDS</b>
                      <a href="">Unboxed</a>
                      <a href="">Demo & Refurbished</a>
                      <a href="">Pre-Owned</a>
                      <a href="">Clearance</a>
                  </div>
                  <div id="wired_earphone">
                      <b>WIRED EARPHONES</b>
                      <a href="">Unboxed</a>
                      <a href="">Demo & Refurbished</a>
                      <a href="">Pre-Owned</a>
                      <a href="">Clearance</a>
                  </div>
                  <div id="wired_headphones">
                      <b>WIREd HEADPHONES</b>
                      <a href="">Unboxed</a>
                      <a href="">Demo & Refurbished</a>
                      <a href="">Pre-Owned</a>
                      <a href="">Clearance</a>
                  </div>
                  <div id="hi_players">
                      <b>HI-RES PLAYERS</b>
                      <a href="">Unboxed</a>
                      <a href="">Demo & Refurbished</a>
                      <a href="">Pre-Owned</a>
                      <a href="">Clearance</a>
                  </div>
                  <div id="amps">
                      <b>AMPS & DACS</b>
                      <a href="">Unboxed</a>
                      <a href="">Demo & Refurbished</a>
                      <a href="">Pre-Owned</a>
                      <a href="">Clearance</a>
                  </div>
              </div>
              <div id="del_img">
                  <img src="./Images/Deals.png" alt="">
              </div>
          </div>
      </div>
      <div class="dropdown">
          <a class="dropbtn">Headphone Finder</a>
          <div class="dropdown-content">
          </div>
      </div>
      <div class="dropdown" id="connect">
          <a class="dropbtn">Headphone Connect</a>
          <div class="dropdown-content" id="connect_dropdown">
              <img src="./Images/mumbai.png" alt="">
              <img src="./Images/pune.png" alt="">
              <img src="./Images/chennai.png" alt="">
              <img src="./Images/india.png" alt="">
          </div>
      </div>
      <div class="dropdown" id="info">
          <a class="dropbtn">Info</a>
          <div class="dropdown-content" id="info_dropdown">
              <img src="./Images/info.png" alt="">
          </div>
      </div>
      <div class="dropdown">
          <a class="dropbtn" a href="#footer">HelpCenter</a>
          <div class="dropdown-content">
          </div>
      </div>
      </div>
      <div id="search">
          <div id="searchitem">
              <div id="mySidenav" class="sidenav">
                  <div id="se">
                  <input type="text" name="" id="search_item" onkeypress="searchitem()" placeholder="what are you looking for">
                         
                      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                  </div>
                 
                  <hr>
                  <div id="pd">
                      
                  </div>
                  <div id="search_itemdiv">
                                         </div>
                  <div id="item_btn"></div>
              </div>
              <a onclick="opensearch()">Search</a>
          </div>
          <a href="./Login.html" id="login_acc">Login</a>
      <a href="./Cart.html">Cart</a>
      <div id="cart">
          0
      </div>
      </div>
      
  </div>
  </div>
  `;
};
export default nav;
