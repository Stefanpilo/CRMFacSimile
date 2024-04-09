<?php
	function insertFakeAdmin() {
		$pdo = connectionToDB();
		$query = $pdo->prepare('INSERT INTO studenti (nome, cognome, esame, voto) VALUES (?, ?, ?, ?)');
		$query->execute([$nome, $cognome, $esame, $voto]);
		
		if ($query->rowCount() > 0)
			echo 'Inserimento con successo';
		
		die();
	}

    function selectAllTest() {
        $pdo = connectionToDB('online');
        $query = $pdo->prepare('SELECT * FROM users');
        $query->execute();

        $results = $query->fetchAll(PDO::FETCH_ASSOC);

        return $results;
    }
?>