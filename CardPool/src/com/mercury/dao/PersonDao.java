package com.mercury.dao;

import com.mercury.beans.Person;

public interface PersonDao {
	public Person findByUsername(String username);
	public void insertUser(Person user);
}
