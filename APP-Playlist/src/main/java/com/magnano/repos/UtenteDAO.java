package com.magnano.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.magnano.entities.Utente;

public interface UtenteDAO extends JpaRepository<Utente, Integer> {
	
	//@Query(value = "select * from utenti where username = ?", nativeQuery = true)
	//Utente findByUsername(String username);
	
	Optional<Utente> findByUsernameAndPassword(String username, String password);
	
	
	
	

}
