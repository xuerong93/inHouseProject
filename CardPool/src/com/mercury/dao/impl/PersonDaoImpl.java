package com.mercury.dao.impl;

import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.mercury.beans.Person;
import com.mercury.dao.PersonDao;

@Repository
public class PersonDaoImpl implements PersonDao{
	private JdbcTemplate template;
	
	@Autowired
	public void setDataSource(DataSource dataSource) {
		template =  new JdbcTemplate(dataSource);
	}
	@Override
	public Person findByUsername(String username) {
		// TODO Auto-generated method stub
		String sql="select username, password, authority from users u, user_roles ur "
				+ "where u.user_id = ur.user_id and (username=? or username=?)";
		String username2= username;
		int index = username.indexOf("@");
		if(index<0) username2 += "@gmail.com";
		else username2 = username2.substring(0, index);
		Object[] params = {username, username2};
		//be careful of final
		final Person person = new Person();
		template.query(sql, new RowMapper<Person>() {
			@Override
			public Person mapRow(ResultSet rs, int line) throws SQLException {
				// TODO Auto-generated method stub
				person.setUsername(rs.getString("username"));
				person.setPassword(rs.getString("password"));
				person.addAuthority(rs.getString("authority"));
				return null;
			}
		}, params);
		return person;
	}
	@Override
	public void insertUser(Person user) {
		// TODO Auto-generated method stub
		String dataCount="select count(user_id) from users";
		int index = template.queryForInt(dataCount);
		String sql = "insert into users values (?,?,?,?)";
		template.update(sql, new Object[]{index+1, user.getUsername(), user.getPassword(), 1});
		String sql2 = "insert into user_roles values (?,?,'ROLE_USER')";
		template.update(sql2, new Object[]{index * 10 + 11, index + 1});
	}
	
	
	
}
