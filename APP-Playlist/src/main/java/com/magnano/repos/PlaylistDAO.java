package com.magnano.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.magnano.entities.Canzone;
import com.magnano.entities.Playlist;

public interface PlaylistDAO extends JpaRepository<Playlist, Integer>{
	
	@Query("select canzone_id from playlist where id = ?")
	List<Integer> findCanzoneByPlaylistId(Integer id);
	
	

}
