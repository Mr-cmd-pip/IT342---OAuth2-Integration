package it342.g02.martus.matthewrimar.oauth2.integration.repository;

import it342.g02.martus.matthewrimar.oauth2.integration.entity.AuthProvider;
import it342.g02.martus.matthewrimar.oauth2.integration.entity.ProviderType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AuthProviderRepository extends JpaRepository {
    Optional findByProviderAndProviderUserId(ProviderType provider, String providerUserId);
}
