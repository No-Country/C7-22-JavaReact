package com.C722.CriptoAlgo.criptoAlgo.auth.security;


import com.C722.CriptoAlgo.criptoAlgo.auth.RoleEnum;
import com.C722.CriptoAlgo.criptoAlgo.auth.filter.JwtRequestFilter;
import com.C722.CriptoAlgo.criptoAlgo.auth.service.UserDetailsCustomService;
import com.C722.CriptoAlgo.criptoAlgo.auth.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.Filter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true,securedEnabled = true,jsr250Enabled = true)
public class SecurityConfig  {
    @Autowired
    private UserDetailsCustomService userDetailsCustomService;

    @Autowired
    private JwtRequestFilter jwtRequestFilter;



    @Bean
    public AuthenticationManager authManager(HttpSecurity http, BCryptPasswordEncoder bCryptPasswordEncoder, UserDetailsService userDetailsService)
            throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(userDetailsCustomService)
                .passwordEncoder(bCryptPasswordEncoder)
                .and()
                .build();
    }

@Bean
    public SecurityFilterChain  filterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf().disable()

                // Auth
                .authorizeRequests().antMatchers(HttpMethod.POST, "/auth/**" /*"/users/login"*/).permitAll()

                .antMatchers(HttpMethod.GET, "/auth/me").hasAuthority(RoleEnum.USER.getSimpleRoleName())
                // Users
                .antMatchers(HttpMethod.GET,"/prices/**").permitAll()
                .antMatchers(HttpMethod.PATCH,"/users/me").hasAuthority(RoleEnum.USER.getSimpleRoleName())
                .antMatchers(HttpMethod.DELETE,"/users/me").hasAuthority(RoleEnum.USER.getSimpleRoleName())
                .antMatchers(HttpMethod.PATCH,"/users/**").hasAuthority(RoleEnum.ADMIN.getSimpleRoleName())
                .antMatchers(HttpMethod.DELETE,"/users/**").hasAuthority(RoleEnum.ADMIN.getSimpleRoleName())

                .anyRequest().authenticated()
                .and().exceptionHandling()
                .and().sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);


        httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }


    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.
                ignoring().
                antMatchers("/css/**", "/js/**", "/img/**", "/lib/**", "/favicon.ico");
    }

    @Bean
    public PasswordEncoder PasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

}
