<?php
	function insertFakeAdmin($DBType = 'online') {
		$pdo = connectionToDB($DBType);
		$query = $pdo->prepare('INSERT INTO users (username, password) VALUES (?, ?)');
		$username = $_POST['username'];
		$password = $_POST['password'];
		$encryptedPassword = password_hash($password, PASSWORD_BCRYPT);
		$query->execute([$username, $encryptedPassword]);
		
		if ($query->rowCount() > 0)
			return 'Inserimento con successo';
	}

    function selectAllTest($DBType = 'online') {
        $pdo = connectionToDB($DBType);
        $query = $pdo->prepare('SELECT * FROM users');
        $query->execute();

        $results = $query->fetchAll(PDO::FETCH_ASSOC);

        return $results;
    }
?>