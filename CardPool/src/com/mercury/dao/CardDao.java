package com.mercury.dao;

import java.util.List;

import com.mercury.beans.Card;

public interface CardDao {
	public void save(Card card);
	public void update(Card card);
	public List<Card> queryAll();
	public List<Card> queryByName(String name);
	public List<Card> queryByCategory(String category);
	public List<Card> queryByString(String str);
	public Card queryById(int id);
	public void deleteByName(String name);
}
