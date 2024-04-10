<?php
	header("Access-Control-Allow-Origin: http://localhost:3000");
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type");
	
	require_once 'db_config.php';
	require_once 'query_functions.php';

	$request_method = $_SERVER['REQUEST_METHOD'];

	if ($request_method === 'POST' && isset($_POST['insertUser']) && $_POST['insertUser'] === 'fakeAdmin') {
		$results = insertFakeAdmin($_POST['connType']);
		echo $results;
		die();
	}

	if ($request_method === 'POST' && isset($_POST['reqType']) && $_POST['reqType'] === 'get') {
		$results = selectAllTest($_POST['connType']);
		foreach($results as $row) {
			if (password_verify($_POST['password'], $row['password']))
				echo 'giusta';
			else
				echo 'sbagliata';
		}
		die();
	}
?>