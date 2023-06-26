package team6.codesquad.kiosk.order.repository;

import javax.sql.DataSource;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import team6.codesquad.kiosk.order.domain.Sales;

@Repository
public class SaleRepository {
	private final NamedParameterJdbcTemplate jdbcTemplate;

	public SaleRepository(DataSource dataSource) {
		this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	public void update(Sales sales) {
		String sql = "SELECT count FROM sales WHERE menu_id = :menuId AND DATE_FORMAT(:date, '%y-%m-%d')";
		SqlParameterSource namedParameters = new MapSqlParameterSource()
			.addValue("menuId", sales.getMenuId())
			.addValue("date", sales.getDate());
		int count = jdbcTemplate.queryForObject(sql, namedParameters, Integer.class);
		count += sales.getCount();
		String updateSql = "UPDATE sales SET count = :count WHERE menu_id = :menuId AND DATE_FORMAT(:date, '%y-%m-%d')";
		SqlParameterSource updateNamedParameters = new MapSqlParameterSource()
			.addValue("menuId", sales.getMenuId())
			.addValue("date", sales.getDate())
			.addValue("count", count);
		jdbcTemplate.update(updateSql, updateNamedParameters);
	}
}
