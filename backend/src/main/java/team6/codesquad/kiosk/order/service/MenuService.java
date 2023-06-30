package team6.codesquad.kiosk.order.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.RequiredArgsConstructor;
import team6.codesquad.kiosk.order.dto.response.CategoryResponseDto;
import team6.codesquad.kiosk.order.dto.response.MenuResponseDto;
import team6.codesquad.kiosk.order.repository.MenuRepository;

@RequiredArgsConstructor
@Transactional
@Service
public class MenuService {
	private final MenuRepository menuRepository;

	public List<CategoryResponseDto> getCategories() {
		inspectDailySales(); //  당일 판매량 검사
		List<CategoryResponseDto> categoryResponseDtos = menuRepository.findAll(); // 모든 category 반환
		for (CategoryResponseDto categoryResponseDto : categoryResponseDtos) {
			List<MenuResponseDto> menuResponseDtos = categoryResponseDto.getMenus();
			List<Integer> menuIds = menuResponseDtos.stream().map(MenuResponseDto::getId).toList();
			// caterory에 정렬된 menus로 다시 넣기
			categoryResponseDto.setMenus(sortedMenus(menuResponseDtos, mappingMenusMenuIdAndCount(menuIds)));
		}
		return categoryResponseDtos;
	}

	private void inspectDailySales() {
		// Sales 테이블에 오늘 날짜(date)와 동일한 행(row)이 없다면
		if (!menuRepository.isExistDailySales()) {
			// 모든 메뉴의 당일 판매량(Sales) 행(row) 생성.
			// 이 때, 수량(count)를 0으로 설정한다.
			List<MenuResponseDto> menuResponseDtos = menuRepository.findAllMenu();
			for (MenuResponseDto menuResponseDto : menuResponseDtos) {
				menuRepository.createDailySales(menuResponseDto.getId());
			}
		}
	}

	private List<MenuResponseDto> sortedMenus(List<MenuResponseDto> menuResponseDtos, List<Integer> menuIds) {
		List<MenuResponseDto> newMenuResponseDtos = new ArrayList<>();
		for (Integer menuId : menuIds) {
			MenuResponseDto menu = menuResponseDtos.stream()
				.filter(menuResponseDto -> menuResponseDto.getId() == menuId)
				.findFirst().get();
			newMenuResponseDtos.add(menu);
		}
		return newMenuResponseDtos;
	}

	private List<Integer> mappingMenusMenuIdAndCount(List<Integer> menuIds) {
		Map<Integer, Integer> map = new HashMap<>();
		for (int menuId : menuIds) {
			map.put(menuId, menuRepository.getCountByMenuId(menuId));
		}
		return sortHashMapByValueDescending(map);
	}

	private List<Integer> sortHashMapByValueDescending(Map<Integer, Integer> map) {
		List<Map.Entry<Integer, Integer>> entries = new ArrayList<>(map.entrySet());
		entries.sort(Map.Entry.comparingByValue(Comparator.reverseOrder()));

		List<Integer> keys = new ArrayList<>();
		for (Map.Entry<Integer, Integer> entry : entries) {
			keys.add(entry.getKey());
		}
		return keys;
	}

}
