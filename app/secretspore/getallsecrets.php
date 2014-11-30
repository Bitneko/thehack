<?php
	require_once('base.php');
	$url = 'https://api.mongolab.com/api/1/databases/secretspore/collections/secrets?apiKey=3ITgiOBHpdq5jCkH1thwXeeIpIciNXDI';
	$response = getUrl($url);
	print $response;
?>