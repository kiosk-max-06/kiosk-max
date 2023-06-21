package team6.codesquad.kiosk.order.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MenuResponseDto {

    private int id;
    private String name;
    private int categoryId;
    private int price;
    private String image;

}
