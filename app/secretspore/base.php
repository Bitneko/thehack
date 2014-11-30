<?php

	function getUrl($url)
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_USERAGENT, "MongolabBot/1.0");
		curl_setopt( $ch, CURLOPT_HEADER, 0);
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt( $ch, CURLOPT_URL, $url );
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		$response = curl_exec( $ch );
		return $response;
	}
	function putUrl($url, $data_json)
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_USERAGENT, "MongolabBot/1.0");
		curl_setopt( $ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','Content-Length: ' . strlen($data_json)));
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
		curl_setopt($ch, CURLOPT_POSTFIELDS,$data_json);
		curl_setopt( $ch, CURLOPT_URL, $url );
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		$response = curl_exec( $ch );
		return $response;
	}
?>