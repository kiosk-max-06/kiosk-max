package team6.codesquad.kiosk.order.repository;

import javax.sql.DataSource;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

@Repository
public class PaymentRepository {
	private final NamedParameterJdbcTemplate jdbcTemplate;

	public PaymentRepository(DataSource dataSource) {
		this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	public int findByName(String name) {
		String sql = "SELECT id FROM payment WHERE name = :name";
		SqlParameterSource namedParameters = new MapSqlParameterSource("name", name);
		return jdbcTemplate.queryForObject(sql, namedParameters, Integer.class);
	}
}
