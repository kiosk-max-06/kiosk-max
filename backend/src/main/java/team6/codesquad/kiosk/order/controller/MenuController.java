package team6.codesquad.kiosk.order.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import team6.codesquad.kiosk.order.dto.response.CategoryResponseDto;
import team6.codesquad.kiosk.order.service.MenuService;

@RestController
@RequiredArgsConstructor
public class MenuController {
	private final MenuService menuService;

	@Operation(summary = "영수증 발급", description = "주문 내용을 사용자에게 알려준다.")
	@GetMapping("/")
	public ResponseEntity<List<CategoryResponseDto>> getMenuList() {
		return ResponseEntity.ok().body(menuService.getCategories());
	}
}
