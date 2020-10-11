document.addEventListener( "DOMContentLoaded",initialiseWebPage );

function initialiseWebPage()
{
    var slideIndex = 0;
    carousel();
    
    const leftButton = document.getElementById("goLeft");
    const rightButton = document.getElementById("goRight");
    
    leftButton.addEventListener("click",leftButtonClick);
    rightButton.addEventListener("click", rightButtonClick);
    
    
    function leftButtonClick()
    {
        plusDivs(-1);
    }
    
    function rightButtonClick()
    {
        plusDivs(1);
    }
    
    
    function plusDivs(n)
    {
        
        showDivs(slideIndex += n);
    }
    
    function showDivs(n)
    {
        const imageDiv = document.getElementsByClassName("imageSlideShow");
        var i;
        var images = document.getElementsByClassName("slider");
        if (n > images.length) 
        {
            slideIndex = 1
        }
        else if (n < 1) 
        {
            slideIndex = images.length
        }
        else
        {
            slideIndex = n;
        }
        for (i = 0; i < images.length; i++) 
        {
            images[i].style.display = "none";
        }
        images[slideIndex-1].style.display = "block";
        selectText(slideIndex-1);
    }
    
    function selectText(x)
    {
        const imageText = document.getElementById("imageText");
        if(x == 1)
        {
            imageText.innerHTML = "Education";
        }
        else if(x == 2)
        {
            imageText.innerHTML = "CV";
        }
        else
        {
            imageText.innerHTML = "Projects";
        }
    }

    function carousel() 
    {
        var i;
        var images = document.getElementsByClassName("slider");
        for (i = 0; i < images.length; i++) 
        {
            images[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > images.length) 
        {
            slideIndex = 1
        }
        images[slideIndex-1].style.display = "block";
        selectText(slideIndex-1);
        setTimeout(carousel, 5000); // Change image every 2 seconds
    }


    }