
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
                <form method="post" action="showLandDetails.php" name="getLandDetailsForm" id="getLandDetailsForm">
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
        </div>
        
        
        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <script src="js/app.js"></script>
    </body>
</html>