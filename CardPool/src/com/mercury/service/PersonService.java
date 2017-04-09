package com.mercury.service;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;

import org.springframework.stereotype.Service;

import com.mercury.beans.Person;
import com.mercury.dao.PersonDao;

@Service
public class PersonService implements UserDetailsService{
	@Autowired
	private PersonDao pd;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		UserDetails user = null;
		try {
			Person person = pd.findByUsername(username);
			Collection<GrantedAuthority> authorities = new ArrayList<>();
			for(String authority: person.getAuthorities()) {
				authorities.add(new SimpleGrantedAuthority(authority));
			}
			user = new User(
					person.getUsername(),
					person.getPassword(),
					true,
					true,
					true,
					true,
					authorities
			);			
		} catch (Exception e) {
			e.printStackTrace();
			throw new UsernameNotFoundException("Error in retrieving user");
		}
		return user;
	}
	
}
