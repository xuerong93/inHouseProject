//package com.mercury.dao.impl;
//
//import java.util.List;
//
//import org.hibernate.SessionFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.orm.hibernate3.HibernateTemplate;
//import org.springframework.stereotype.Repository;
//
//import com.mercury.beans.Users;
//import com.mercury.dao.UserDao;
//
//
//@Repository
//public class UserDaoImpl implements UserDao{
//	private HibernateTemplate template;
//	
//	@Autowired
//	@Qualifier("mySessionFactory")
//	public void setSessionFactory(SessionFactory factory) {
//		template = new HibernateTemplate(factory);
//	}
//	@Override
//	public void save(Users user) {
//		// TODO Auto-generated method stub
//		template.save(user);
//	}
//
//	@Override
//	public void update(Users user) {
//		// TODO Auto-generated method stub
//		template.update(user);
//	}
//
//	@SuppressWarnings("unchecked")
//	@Override
//	public List<Users> queryAll() {
//		// TODO Auto-generated method stub
//		List<Users> users = template.find("from Users");
//		System.out.println("222");
//		return users;
//	}
//
//	@Override
//	public void deleteByName(String name) {
//		// TODO Auto-generated method stub
//		Users user = (Users)template.get(Users.class, name);
//		template.delete(user);
//	}
//
//}
