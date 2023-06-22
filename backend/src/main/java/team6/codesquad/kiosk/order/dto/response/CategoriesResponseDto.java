package team6.codesquad.kiosk.order.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class CategoriesResponseDto {
	private List<CategoryResponseDto> categoryResponseDtos;

}
