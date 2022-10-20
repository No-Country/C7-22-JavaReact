package com.C722.CriptoAlgo.criptoAlgo.auth.security;


import com.C722.CriptoAlgo.criptoAlgo.auth.RoleEnum;
import com.C722.CriptoAlgo.criptoAlgo.auth.filter.JwtRequestFilter;
import com.C722.CriptoAlgo.criptoAlgo.auth.service.UserDetailsCustomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Autowired
    private UserDetailsCustomService userDetailsCustomService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;


    @Bean
    public AuthenticationManager authManager(HttpSecurity http, BCryptPasswordEncoder bCryptPasswordEncoder, UserDetailsService userDetailsService) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class).userDetailsService(userDetailsCustomService).passwordEncoder(bCryptPasswordEncoder).and().build();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity.cors(withDefaults())
                .csrf(csrf -> csrf.disable())
                .authorizeRequests(auth -> auth

                        // Auth
                        .antMatchers(HttpMethod.POST, "/auth/register", "/auth/login").permitAll()


                        //Wallet
                        .antMatchers(HttpMethod.PATCH, "/wallets/exchange/**").hasAuthority(RoleEnum.USER.getSimpleRoleName())
                        .antMatchers(HttpMethod.GET, "/wallets/getAll").hasAuthority(RoleEnum.ADMIN.getSimpleRoleName())
                        .antMatchers(HttpMethod.GET, "/wallets/me").hasAuthority(RoleEnum.USER.getSimpleRoleName())
                        .antMatchers(HttpMethod.PATCH, "/wallets/me/**").hasAuthority(RoleEnum.USER.getSimpleRoleName())

                        // Users
                        .antMatchers(HttpMethod.PATCH, "/users/me").hasAuthority(RoleEnum.USER.getSimpleRoleName())
                        .antMatchers(HttpMethod.GET, "/users/me").hasAuthority(RoleEnum.USER.getSimpleRoleName())
                        .antMatchers(HttpMethod.DELETE, "/users/me").hasAuthority(RoleEnum.USER.getSimpleRoleName())
                        .antMatchers(HttpMethod.PATCH, "/users/**").hasAuthority(RoleEnum.ADMIN.getSimpleRoleName())
                        .antMatchers(HttpMethod.DELETE, "/users/**").hasAuthority(RoleEnum.ADMIN.getSimpleRoleName())

                        .anyRequest().authenticated())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .httpBasic(withDefaults())
                .exceptionHandling()
                .and().addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class).build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET", "PUT", "DELETE", "POST", "PATCH", "HEAD", "TRACE"));
        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        //configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }


    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().antMatchers("/css/**", "/js/**", "/img/**", "/lib/**", "/favicon.ico",
                "/prices/**");
    }


    @Bean
    public PasswordEncoder PasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
