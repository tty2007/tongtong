<?php
$servername = "localhost";
$username = "newuser";
$password = "L07t06Y28";
$dbname = "site";
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("数据库连接失败: " . $conn->connect_error);
} 

$userin=$_POST['userin'];
$pwdin=$_POST['pwdin'];  
$check="SELECT * FROM account WHERE user = '$userin' AND pwd = '$pwdin' " ;
$res = mysqli_query( $conn, $check );
$pass = mysqli_fetch_row( $res );
if(!$pass){
 
    echo "<script>location.href='signin-return.html'</script>";

}
else{

    echo "<script>location.href='signin-pass.html'</script>";
};



$conn->close();
?>