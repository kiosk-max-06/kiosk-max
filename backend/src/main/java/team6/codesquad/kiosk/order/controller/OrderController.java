package team6.codesquad.kiosk.order.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import team6.codesquad.kiosk.order.controller.dto.OrderRequest;
import team6.codesquad.kiosk.order.service.OrderService;

@RestController
public class OrderController {

	private OrderService service;

	@PostMapping("/order")
	public OrderResponse createOrder(@RequestBody OrderRequest orderRequest) {

	}
}
