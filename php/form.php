<?php
header("Access-Control-Allow-Origin:*");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: POST");
// header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");
$conn = mysqli_connect('localhost' , 'root' , '' , 'coaching') or die('cant connect');
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $company = $_POST['company'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
$sql = "INSERT INTO `weblabz_in` (`name` , `email` , `company_name` , `phone` , `message`) VALUES ('$name' , '$email' , '$company' , '$phone' , '$message')";
// echo $sql;
// exit;
$qry = mysqli_query($conn , $sql);
// if($qry){
//     header('location:form.js?saved');
// }
// else{
//     header('location:form.js?notsaved');
// }
}

?>