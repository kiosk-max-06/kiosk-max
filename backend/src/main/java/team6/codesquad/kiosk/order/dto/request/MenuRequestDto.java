package team6.codesquad.kiosk.order.dto.request;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class MenuRequestDto {
	private String name;
	private int count;
	private List<String> options;

}
