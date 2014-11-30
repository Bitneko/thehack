<?php
	require_once('base.php');
	$secretid = $_GET['secretid'];
	$url = 'https://api.mongolab.com/api/1/databases/secretspore/collections/secrets?apiKey=3ITgiOBHpdq5jCkH1thwXeeIpIciNXDI';
	$url = $url.'&q={"Id":'.$secretid.'}';
	$response = getUrl($url);
	print $response;

?>