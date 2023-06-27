package team6.codesquad.kiosk.order.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team6.codesquad.kiosk.order.dto.request.MenuRequestDto;

@AllArgsConstructor
@Getter
public class OrderResponseDto {

	private final int orderId;
	private List<MenuRequestDto> menus;
	private String paymentType;
	private int totalAmount;
	private int receivedAmount;
	private int change;

	public OrderResponseDto(int orderId, List<MenuRequestDto> menus, String paymentType,
		int totalAmount, int receivedAmount) {
		this(orderId, menus, paymentType, totalAmount, receivedAmount, receivedAmount - totalAmount);
	}
}
