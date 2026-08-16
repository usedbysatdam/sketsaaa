// Menutup menu Bootstrap setelah link navbar diklik di HP
document.querySelectorAll("#navbarMenu .nav-link").forEach(function(link){
  link.addEventListener("click", function(){
    const menu = document.querySelector("#navbarMenu");

    if(menu.classList.contains("show")){
      const collapse = bootstrap.Collapse.getInstance(menu);
      if(collapse){
        collapse.hide();
      }
    }
  });
});

// Efek navbar ketika halaman discroll
window.addEventListener("scroll", function(){
  const navbar = document.querySelector(".navbar-inner");

  if(window.scrollY > 50){
    navbar.style.boxShadow = "0 15px 45px rgba(75,10,28,.16)";
  }else{
    navbar.style.boxShadow = "0 15px 45px rgba(75,10,28,.12)";
  }
});
