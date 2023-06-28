package team6.codesquad.kiosk.order.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class OrderMenu {
	private Integer id;
	private int orderId;
	private int menuId;
	private int count;

	public OrderMenu(int orderId, int menuId, int count) {
		this(null, orderId, menuId, count);
	}
}
