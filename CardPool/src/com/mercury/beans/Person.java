package com.mercury.beans;

import java.util.*;

public class Person {
	private String username;
	private String password;
	private Set<String> authorities;
	
	public Person(){
		authorities = new HashSet<>();
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Set<String> getAuthorities() {
		return authorities;
	}
	public void setAuthorities(Set<String> authorities) {
		this.authorities = authorities;
	}
	
	public void addAuthority(String authority) {
		authorities.add(authority);
	}
	
	public void removeAuthority(String authority) {
		authorities.remove(authority);
	}
	
	
}
