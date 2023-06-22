package team6.codesquad.kiosk.order.controller.dto;

import java.util.List;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class MenuDto {
	private int id;
	private String name;
	private int price;
	private List<OptionDto> options;

}
