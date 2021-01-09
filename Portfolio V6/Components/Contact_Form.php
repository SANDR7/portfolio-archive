<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "Contact@sndr-profession.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SNDR || Thanks</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap"
        rel="stylesheet">

    <link rel="stylesheet" href="../style/style.min.css">
    <link rel="stylesheet" href="../style/root.min.css">

    <link rel="shortcut icon" href="../assets/FavIcon/FavIcon.png" />
    <meta property="og:image" content="https://sndr-official.com/wip/assets/FavIcon/FavIcon.png">
    <meta property="og:image:secure_url" content="https://sndr-official.com/wip/assets/FavIcon/FavIcon.png">
</head>

<body style="overflow: hidden;">
<!-- wanneer het bezig is met laden -->
<div id="loadingScreen">
    <svg xmlns="http://www.w3.org/2000/svg" width="426.858" height="420" viewBox="0 0 426.858 420">
        <g id="LogoLoader" transform="translate(-512.169 -105.737)">
            <rect id="Rectangle_36" data-name="Rectangle 36" width="419" height="420"
                transform="translate(512.169 105.737)" fill="rgba(122,122,122,0)" />
            <g id="FavIcon" transform="translate(513.639 156.796)">
                <text id="S" transform="translate(84.53 250.941)" fill="#ff7b47" font-size="259"
                    font-family="Montserrat-Black, Montserrat" font-weight="800">
                    <tspan x="-85.082" y="0">S</tspan>
                </text>
                <path id="Path_36" data-name="Path 36"
                    d="M34.915,68.243q-15.077,0-25-9.655T0,33.857Q0,18.78,9.919,9.39t25-9.39q15.077,0,25,9.39T69.83,33.857q0,15.077-9.919,24.732T34.915,68.243Z"
                    transform="matrix(0.998, 0.07, -0.07, 0.998, 350.392, 181.682)" fill="none" stroke="#ff7b47"
                    stroke-width="10" />
                <path id="Subtraction_3" data-name="Subtraction 3"
                    d="M90.888,183.05H.5v-4.064c1.713-.606,3.407-1.268,5.037-1.966,12.679-5.433,22.345-12.869,28.73-22.1a53.617,53.617,0,0,0,9.62-31.071c0-13.111-3.543-23.608-10.53-31.2A61.345,61.345,0,0,0,8.525,76.14c-2.512-.891-5.213-1.766-8.027-2.6v-25.7A146.119,146.119,0,0,1,17.625,55.21l18.46-44.46A113.354,113.354,0,0,0,7.348-.35H90.888a143.641,143.641,0,0,1,28.853,2.784,111.09,111.09,0,0,1,25.25,8.352A90.68,90.68,0,0,1,165.82,24.311,81.862,81.862,0,0,1,191.136,65.15a102.043,102.043,0,0,1,3.242,26.2,102.045,102.045,0,0,1-3.242,26.2,81.86,81.86,0,0,1-25.316,40.84,90.677,90.677,0,0,1-20.829,13.526,111.1,111.1,0,0,1-25.25,8.351A143.647,143.647,0,0,1,90.888,183.05ZM62.33,47.858v86.984H88.268c13.212,0,23.923-3.835,31.833-11.4s11.92-18.361,11.92-32.095-4.011-24.533-11.92-32.095-18.621-11.4-31.833-11.4Z"
                    transform="translate(146.484 70.408)" fill="#e6f4f1" />
            </g>
        </g>
    </svg>

    <h1>Loading...</h1>
    <div>
        <div class="Messages">
            <div class="M1">
                <span class="AccentGray">-</span>
                <h4>Sndr Dsgn</h4>
                <span class="AccentGray">-</span>
            </div>
            <div class="M2">
                <span class="AccentGray">-</span>
                <!-- <h4>It's worth it!</h4> -->
                <!-- <h4>Have Patience</h4> -->
                <h4>Just a Sec</h4>
                <span class="AccentGray">-</span>
            </div>
        </div>
    </div>
</div>

<!-- begin van de content -->
    <header>
    <div class="logo" id="Logo">
            <a href="../">
                <!-- $SNDR. -->
                <span class="Accent">H</span><span id="logoTxt">ome</span><span class="logoDot">.</span>
            </a>
        </div>

        <nav>
                <ul class="navLinks" id="Nav">
                    <li>
                        <a href="../pages/work">Work</a>
                        <div class="Accent ALeft">×</div>
                    </li>
                    <li>
                        <a href="../pages/projects">Projects</a>
                        <div class="Accent ALeft">×</div>
                    </li>
                </ul>

                <ul class="navRechts" id="Nav">
                    <li>
                        <a href="../pages/contact">Contact</a>
                        <div class="Accent ARight">×</div>
                    </li>
                    <li>
                        <a href="../pages/about">About</a>
                        <div class="Accent ARight">×</div>
                    </li>
                </ul>
            </nav>
    </header>
    <main class="Wrapper">
        <div class="Header">
            <h1>Thanks for reaching out to me!</h1>

            <div class="ErrorClass">
                <span class="AccentGray"> × </span>
                <p>I will contact you as soon as possible</p>
                <span class="AccentGray"> × </span>
            </div>
        </div>
        <div class="ErrorMessage1">
            <span class="AccentGray">- </span>
            <p>You can close this window</p>
            <span class="AccentGray"> -</span>
        </div>
        <div class="ErrorMessage2">
            <span class="Accent">- </span>
            <p>SNDR DSGN</p>
            <span class="Accent"> -</span>
        </div>
    </main>

        <!-- scripts -->
        <script src="../javascript/DynamicTxt/WorkTxt.js"></script>
    <script src="../javascript/ParallaxEffect.js"></script>
    <script src="../javascript/loading.js"></script>

    <!-- libraries -->
    <script src="https://kit.fontawesome.com/bb2ec91959.js" crossorigin="anonymous"></script>
    <script src="../node_modules/sal.js/dist/sal.js"></script>
    <script>
        sal();
    </script>
    <!-- <script src="../javascript/themeSwitch.js"></script> -->
    <!-- <script src="../javascript/script.js"></script> -->
</body>

</html>