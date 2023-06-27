package team6.codesquad.kiosk.order.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import team6.codesquad.kiosk.order.controller.dto.OrderRequest;
import team6.codesquad.kiosk.order.service.OrderService;

@RequiredArgsConstructor
@RestController
public class OrderController {

	private final OrderService service;

	@Operation(summary = "모든 카테고리 및 메뉴", description = "사용자에게 모든 카테고리 및 메뉴를 알려준다.")
	@PostMapping("/order")
	public ResponseEntity<Void> createOrder(@RequestBody OrderRequest orderRequest) {
		//ResponseEntity<> 감싸서 내보내야 JSON형태로 내보내짐.
		service.saveOrder(orderRequest);
		return ResponseEntity.ok().build();
	}
}
