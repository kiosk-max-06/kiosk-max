package team6.codesquad.kiosk.order.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import team6.codesquad.kiosk.order.dto.request.OrderRequestDto;
import team6.codesquad.kiosk.order.dto.response.OrderResponseDto;
import team6.codesquad.kiosk.order.service.OrderService;

@RequiredArgsConstructor
@RestController
public class OrderController {

	private final OrderService service;

	@PostMapping("/order")
	public ResponseEntity<OrderResponseDto> createOrder(@RequestBody OrderRequestDto orderRequestDto) {
		return ResponseEntity.ok().body(service.saveOrder(orderRequestDto));
	}
}
