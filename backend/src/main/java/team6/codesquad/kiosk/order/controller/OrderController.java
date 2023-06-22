package team6.codesquad.kiosk.order.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import team6.codesquad.kiosk.order.controller.dto.OrderRequest;
import team6.codesquad.kiosk.order.service.OrderService;

@RestController
public class OrderController {

	private OrderService service;

	@PostMapping("/order")
	public ResponseEntity<OrderResponse> createOrder(@RequestBody OrderRequest orderRequest) {
		//ResponseEntity<> 감싸서 내보내야 JSON형태로 내보내짐.

		return ResponseEntity.ok().body(orderResponse);
	}
}
