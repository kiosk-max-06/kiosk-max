package team6.codesquad.kiosk.order.repository;

import javax.sql.DataSource;

import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import team6.codesquad.kiosk.order.domain.OrderMenuOption;

@Repository
public class OrderMenuOptionRepository {
	private NamedParameterJdbcTemplate jdbcTemplate;
	private SimpleJdbcInsert jdbcInsert;

	public OrderMenuOptionRepository(DataSource dataSource) {
		this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
		this.jdbcInsert = new SimpleJdbcInsert(dataSource)
			.withTableName("order_menu_option")
			.usingGeneratedKeyColumns("id");
	}

	public int save(OrderMenuOption menuOption) {
		return jdbcInsert.executeAndReturnKey(new BeanPropertySqlParameterSource(menuOption)).intValue();
	}
}
