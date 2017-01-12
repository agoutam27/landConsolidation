<?php

    include "includes/databaseConfig.php";
    include "includes/functions.php";


?>

<html>
    <head>
        <title>Land Consolidation</title>
        <meta name="description" content="Land Consolidation Software"/>
        <link rel="stylesheet" href="css/main.css"/>
        
    </head>
    <body>
        
        
        <div class="container">
            <div class="row">
                <div class="title-wrapper">
                    <h2>Retrieved Land Details</h2>
                </div>
                <hr/>
                <table style="margin:25px auto;">
                    <tbody>
                <?php
                    if($_SERVER["REQUEST_METHOD"]=="POST"){
                        $ownerName = cleanData($_POST['ownerNameGd']);
                        $talukName = cleanData($_POST['tNameGd']);
                        $knum = cleanData($_POST['kNumbernewGd']);
                        $sql = "select * from `registered_lands` where `ownername`='$ownerName' and `taluka`='$talukName' and `newkhatanum`=$knum";
                        $result = $conn->query($sql);

                        if ($result->num_rows > 0) {
                            while($row = $result->fetch_assoc()) {
                                $pathofmap = $row['pathofmap'];
                                echo "<tr><td>Owner's Name : </td><td>".$row['ownername']."</td></tr>";        
                                echo "<tr><td>Father's Name/Husband's Name : </td><td>".$row['fhname']."</td></tr>";        
                                echo "<tr><td>Village Name : </td><td>".$row['vname']."</td></tr>";        
                                echo "<tr><td>Land Classification Area : </td><td>".$row['lcarea']."</td></tr>";        
                                echo "<tr><td>Taluka : </td><td>".$row['taluka']."</td></tr>";        
                                echo "<tr><td>New Khata Number : </td><td>".$row['newkhatanum']."</td></tr>";        
                                echo "<tr><td>Old Khata Number : </td><td>".$row['oldkhatanum']."</td></tr>";        
                                echo "<tr><td>Land Classify : </td><td>".$row['lclassify']."</td></tr>";        
                                echo "<tr><td>Tax : </td><td>".$row['tax']."</td></tr>";        
                                echo "<tr><td>Address : </td><td>".$row['address']."</td></tr>";
                                echo "<tr><td>Consolidable : </td><td>".$row['cyesno']."</td></tr>";
                                echo "<tr><td><button onclick=showArea('$ownerName','$talukName','$knum','$pathofmap')>Show Area</button></td></tr>";
                                        
                            }
                        } else {
                            echo "<h2>No results found !!</h2>";
                        }
                    }else if($_SERVER["REQUEST_METHOD"] == "GET"){
                        header('Location:retrieveDetails.php');
                    }
                ?>
                        <tr><td><span id="areaShower"></span></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        
        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <script src="node_modules/@mapbox/togeojson/togeojson.js"></script>
        <script src="js/app.js"></script>
    </body>
</html>