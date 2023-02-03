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

$userup=$_POST['userup'];
$pwdup=$_POST['pwdup'];
$check="SELECT * FROM account WHERE user = '$userup' AND pwd = '$pwdup' " ;
$res = mysqli_query( $conn, $check );
$pass = mysqli_fetch_row( $res );

if ( $pass ) {
    echo"<script>location.href='signup-return.html'</script>";
}else{
    $sql = "INSERT INTO account (user, pwd) VALUES ('$userup', '$pwdup')";
 
    if ($conn->query($sql) === TRUE) {
        echo "<script>location.href='signup-pass.html'</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
 
$conn->close();
?>