<?php
	require_once('base.php');
	$url = 'https://api.mongolab.com/api/1/databases/secretspore/collections/users?apiKey=3ITgiOBHpdq5jCkH1thwXeeIpIciNXDI';
	$userid = $_GET['userid'];
	$url = $url.'&q={"Id":'.$userid.'}';
	$response = getUrl($url);
	print $response;
	
	
?>