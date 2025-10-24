package it342.g02.martus.matthewrimar.oauth2.integration.repository;

import it342.g02.martus.matthewrimar.oauth2.integration.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository {
    Optional findByEmail(String email);
}

