package team6.codesquad.kiosk.order.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class CategoriesResponseDto {
    private List<CategoryResponseDto> categoryResponseDtos;

}
