
  window.addEventListener("load",function()
  {
    /* ------------- Page Loader ----------------*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(function()
    {
        document.querySelector(".page-loader").getElementsByClassName.display="none";
    },600);
    /* ------------- Animation on Scroll ----------------*/
    AOS.init();
  });
  

/* ------------- toggle navbar ----------------*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav()
{
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}


/* close nav when clicking on a nav item */
document.addEventListener("click",function(e)
{
    if(e.target.closest(".nav-item"))
    {
        toggleNav();
    }
});


/* ------------- Toggle Navbar ----------------*/
   window.addEventListener("scroll", function()
   {
        if(this.pageYOffset > 60){
            document.querySelector(".header").classList.add("sticky");
        }
        else
        {
            document.querySelector(".header").classList.remove("sticky");
        }
   });

//    function slide()
// {
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if(counter>4)
//     {
//         counter=1;
//     }
// }

// function slideshow()
// {
//     var x = document.getElementById('check-class');
//     if(x.style.display === "none")
//     {
//         x.style.display = "block";
//     }
//     else{
//         x.style.display ="none";
//     }
// }

/* ------------- Menu Tabs ----------------*/
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click",function(e)
{
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active"))
    {
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
        AOS.init();
    }
});

/* ------------- Back to Top ----------------*/
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});


