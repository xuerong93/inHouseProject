package com.mercury.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mercury.dao.CardDao;
import com.mercury.util.Converter;
import com.mercury.vo.CardInfo;

@Controller
public class CardController {
	@Autowired
	private CardDao cd;
	@Autowired 
	private Converter converter;
	
	
	@RequestMapping(value="/cardInfo", method=RequestMethod.GET)
	@ResponseBody    
	public List<CardInfo> getCardInfoList() {
		return converter.toCardInfoList(cd.queryAll());
	}
	
	@RequestMapping(value="/cardInfo/{name}", method=RequestMethod.GET)
	@ResponseBody  
	public List<CardInfo> getOneCardInfo(@PathVariable String name) {
		return converter.toCardInfoList(cd.queryByName(name));
	}
	
	@RequestMapping(value="/cardInfo/category/{category}", method=RequestMethod.GET)
	@ResponseBody  
	public List<CardInfo> getOneCardCategory(@PathVariable String category) {
		return converter.toCardInfoList(cd.queryByCategory(category));
	}
	
	@RequestMapping(value="/cardInfo/namelike/{str}", method=RequestMethod.GET)
	@ResponseBody  
	public List<CardInfo> getLikeCards(@PathVariable String str) {
		return converter.toCardInfoList(cd.queryByString(str));
	}
	
	
	@RequestMapping(value="/cardInfo/id/{id}", method=RequestMethod.GET)
	@ResponseBody  
	public CardInfo getOneCardCategory(@PathVariable int id) {
		return converter.toCardInfo(cd.queryById(id));
	}
	
	
	@RequestMapping(value="/cardInfo", method=RequestMethod.POST)
	@ResponseBody  
	public void saveCardInfo(@RequestBody CardInfo cardinfo) {
		cd.save(converter.toCard(cardinfo));
	}
	
	@RequestMapping(value="/cardInfo", method=RequestMethod.PUT)
	@ResponseBody     
	public void updateCardInfo(@RequestBody CardInfo cardinfo) {
		cd.update(converter.toCard(cardinfo));
	}
	
	@RequestMapping(value="/cardInfo/{name}", method=RequestMethod.DELETE)
	@ResponseBody  
	public void deleteCardInfo(@PathVariable String name) {
		cd.deleteByName(name);
	}
}
