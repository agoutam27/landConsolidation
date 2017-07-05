
<?php

    include "includes/databaseConfig.php";
    include "includes/functions.php";
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $ownerName = cleanData($_POST["ownerName"]);
        $fhName = cleanData($_POST["fhName"]);
        $stateName = cleanData($_POST["stateName"]);
        $districtName = cleanData($_POST["districtName"]);
        $villageName = cleanData($_POST["villageName"]);
        $lcName = cleanData($_POST["lcName"]);
        $tName = cleanData($_POST["tName"]);
        $kNumbernew = cleanData($_POST["kNumbernew"]);
        $kNumberold = cleanData($_POST["kNumberold"]);
        $lClassify = cleanData($_POST["lClassify"]);
        $tax = cleanData($_POST["tax"]);
        $cyesno = cleanData($_POST["conyesno"]);
        $lAddress = cleanData($_POST["lAddress"]);
        
        if(empty($ownerName) or empty($fhName) or empty($villageName) or empty($lcName) or empty($tName) or empty($kNumbernew) or empty($kNumberold) or empty($lClassify) or empty($tax) or empty($lAddress)){
            $errorMessage = "Enter all details";
        }else{
            $target_dir = "mapfileuploads/";
            $target_file = $target_dir . basename($_FILES["mapfile"]["name"]);
            $uploadOk = 1;
            $mapFileType = pathinfo($target_file,PATHINFO_EXTENSION);
            $mapFileSize = $_FILES["mapfile"]["size"];
            if($mapFileType != "kml"){
                $errorMessage = "Map file should be a KML file.";
            }else{
                if($mapFileSize == 0){
                    $errorMessage = "Map file should not be empty";
                }else{
                    $sql = "INSERT INTO `registered_lands`(`ownername`, `fhname`,`state`,`district`,`vname`, `lcarea`, `taluka`, `newkhatanum`, `oldkhatanum`, `lclassify`, `tax`, `address`, `pathofmap`,`cyesno`) VALUES ('$ownerName','$fhName','$stateName','$districtName','$villageName','$lcName','$tName',$kNumbernew,$kNumberold,'$lClassify',$tax,'$lAddress','$target_file','$cyesno')";
                    if($conn->query($sql) === TRUE){
                        move_uploaded_file($_FILES["mapfile"]["tmp_name"], $target_file);
                        $successMessage = "Land Registered Successfully";
                    }else{
                        $errorMessage = "Error in registering !!";
                    }
                }
            }
            
        }
    }

?>

<html>
    <head>
        <title>Land Consolidation</title>
        <meta name="description" content="Land Consolidation Software Home Page"/>
        <link rel="stylesheet" href="css/main.css"/>
        
    </head>
    <body>
        
        
        <div class="container">
            <div class="row">
                <div class="title-wrapper">
                    <h2>Land Registration</h2>
                </div>
                <hr/>
                <?php include "includes/nav.php";?>
                <form method="post" action="index.php" name="landRegForm" id="landRegForm" enctype="multipart/form-data">
                    <table>
                        <tbody>
                            <tr><td><p style="color:red;font-size: 11px;margin: 5px;">Enter all details here*</p></td></tr>
                            <tr><td><p style="color:red;font-size: 11px;margin: 5px;"><?php if(!empty($errorMessage)){echo $errorMessage;}?></p></td></tr>
                            <tr><td><p style="color:green;font-size: 11px;margin: 5px;"><?php if(!empty($successMessage)){echo $successMessage;}?></p></td></tr>
                            <tr>
                                <td>
                                    <label for="ownerName">Land Owner's Name</label>
                                </td>
                                <td>
                                    <input type="text" name="ownerName" placeholder="Enter Land Owner Name Here" id="ownerName"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="fhName">Father's / Husband's Name</label>
                                </td>
                                <td>
                                    <input type="text" name="fhName" placeholder="Enter Fathers or Husbands Name Here" id="fhName"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="stateName">State Name</label>
                                </td>
                                <td>
                                    <select name="stateName" id="stateName" onchange = "loadDistrict(this,1)">
                                        
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="districtName">District Name</label>
                                </td>
                                <td>
                                    <select name="districtName" id="districtName">
                                        
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="villageName">Village Name</label>
                                </td>
                                <td>
                                    <input type="text" name="villageName" placeholder="Enter village name here" id="villageName"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="lcName">Land Control Area</label>
                                </td>
                                <td>
                                    <input type="text" name="lcName" placeholder="Enter land control area here" id="lcName"/>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <label for="tName">Taluka</label>
                                </td>
                                <td>
                                    <input type="text" name="tName" placeholder="Enter Taluka" id="tName"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="kNumbernew">New Khata Number</label>
                                </td>
                                <td>
                                    <input type="number" name="kNumbernew" placeholder="Enter new Khata Number" id="kNumbernew"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="kNumberold">Old Khata Number</label>
                                </td>
                                <td>
                                    <input type="number" name="kNumberold" placeholder="Enter old Khata Number" id="kNumberold"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="lClassify">Land Classification</label>
                                </td>
                                <td>
                                    <select name="lClassify" placeholder="Select land type" id="lClassify">
                                        <option value="fertile">Fertile Land</option>
                                        <option value="barren">Barren Land</option>
                                        <option value="farm">Farm Land</option>
                                        <option value="Sand">Sand Land</option>
                                    </select>
                                </td>
                            </tr>
<!--
                            <tr>
                                <td>
                                    <label for="lClassify">Land Classification</label>
                                </td>
                                <td>
                                    <input type="text" name="lClassify" placeholder="Enter your land category" id="lClasssify"/>
                                </td>
                            </tr>
-->
                            <tr>
                                <td>
                                    <label for="tax">Tax given by owner</label>
                                </td>
                                <td>
                                    <input type="number" name="tax" placeholder="Enter the amount of tax" id="tax"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="lAddress">Land owner's Address</label>
                                </td>
                                <td>
                                    <textarea name="lAddress" placeholder="Enter address of land owner" id="lAddress"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="conyesno">Consolidable ?</label>
                                </td>
                                <td>
                                    <span>Yes</span><input type="radio" name="conyesno" value = "yes" style="width: 10px;"/>
                                    <span>No</span><input type="radio" name="conyesno" value = "no" style="width:10px;"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="mapfile">Upload map file</label>
                                </td>
                                <td>
                                    <input type="file" name="mapfile" id="mapfile" onchange="showMap(this);" required/>
                                </td>
                            </tr>
                            
                            <tr>
                                <td colspan="2">
                                    <p  style="color:red;font-size: 11px;margin: 5px;">Map will be displayed here</p>
                                    <div class="canvasContainer">
                                        <canvas id="mapCanvas"></canvas>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                            <tr style="display: none;">
                                <td colspan="2">
                                    <p  style="color:red;font-size: 11px;margin: 5px;">Google Map will be displayed here</p>
                                    <div class="mapContainer">
                                        <img src='' id='gmap'/>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <button id="landRegSubmitFormButton">Submit Land Details</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        
        
        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <script src="node_modules/@mapbox/togeojson/togeojson.js"></script>
        <script src="js/xml2json.js"></script>
        <script src="js/app.js"></script>
    </body>
</html>