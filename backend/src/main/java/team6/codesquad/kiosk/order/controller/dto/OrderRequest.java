package team6.codesquad.kiosk.order.controller.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {

	private List<MenuDto> menus;
	private String paymentType;
	private int receivedAmount;
	private int totalAmount;

}


