<?php
    
    
    include 'includes/databaseConfig.php';
    $state = $_POST['state'];
    $district = $_POST['district'];
    $village = $_POST['village'];
    $a = array();
    $query = "select * from registered_lands where state = '$state' and district = '$district' and vname='$village'";
    $result = $conn->query($query);
    while($row = $result->fetch_assoc()){
        $a[] = $row;
    }
    echo json_encode($a);

?>