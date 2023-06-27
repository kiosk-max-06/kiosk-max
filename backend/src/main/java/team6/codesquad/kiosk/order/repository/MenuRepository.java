package team6.codesquad.kiosk.order.repository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import team6.codesquad.kiosk.order.dto.response.CategoryResponseDto;
import team6.codesquad.kiosk.order.dto.response.MenuResponseDto;

@Repository
public class MenuRepository {
	private final JdbcTemplate jdbcTemplate;

	public MenuRepository(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
	}

	public int createDailySales(int menuId) {
		SimpleJdbcInsert jdbcInsert = new SimpleJdbcInsert(jdbcTemplate);
		jdbcInsert.withTableName("sales").usingGeneratedKeyColumns("id");
		Map<String, Object> parameters = new ConcurrentHashMap<>();
		parameters.put("count", 0);
		parameters.put("date", LocalDateTime.now());
		parameters.put("menu_id", menuId);

		Number key = jdbcInsert.executeAndReturnKey(new MapSqlParameterSource(parameters));
		return key.intValue(); // sales 테이블의 id
	}

	private RowMapper<CategoryResponseDto> categoryRowMapper() {
		return (rs, rowNum) -> {
			CategoryResponseDto categoryResponseDto = new CategoryResponseDto();
			categoryResponseDto.setId(rs.getInt("id"));
			categoryResponseDto.setName(rs.getString("name"));
			categoryResponseDto.setMenus(findAllMenuByCategoryId(rs.getInt("id")));

			return categoryResponseDto;
		};
	}

	private RowMapper<MenuResponseDto> menuRowMapper() {
		return (rs, rowNum) -> {
			MenuResponseDto menuResponseDto = new MenuResponseDto();
			menuResponseDto.setId(rs.getInt("id"));
			menuResponseDto.setName(rs.getString("name"));
			menuResponseDto.setPrice(rs.getInt("price"));
			menuResponseDto.setImage(rs.getString("image"));
			menuResponseDto.setCategoryId(rs.getInt("category_id"));

			return menuResponseDto;
		};
	}

	public List<CategoryResponseDto> findAll() {
		// sales 테이블에 count 값으로 정렬 된 menu들
		return jdbcTemplate.query("select * from category", categoryRowMapper());
	}

	// TODO: Sales 테이블에서 오늘 날짜(date)에 해당하는 menu들을 모아서 count별로 정렬 후, 카테고리 별로 나눠 List에 담는다.
	public List<MenuResponseDto> findAllMenuByCategoryId(int categoryId) {
		List<MenuResponseDto> menuResponseDtos = jdbcTemplate.query("select * from menu where category_id = ?",
			menuRowMapper(), categoryId);
		List<Integer> menuIds = menuResponseDtos.stream().map(MenuResponseDto::getId).toList();
		return getMenuByMenuId(menuResponseDtos, sortedMenuIdByCount(menuIds));
	}

	private List<MenuResponseDto> getMenuByMenuId(List<MenuResponseDto> menuResponseDtos, List<Integer> menuIds) {
		List<MenuResponseDto> newMenuResponseDtos = new ArrayList<>();
		for (Integer menuId : menuIds) {
			MenuResponseDto menu = menuResponseDtos.stream()
				.filter(menuResponseDto -> menuResponseDto.getId() == menuId)
				.findFirst().get();
			newMenuResponseDtos.add(menu);
		}
		return newMenuResponseDtos;
	}

	private List<Integer> sortedMenuIdByCount(List<Integer> menuIds) {
		Map<Integer, Integer> map = new HashMap<>(); // (menuId, count)
		menuIds.forEach(menuId -> { // sales 테이블에서 menuId로 count 값을 가져온다
			String sql = "SELECT count FROM sales WHERE menu_id = ? AND DATE_FORMAT(?, '%y-%m-%d')";
			int count = jdbcTemplate.queryForObject(sql, Integer.class, menuId, LocalDateTime.now());
			map.put(menuId, count); // map에 넣는다.
		});
		return sortHashMapByValueDescending(map);
	}

	public List<Integer> sortHashMapByValueDescending(Map<Integer, Integer> map) {
		List<Map.Entry<Integer, Integer>> entries = new ArrayList<>(map.entrySet());
		entries.sort(Map.Entry.comparingByValue(Comparator.reverseOrder()));

		List<Integer> keys = new ArrayList<>();
		for (Map.Entry<Integer, Integer> entry : entries) {
			keys.add(entry.getKey());
		}

		return keys;
	}


	public Boolean isExistDailySales() {
		// 오늘 판매량이 존재하는지 확인하는 쿼리
		String sql = "SELECT EXISTS(SELECT 1 FROM sales WHERE DATE_FORMAT(date, '%y-%m-%d') = DATE_FORMAT(?, '%y-%m-%d'))";
		return jdbcTemplate.queryForObject(sql, Boolean.class, LocalDateTime.now());
	}

	public void fillCountZero() {
		jdbcTemplate.query("select * from menu", menuRowMapper())
			.forEach(menuResponseDto
				-> createDailySales(menuResponseDto.getId()));  // 메뉴마다 당일판매량(sales)을 생성하는 쿼리를 날린다.
	}
}
