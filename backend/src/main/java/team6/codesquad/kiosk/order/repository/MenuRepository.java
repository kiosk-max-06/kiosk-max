package team6.codesquad.kiosk.order.repository;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import team6.codesquad.kiosk.order.dto.response.CategoryResponseDto;
import team6.codesquad.kiosk.order.dto.response.MenuResponseDto;

@Repository
public class MenuRepository {
	private final JdbcTemplate jdbcTemplate;
	private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	public MenuRepository(DataSource dataSource) {
		jdbcTemplate = new JdbcTemplate(dataSource);
		namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
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
		String sql = "SELECT * FROM category";
		return namedParameterJdbcTemplate.query(sql, new HashMap<>(), categoryRowMapper());
	}

	public List<MenuResponseDto> findAllMenuByCategoryId(int categoryId) {
		String sql = "SELECT * FROM menu WHERE category_id = :category_id";
		SqlParameterSource sqlParameterSource = new MapSqlParameterSource("category_id", categoryId);
		return namedParameterJdbcTemplate.query(sql, sqlParameterSource,
			menuRowMapper());
	}

	public int getCountByMenuId(int menuId) {
		String sql = "SELECT count(*) FROM sales WHERE menu_id = :menu_id AND DATE_FORMAT(:date, '%y-%m-%d')";
		LocalDateTime date = LocalDateTime.now();

		SqlParameterSource paramMap = new MapSqlParameterSource()
			.addValue("menu_id", menuId)
			.addValue("date", date);

		return namedParameterJdbcTemplate.queryForObject(sql, paramMap, Integer.class);
	}

	public Boolean isExistDailySales() {
		// 오늘 판매량이 존재하는지 확인하는 쿼리
		String sql = "SELECT EXISTS(SELECT 1 FROM sales WHERE DATE_FORMAT(date, '%Y-%m-%d') = DATE_FORMAT(:current_date, '%Y-%m-%d'))";
		SqlParameterSource sqlParameterSource = new MapSqlParameterSource("current_date", LocalDateTime.now());
		return namedParameterJdbcTemplate.queryForObject(sql, sqlParameterSource, Boolean.class);
	}

	public List<MenuResponseDto> findAllMenu() {
		String sql = "SELECT * FROM menu";
		return namedParameterJdbcTemplate.query(sql, new HashMap<>(), menuRowMapper());
	}

}
