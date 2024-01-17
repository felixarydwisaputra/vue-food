<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand fw-bold text-warning" href="#"> 
        <img src="../assets/img/logo.png" style="width: 40px;" alt="">  
        <span class="text-dark ms-2">Di</span>Kuliner<span class="text-dark">an</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-5">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/foods">Menu</RouterLink>
          <RouterLink class="nav-link" to="/store">Store</RouterLink>
        </div>
        
        <div class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Favorite <i class="bi bi-heart ms-1"></i></a></li>
              <li><a class="dropdown-item" href="#">Keranjang <i class="bi bi-cart-check ms-1"></i></a></li>
            </ul>
          </li>
        </div>
        
      </div>
    </div>
  </nav>
</template>