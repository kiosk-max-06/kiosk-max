package team6.codesquad.kiosk.order.controller.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MenuDto {
	private String name;
	private int count;
	private List<String> options;

}
