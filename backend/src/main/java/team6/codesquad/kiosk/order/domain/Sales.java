package team6.codesquad.kiosk.order.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class Sales {
	private Integer id;
	private int menuId;
	private int count;
	private LocalDateTime date;

	public Sales(int menuId, int count) {
		this(null, menuId, count, LocalDateTime.now());
	}
}
