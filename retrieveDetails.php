
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
                    <h2>Retrieve Land Details</h2>
                </div>
                <hr/>
                <?php include "includes/nav.php";?>
                <div id="search1">
                    <p style="text-align: center;font-size: 12px;">Retrive land details by searching</p>
                <form method="get" action="showLandDetails.php" name="getLandDetailsForm" id="getLandDetailsForm">
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
                                    <input type="text" name="ownerNameGd" placeholder="Enter Land Owner Name Here" id="ownerNameGd"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="tName">Taluka</label>
                                </td>
                                <td>
                                    <input type="text" name="tNameGd" placeholder="Enter Taluka" id="tNameGd"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="kNumbernew">New Khata Number</label>
                                </td>
                                <td>
                                    <input type="number" name="kNumbernewGd" placeholder="Enter new Khata Number" id="kNumbernewGd"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <button type="button" id="getLandDetailsFormSubmitButton">Get land details</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                </div>
                <div id="search2">
                    <p style="text-align: center;font-size: 12px;">Retrive details by selection</p>
                    <form name="getLandDetailsForm2" id="getLandDetailsForm2">
                    <table style="margin: 20px auto;">
                        <tbody>
                            
                            <tr>
                                <td>
                                    <label for="stateName">State Name</label>
                                </td>
                                <td>
                                    <select name="stateName" id="stateName" onchange="loadDistrict(this,1)">
                                        
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="districtName">District Name</label>
                                </td>
                                <td>
                                    <select name="districtName" id="districtName"  onchange="loadDistrict(this,2)">
                                        
                                    </select>
                                </td>
                            </tr>                            
                        </tbody>
                    </table>
                </form>
                    <table style="display: none;" id="searchTable">
                        <thead>
                            <tr>
                                <th>State Name</th>
                                <th>District Name</th>
                                <th>Owner Name</th>
                                <th>Taluka</th>
                                <th>Khata Number</th>
                                <th>View Details</th>
                            </tr>
                        </thead>
                        <tbody id="searchTableBody">
                            
                        </tbody>
                    </table>
                </div>
                <hr style="width: 70%;margin: 30px auto;"/>
                <button onclick="toggleSearch()"  style="position: fixed; bottom: 200px; margin: 0 618px;">Toggle Search</button>
            </div>
        </div>
        
        
        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <script src="js/app.js"></script>
    </body>
</html>