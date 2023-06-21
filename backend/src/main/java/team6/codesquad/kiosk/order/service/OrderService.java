package team6.codesquad.kiosk.order.service;

import org.springframework.stereotype.Service;

import team6.codesquad.kiosk.order.controller.dto.OrderRequest;
import team6.codesquad.kiosk.order.domain.Order;
import team6.codesquad.kiosk.order.repository.OrderRepository;

@Service
public class OrderService {

	private OrderRepository repository;

	public void saveOrder(OrderRequest orderRequest) {
		int totalAmount = orderRequest.getTotalAmount();
		int receivedAmount = orderRequest.getReceivedAmount();
		int change = receivedAmount - totalAmount;
		Order order = new Order(totalAmount, receivedAmount, change);
		repository.save(order);

	}
}
