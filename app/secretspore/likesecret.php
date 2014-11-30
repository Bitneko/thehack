<?php
	require_once('base.php');
	$url = 'https://api.mongolab.com/api/1/databases/secretspore/collections/users?apiKey=3ITgiOBHpdq5jCkH1thwXeeIpIciNXDI';
	$userid = $_GET['userid'];
	$secretid = $_GET['secretid'];
	
	$url = $url.'&q={"Id":'.$userid.'}';
	$response = getUrl($url);
	$userdata = json_decode($response);
	$favs = $userdata[0]->Favorites;
	$favs = (empty($favs) || $favs == 'NULL')?$secretid : $favs.','.$secretid;
	
	$url = 'https://api.mongolab.com/api/1/databases/secretspore/collections/users?apiKey=3ITgiOBHpdq5jCkH1thwXeeIpIciNXDI';
	$url = $url.'&q={"Id":'.$userid.'}';
	$putjson = '{"$set":{ "Favorites": "'.$favs.'"}}';
	putUrl($url, $putjson);

?>