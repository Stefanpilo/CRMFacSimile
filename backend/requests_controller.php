<?php
	header("Access-Control-Allow-Origin: http://localhost:3000");
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type");
	
	require_once 'db_config.php';
	require_once 'query_functions.php';

	$request_method = $_SERVER['REQUEST_METHOD'];

	if ($request_method === 'POST' && $_POST['inser'] === 'fakeAdmin') {
		$results = selectAllTest();
		foreach ($results as $row) {
			echo 'username: ' . $row['username'] . ', password: ' . $row['password'];
		}
	}
?>