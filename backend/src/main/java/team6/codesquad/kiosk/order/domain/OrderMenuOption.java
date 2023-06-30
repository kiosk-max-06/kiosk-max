package team6.codesquad.kiosk.order.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class OrderMenuOption {
	private Integer id;
	private int orderMenuId;
	private int optionId;

	public OrderMenuOption(int orderMenuId, int optionId) {
		this(null, orderMenuId, optionId);
	}
}
