<?php
    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $email = $_POST['email'];
    $number = $_POST['number'];
    $grade = $_POST['grade'];
    $school_name = $_POST['school_name'];
    $wants2_learn = $_POST['wants2_learn'];
    $ecs = $_POST['ecs'];
    $subteam_choice = $_POST['subteam_choice'];
    $reasoning = $_POST['reasoning'];
    $agreement = $_POST['agreement'];

    //Database connection
    $conn = new mysqli('localhost', 'root', '', 'test');
    if ($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare(
            "insert into member_registration
            (fName, lName, email, number, grade, school_name, 
            wants2_learn, ecs, subteam_choice, reasoning, agreement)
            values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssisssssss", $fName, $lName, $email, $number, $grade, 
        $school_name, $wants2_learn, $ecs, $subteam_choice, $reasoning, $agreement);
        $stmt->execute();
        echo "Submit Successful!";
        $stmt->close();
        $conn->close();
    }
?>