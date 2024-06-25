package com.magnano.services;


import java.util.Optional;

import com.magnano.entities.Utente;

public interface UtenteService {
	
//	Utente findUtenteById(Integer id);
	Utente addUtente(Utente u);
	Optional<Utente> getUtenteByUsernameAndPassword(String username, String password);

}


