package team6.codesquad.kiosk.order.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import team6.codesquad.kiosk.order.domain.Order;
import team6.codesquad.kiosk.order.domain.OrderMenu;
import team6.codesquad.kiosk.order.domain.OrderMenuOption;
import team6.codesquad.kiosk.order.domain.Sales;
import team6.codesquad.kiosk.order.dto.request.MenuRequestDto;
import team6.codesquad.kiosk.order.dto.request.OrderRequestDto;
import team6.codesquad.kiosk.order.repository.MenuRepository;
import team6.codesquad.kiosk.order.repository.OptionRepository;
import team6.codesquad.kiosk.order.repository.OrderMenuOptionRepository;
import team6.codesquad.kiosk.order.repository.OrderMenuRepository;
import team6.codesquad.kiosk.order.repository.OrderRepository;
import team6.codesquad.kiosk.order.repository.PaymentRepository;

@RequiredArgsConstructor
@Transactional
@Service
public class OrderService {

	private final OrderRepository orderRepository;
	private final OrderMenuRepository orderMenuRepository;
	private final PaymentRepository paymentRepository;
	private final MenuRepository menuRepository;
	private final OrderMenuOptionRepository menuOptionRepository;
	private final OptionRepository optionRepository;

	public void saveOrder(OrderRequestDto orderRequestDto) {
		Order order = getOrder(orderRequestDto);

		int orderId = orderRepository.save(order);
		List<MenuRequestDto> menus = orderRequestDto.getMenus();
		for (MenuRequestDto menu : menus) {
			int orderMenuId = saveOrderMenu(orderId, menu);
			saveOrderMenuOption(orderMenuId, menu);
		}
	}

	private Order getOrder(OrderRequestDto orderRequestDto) {
		int totalAmount = orderRequestDto.getTotalAmount();
		int receivedAmount = orderRequestDto.getReceivedAmount();
		int change = receivedAmount - totalAmount;

		return new Order(totalAmount, receivedAmount, change,
			paymentRepository.findByName(orderRequestDto.getPaymentType()));

	}

	private int saveOrderMenu(int orderId, MenuRequestDto menu) {
		int menuId = menuRepository.findByName(menu.getName());
		int count = menu.getCount();
		OrderMenu orderMenu = new OrderMenu(orderId, menuId, count);
		int orderMenuId = orderMenuRepository.save(orderMenu);
		updateSales(menuId, count);

		return orderMenuId;
	}

	private void saveOrderMenuOption(int orderMenuId, MenuRequestDto menu) {
		for (String option : menu.getOptions()) {
			OrderMenuOption menuOption = new OrderMenuOption(orderMenuId, optionRepository.findByName(option));
			menuOptionRepository.save(menuOption);
		}
	}

	public void updateSales(int menuId, int count) {
		Sales sales = new Sales(menuId, count);

	}
}
