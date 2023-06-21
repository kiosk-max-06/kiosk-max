package team6.codesquad.kiosk.order.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import team6.codesquad.kiosk.order.domain.Category;

import java.util.List;

@Getter
@NoArgsConstructor
public class CategoryResponseDto {
    private int id;
    private String name;
    private List<MenuResponseDto> menuResponseDtos;

}
