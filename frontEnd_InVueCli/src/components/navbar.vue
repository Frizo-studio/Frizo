<template>
  <div class="navbarDiv">
    <nav class="navbar navbar-expand-lg navbar-default">
      <a class="navbar-brand" href="#">
        <img class="pic mr-5" src="../assets/logo/LOGO.jpg" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="margin-right-25vw">
            <form class="form-inline ml-5 my-2 my-lg-0">
              <input
                class="form-control mr-sm-2 search"
                type="search"
                placeholder="搜尋"
                aria-label="Search"
              />
              <button class="btn my-2 my-sm-0 bg-light" type="submit">搜尋</button>
            </form>
          </li>
          <li class="nav-item">
            <button class="btn my-2 my-sm-0 bg-light" type="submit">Post</button>
          </li>
          <li class="nav-item functionBtn ml-3">
            <img class="imgfull" src="../assets/icon/bell.svg" />
          </li>
          <li class="nav-item functionBtn ml-3">
            <img class="imgfull" src="../assets/icon/addfriend.svg" />
          </li>
          <li class="nav-item functionBtn ml-3 mr-5">
            <img class="imgfull" src="../assets/icon/messages.svg" />
          </li>
        </ul>
        <div>
          <button
            type="button"
            id="logInBtn"
            class="myLogin"
            data-toggle="modal"
            data-target="#logInDiv"
          >登入/註冊</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myLogin {
  background-color: #000000;
  color: #ffffff;
  border: 0px;
  margin-right: 30px;
}
.functionBtn {
  width: 25px;
  height: 40px;
}
.imgfull {
  height: 100%;
  width: 100%;
}
.margin-right-25vw {
  margin-right: 25vw;
}
.search {
  width: 350px;
  margin-right: 0px;
  padding-right: 0px;
}
input {
  margin: 0;
}
.pic {
  width: 35px;
  height: 35px;
}
.navbar {
  background-color: #000000;
}
.navbar .navbar-brand {
  color: #ffffff;
}
.navbar .navbar-brand:hover,
.navbar .navbar-brand:focus {
  color: #ffffff;
}
.navbar .navbar-text {
  color: #ffffff;
}
.navbar .navbar-text a {
  color: #ffffff;
}
.navbar .navbar-text a:hover,
.navbar .navbar-text a:focus {
  color: #ffffff;
}
.navbar .navbar-nav .nav-link {
  color: #ffffff;
  border-radius: 0.25rem;
  margin: 0 0.25em;
}
.navbar .navbar-nav .nav-link:not(.disabled):hover,
.navbar .navbar-nav .nav-link:not(.disabled):focus {
  color: #ffffff;
}
.navbar .navbar-nav .dropdown-menu {
  background-color: #000000;
  border-color: #2f2f2f;
}
.navbar .navbar-nav .dropdown-menu .dropdown-item {
  color: #ffffff;
}
.navbar .navbar-nav .dropdown-menu .dropdown-item:hover,
.navbar .navbar-nav .dropdown-menu .dropdown-item:focus,
.navbar .navbar-nav .dropdown-menu .dropdown-item.active {
  color: #ffffff;
  background-color: #2f2f2f;
}
.navbar .navbar-nav .dropdown-menu .dropdown-divider {
  border-top-color: #2f2f2f;
}
.navbar .navbar-nav .nav-item.active .nav-link,
.navbar .navbar-nav .nav-item.active .nav-link:hover,
.navbar .navbar-nav .nav-item.active .nav-link:focus,
.navbar .navbar-nav .nav-item.show .nav-link,
.navbar .navbar-nav .nav-item.show .nav-link:hover,
.navbar .navbar-nav .nav-item.show .nav-link:focus {
  color: #ffffff;
  background-color: #2f2f2f;
}
.navbar .navbar-toggle {
  border-color: #2f2f2f;
}
.navbar .navbar-toggle:hover,
.navbar .navbar-toggle:focus {
  background-color: #2f2f2f;
}
.navbar .navbar-toggle .navbar-toggler-icon {
  color: #ffffff;
}
.navbar .navbar-collapse,
.navbar .navbar-form {
  border-color: #ffffff;
}
.navbar .navbar-link {
  color: #ffffff;
}
.navbar .navbar-link:hover {
  color: #ffffff;
}

@media (max-width: 575px) {
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffffff;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-sm .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #2f2f2f;
  }
}

@media (max-width: 767px) {
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffffff;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-md .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #2f2f2f;
  }
}

@media (max-width: 991px) {
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffffff;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-lg .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #2f2f2f;
  }
}

@media (max-width: 1199px) {
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item {
    color: #ffffff;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:hover,
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item:focus {
    color: #ffffff;
  }
  .navbar-expand-xl .navbar-nav .show .dropdown-menu .dropdown-item.active {
    color: #ffffff;
    background-color: #2f2f2f;
  }
}

.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item {
  color: #ffffff;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:hover,
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item:focus {
  color: #ffffff;
}
.navbar-expand .navbar-nav .show .dropdown-menu .dropdown-item.active {
  color: #ffffff;
  background-color: #2f2f2f;
}
</style>
