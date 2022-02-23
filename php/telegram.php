<?
//https://api.telegram.org/bot5071266358:AAFTXLO6p7HZ5L66G0iEYfgNEqfQir-lrYo/getUpdates
$name = $_POST['name'];
$gmail = $_POST['gmail'];
$question = $_POST['question'];
$token = '5071266358:AAFTXLO6p7HZ5L66G0iEYfgNEqfQir-lrYo';
$chat_id = '1168484760';
$arr = array(
    'Name: '     => $name,
    'Gmail: '    => $gmail, 
    'Question: ' => $question
);
foreach ($arr as $key => $value) {
     $text .= $key . $value . "%0A";
}
$telegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_emode=html&text={$text}" , "r");
header('Location: ../index.html');
?>