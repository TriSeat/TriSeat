let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }

function setInitialMode() {
    var root = document.documentElement;
    var icon = document.getElementById('icon');

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.classList.add("dark-mode");
        icon.classList.remove("bi-moon-stars-fill");
        icon.classList.add("bi-sun-fill");
    } else {
        root.classList.remove("dark-mode");
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-stars-fill");
    }
}


function toggleDarkMode() {
    var root = document.documentElement;
    var icon = document.getElementById('icon');

    root.classList.toggle("dark-mode");

    if (icon.classList.contains("bi-moon-stars-fill")) {
        icon.classList.remove("bi-moon-stars-fill");
        icon.classList.add("bi-sun-fill");
    } else {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-stars-fill");
    }
}

window.addEventListener('DOMContentLoaded', setInitialMode);

    document.addEventListener("DOMContentLoaded", function() {
        const isFirstLoad = localStorage.getItem("isFirstLoad");
    
        if (!isFirstLoad) {
            setTimeout(function() {
                document.getElementById("splashScreen").style.display = "none";
                document.body.style.overflow = "auto";
                document.documentElement.style.overflow = "auto"; 

                localStorage.setItem("isFirstLoad", "true");
            }, 2000);
        } else {
            document.getElementById("splashScreen").style.display = "none";
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }
    });
    
    function toggleLanguageDropdown() {
        var dropdown = document.getElementById("languageDropdown");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }

    document.addEventListener("DOMContentLoaded", function () {
        var dropdownBtn = document.getElementById("dropdownBtn");
        var dropdownContent = document.getElementById("dropdownContent");
    
        dropdownBtn.addEventListener("click", function () {
            dropdownContent.classList.toggle("show");
            var caretIcon = dropdownBtn.querySelector(".bi");
    
            if (caretIcon.classList.contains("bi-caret-down-fill")) {
                caretIcon.classList.replace("bi-caret-down-fill", "bi-caret-up-fill");
            } else {
                caretIcon.classList.replace("bi-caret-up-fill", "bi-caret-down-fill");
            }
        });
    });
    
    function toggleMenu() {
        var menu = document.querySelector('.menu-hamburguer');
        var navbarLinks = document.getElementById('navbar-links');
    
        menu.classList.toggle('change');
    
        if (navbarLinks.style.display === 'flex') {
            navbarLinks.style.maxHeight = '0';
            setTimeout(function() {
                navbarLinks.style.display = 'none';
            }, 160); // Aguarda 300ms, a duração da transição, para ocultar completamente
        } else {
            navbarLinks.style.display = 'flex';
            navbarLinks.style.maxHeight = navbarLinks.scrollHeight + 'px';
        }
    }

    function checkWidth() {
        var navbarLinks = document.getElementById('navbar-links');
        var menu = document.querySelector('.menu-hamburguer');
    
        if (window.innerWidth > 960) {
            navbarLinks.style.display = 'flex';
            navbarLinks.style.maxHeight = 'none'; // Reinicia o valor do max-height se necessário
            menu.classList.remove('change'); // Remove a classe 'change' do ícone do menu
        } else {
            navbarLinks.style.display = 'none';
            navbarLinks.style.maxHeight = '0'; // Para garantir que a transição funcione corretamente se reduzir a largura da janela
            menu.classList.remove('change'); // Remove a classe 'change' do ícone do menu
        }
    }
    
    // Verifica o tamanho da janela ao carregar a página e redimensionar
    window.addEventListener('load', checkWidth);
    window.addEventListener('resize', checkWidth);
    
    
    
    
    