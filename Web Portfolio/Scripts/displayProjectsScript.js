document.addEventListener( "DOMContentLoaded",initialiseWebPage);

function initialiseWebPage()
{
    
    //Language Buttons
    const allLanguagesButton = document.getElementById( "allLanguagesFilter");
    const csProjectsButton = document.getElementById("csProjectsFilter");
    const javaProjectsButton = document.getElementById("javaProjectsFilter");
    const cppProjectsButton = document.getElementById("cppProjectsFilter");
    
    //Type Buttons
    
    const allProjectsButton = document.getElementById( "allProjectsFilter");
    const uniProjectsButton = document.getElementById("uniProjectsFilter");
    const persProjectsButton = document.getElementById("persProjectsFilter");
    
    //Search Button & Input
    
    const inputBar = document.getElementById("inputBar");
    const searchButton = document.getElementById("searchButton");
    const navList = document.getElementById("navList").childNodes;
    
    
    // Adding the click event listeners for the buttons
    
    //Language Events
    allLanguagesButton.addEventListener("click",allLanguagesButtonClick);
    csProjectsButton.addEventListener("click",csProjectsButtonClick);
    javaProjectsButton.addEventListener("click",javaProjectsButtonClick);
    cppProjectsButton.addEventListener("click",cppProjectsButtonClick);
    for(var i =0; i < navList.length;i++)
    {
        navList[i].addEventListener("click",navListClick);
    }
    
    
    //Type Events
    allProjectsButton.addEventListener("click",allProjectsButtonClick);
    uniProjectsButton.addEventListener("click",uniProjectsButtonClick);
    persProjectsButton.addEventListener("click",persProjectsButtonClick);
    
    
    //Search and Input Listeners
    
    searchButton.addEventListener("click",searchButtonClick);
    
    
    
    

    // Adding the variables im going to change
    
    var allProjects = document.getElementsByClassName("projectArticle");
    
    //Applying filter from url
    filterFromUrl();
    
    function filterFromUrl()
    {
        const url = geturl();
        const language = url.get('language');

        if(language == 'cpp')
        {
            cppProjectsButtonClick();
        }
        else if(language == 'java')
        {
            javaProjectsButtonClick();
        }
        else if(language == 'cs')
        {
            csProjectsButtonClick();
        }
        
        const type = url.get('type');
        
        if(type == 'uni')
        {
            cppProjectsButtonClick();
        }
        else if(language == 'per')
        {
            javaProjectsButtonClick();
        }
        
        
        const searchText = url.get('search');
        if(searchText != "")
        {
            search(searchText);
        }
    }
    
    

    
    
    // Button functions for filtering
    
    //Language Functions
    
    function allLanguagesButtonClick()
    {
        resetDisplayedProjects();
        allProjects = document.getElementsByClassName("projectArticle");
        var url = geturl();
        url.set("language","all");
        url.set("type","all");
        url.set("search","");
        history.replaceState(null,null,"?"+url.toString());
        displayProjectsFrom(allProjects);
    }

    function csProjectsButtonClick()
    {
        resetDisplayedProjects();
        var csProjects = document.getElementsByClassName("cs");
        //change url
        var url = geturl();
        url.set("language","cs");
        url.set("type","all");
        url.set("search","");
        history.replaceState(null,null,"?"+url.toString());
        displayProjectsFrom(csProjects);
    }

    function cppProjectsButtonClick()
    {
        resetDisplayedProjects();
        var cppProjects =  document.getElementsByClassName("cpp");
        var url = geturl();
        url.set("language","cpp");
        url.set("type","all");
        url.set("search","");
        history.replaceState(null,null,"?"+url.toString());
        displayProjectsFrom(cppProjects);
    }

    function javaProjectsButtonClick()
    {
        resetDisplayedProjects();
        var javaProjects = document.getElementsByClassName("java");
        //change url
        var url = geturl();
        url.set("search","");
        url.set("type","all");
        url.set("language","java");
        history.replaceState(null,null,"?"+url.toString());
        displayProjectsFrom(javaProjects);
    }

    //Type Functions
    
    function allProjectsButtonClick()
    {
        resetDisplayedProjects();
        var url = geturl();
        url.set("search","");
        url.set("type","all");
        url.set("language","all");
        history.replaceState(null,null,"?"+url.toString());
        displayProjectsFrom(allProjects);
    }
    
    function uniProjectsButtonClick()
    {
        resetDisplayedProjects();
        var uniProjects = document.getElementsByClassName("Uni");
        var url = geturl();
        url.set("search","");
        url.set("type","uni");
        url.set("language","all");
        history.replaceState(null,null,"?"+url.toString());
        displayProjectsFrom(uniProjects);
    }
    
    function persProjectsButtonClick()
    {
        resetDisplayedProjects();
        var uniProjects = document.getElementsByClassName("Pers");
        var url = geturl();
        url.set("search","");
        url.set("type","per");
        url.set("language","all"); 
        history.replaceState(null,null,"?"+url.toString());
        displayProjectsFrom(uniProjects);
    }
    
    // Search Button Functions
    
    function searchButtonClick()
    {
        const text = inputBar.value.toLowerCase();
        search(text);
    }
    
    function search(text)
    {
        resetDisplayedProjects();
        var url = geturl();
        url.set("language","all");
        url.set("type","all");
        url.set("search",text);
        history.replaceState(null,null,"?"+url.toString());
        for(var i =0; i < allProjects.length;i++)
        {
            if(allProjects[i].id == text)
            {
                allProjects[i].style.display = "block";
            }
        }
    }
    
    function navListClick()
    {
        const name = this.id.toLowerCase();
        search(name);
    }
    
    
    
    //Utility Functions
    
    function resetDisplayedProjects()
    {
        for(let i =0; i < allProjects.length; i++)
        {
            allProjects[i].style.display = "none";        
        }
    }

    function displayProjectsFrom(projects)
    {
        for(let i =0; i < projects.length;i++)
        {
            projects[i].style.display = "block";
        }
    }
    
    function geturl()
    {
        const queryString = window.location.search;
        return new URLSearchParams(queryString);
    }
}





