package com.mercury.util;

import java.util.*;

import org.springframework.stereotype.Component;

import com.mercury.beans.Card;
import com.mercury.vo.CardInfo;


@Component
public class Converter {
	public CardInfo toCardInfo(Card card) {		
		CardInfo cardinfo = new CardInfo();
		cardinfo.setId(card.getId());
		cardinfo.setName(card.getName());
		cardinfo.setCategory(card.getCategory());
		cardinfo.setPrice(card.getPrice());
		cardinfo.setDiscount(card.getDiscount());
		cardinfo.setImg(card.getImg());
		cardinfo.setType(card.getType());
		cardinfo.setDescription(card.getDescription());
		cardinfo.setQty(card.getQty());
		return cardinfo;
	}
	
	public List<CardInfo> toCardInfoList(List<Card> cardList) {
		List<CardInfo> cardinfoList = new ArrayList<>();
		for(Card card: cardList) {
			cardinfoList.add(toCardInfo(card));
		}
		return cardinfoList;
	}
	
	public Card toCard(CardInfo cardinfo) {
		Card card = new Card();
		card.setId(cardinfo.getId());
		card.setName(cardinfo.getName());
		card.setCategory(cardinfo.getCategory());
		card.setPrice(cardinfo.getPrice());
		card.setDiscount(cardinfo.getDiscount());
		card.setImg(cardinfo.getImg());
		card.setType(cardinfo.getType());
		card.setDescription(cardinfo.getDescription());
		card.setQty(cardinfo.getQty());
		return card;
	}
	
	
}
