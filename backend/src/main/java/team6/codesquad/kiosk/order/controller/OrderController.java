package team6.codesquad.kiosk.order.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import team6.codesquad.kiosk.order.dto.request.OrderRequestDto;
import team6.codesquad.kiosk.order.dto.response.OrderResponseDto;
import team6.codesquad.kiosk.order.service.OrderService;

@RequiredArgsConstructor
@RestController
public class OrderController {

	private final OrderService service;

	@Operation(summary = "모든 카테고리 및 메뉴", description = "사용자에게 모든 카테고리 및 메뉴를 알려준다.")
	@PostMapping("/order")
	public ResponseEntity<OrderResponseDto> createOrder(@RequestBody OrderRequestDto orderRequestDto) {
		return ResponseEntity.ok().body(service.saveOrder(orderRequestDto));
	}
}
