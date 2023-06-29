package team6.codesquad.kiosk.order.repository;

import javax.sql.DataSource;

import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import team6.codesquad.kiosk.order.domain.OrderMenu;

@Repository
public class OrderMenuRepository {
	private NamedParameterJdbcTemplate jdbcTemplate;
	private SimpleJdbcInsert jdbcInsert;

	public OrderMenuRepository(DataSource dataSource) {
		this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
		this.jdbcInsert = new SimpleJdbcInsert(dataSource)
			.withTableName("order_menu")
			.usingGeneratedKeyColumns("id");
	}

	public int save(OrderMenu orderMenu) {
		return jdbcInsert.executeAndReturnKey(new BeanPropertySqlParameterSource(orderMenu)).intValue();
	}
}
