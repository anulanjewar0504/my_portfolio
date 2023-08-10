<?php
    $db_hostname = "127.0.0.1"; // Change this if your MySQL server is running on a different host
    $username = "root"; // Change this to your MySQL username (usually "root" for XAMPP)
    $password = ""; // Change this to your MySQL password (usually blank for XAMPP)
    $dbname = "my_data"; // Change this to your database name

    $conn = mysqli_connect ($db_hostname, $username, $password, $dbname);
    
    if (!$conn) {
        echo "Connection faild",mysqli_connect_error();
        exit;
    }

    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $message = $_POST["Message"];

    $sql = "INSERT INTO user (Name, Email, Message) VALUES ('$name',  '$email', '$message')";
    $result = mysqli_query($conn,$sql);

    if (!$result) {
        echo '<script>alert("Error");</script>',mysqli_error($conn);
        exit;
    } else {
        echo '<script>alert("Data has been successfully submitted!");</script>';
    }
mysqli_close($conn);
?>