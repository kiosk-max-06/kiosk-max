package team6.codesquad.kiosk.order.dto.request;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequestDto {

	private List<MenuRequestDto> menus;
	private String paymentType;
	private int receivedAmount;
	private int totalAmount;

}


