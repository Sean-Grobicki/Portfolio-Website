<!DOCTYPE html>

<html lang = "en" dir="ltr">
    <head>
        <meta charset = "utf-8">
        <title> Sean's E-Portfolio</title>
        <link rel = "stylesheet" href = "../Stylesheet/CSS.css">
        <script src = "../Scripts/displayProjectsScript.js"></script>
        <?php
                    $servername = "localhost";
                    $username = "u899715571_User";
                    $password = "U$4NFbpQ8~a";

                    // Create connection
                    $conn = new mysqli($servername, $username,$password);

                    // Check connection
                    if ($conn->connect_error) {
                      die("Connection failed: " . $conn->connect_error);
                    }
                    mysqli_select_db($conn,"u899715571_Projects");
                    
                    $sql = "SELECT * FROM `Projects`";
                    
        ?>
        
    </head>
    <body>
        <div id ="container">
            <header>
            <h1>Sean Grobicki's Portfolio</h1>
            <nav> 
                   <!-- navigation bar is an unorderd styled list of links in new html5 nav tag -->
                <a href = "../index.html" title = "Portfolio Home Page">
                    <div class = "homeCon divHover">
                        <li class = "listNav homeButton" >Home</li>
                    </div>
                </a>
                   
                   <div class = "projectDropdown divHover">
                       <li class = "listNav projectButton"><a class = "active"  href = "../Projects/allProjects.php?language=all&type=all&search=null" title = "AllProjects"> All Projects</a></li>
                       <div class = "projectDropdownContent">
                         <a href = "../Projects/allProjects.php?language=all&type=all&search=null" title="All Projects">All Projects</a>
                         <a href = "../Projects/allProjects.php?language=cs&type=all&search=null" title="C#">C# Projects</a>
                         <a href = "../Projects/allProjects.php?language=java&type=all&search=null"title="Java">Java Projects</a>
                         <a href = "../Projects/allProjects.php?language=oth&type=all&search=null" title="Other">Other Projects </a>
                        </div>
                   </div>
                   
                   <div class = "educationDropdown divHover">
                       <li class = "listNav educationButton"><a   href = "../Education/uni3.html" title = "Education"> Education </a></li>
                       <div class = "educationDropdownContent">
                         <a href = "../Education/gcse.html" title="=GCSE">GCSE</a>
                         <a href = "../Education/a-level.html" title="A-Level">A-Level</a>
                         <a href = "../Education/uni1.html" title="1st Year University">1st Year University</a>
                         <a href = "../Education/uni2.html" title="2nd Year University">2nd Year University</a>
                         <a href = "../Education/uni3.html" title="3rd Year University">3rd Year University</a>
                        </div>
                   </div>
                   
                <a href = "../CV.html" title = "CV">
                   <div class = "cVCon divHover">
                        <li class = "listNav cVButton"> CV </li>
                    </div>
                </a>
                      
                </nav>
            </header>
            <h2> All Projects </h2>
            
            <article id = "filter">
                <h3> Filter Projects </h3>
                <div class = "languageButtonsCon">
                    <h4> Project Languages </h4>
                    <button id = "allLanguagesFilter"> All Languages </button>
                    <button id = "csProjectsFilter"> C# Projects </button>
                    <button id = "javaProjectsFilter">Java Projects </button>
                    <button id = "otherProjectsFilter">Other Projects </button>
                </div>
                
                <div class = "typeButtonsCon">
                    <h4> Project Types </h4>
                    <button id = "allProjectsFilter"> All Projects </button>
                    <button id = "uniProjectsFilter"> University Projects </button>
                    <button id = "persProjectsFilter"> Personal Projects </button>
                </div>
                
            </article>
                <div id = "projectsBar">

                    <input id = "inputBar" type="text">
                    <button id = "searchButton">Search</button>
                    <ul id = "navList">
                        <?php
                            $result = $conn->query($sql);
                            if($result->num_rows > 0)
                            {
                                while($row = $result->fetch_assoc())
                                {
                                 $name = $row["Title"];
                                 echo "<li id = '{$name}'>$name</li>";
                                }
                            }
                        ?>
                    </ul>

                </div>
            
            
                <?php
                    $result = $conn->query($sql);
                    if($result->num_rows > 0)
                    {
                        while($row = $result->fetch_assoc())
                        {
                         $name = strtolower($row["Title"]);
                         $language = $row["Language"];
                         if($language == 'C#')
                         {
                             $language = 'cs';
                         }
                         else if($language == 'Java')
                         {
                             $language = 'java';
                         }
                         else
                         {
                             $language = 'oth';
                         }
                         $type = $row["Type"];
                         if($type == 'Uni')
                         {
                             $type = 'University';
                         }
                         else
                         {
                             $type = 'Personal';
                         }
                         echo  "<article id = '{$name}' class = 'projectArticle {$language} {$row["Type"]}'>
                                <h3> {$row["Title"]} </h3>
                                <p id = 'language'>Language: {$row["Language"]}</p>
                                <p id = 'type'>Project Type: {$type}</p>
                                <div class = 'Overview'>
                                    <h4> Overview </h4>
                                    <p>{$row["Overview"]}</p>
                                </div>
                                <div class = 'links'>
                                    <div class = 'github'>
                                        <a href = '{$row["Github"]}'><img src ='../Images/gitHub.png' alt= 'Github Icon' class = 'gitHubIcon'> <p id = 'github'>Github</p></a>
                                    </div>
                                    <div class = 'video'>
                                        <a href = '{$row["Youtube"]}'><img src ='../Images/youtube.png' alt= 'Youtube Icon' class='youtubeIcon'> <p id = 'video'>Video</p></a>
                                    </div>
                                </div>
                            </article>";
                        }
                    }
                ?>
        <footer>
            <!--footer stores information needed on the bottom of the page-->
            <h3> Contact Me </h3>
            <table>
                <tr>
                    <td><img src ="../Images/email.png" alt= "email icon">  </td>
                    <td>Email: seangrobicki@gmail.com </td>
                </tr>
                <tr>
                    <td><img src ="../Images/mobile.png" alt = "mobile icon"></td>
                    <td>Mobile: 07477823223 </td>
                </tr>
            </table>
        </footer>
        </div>
    </body>
</html>