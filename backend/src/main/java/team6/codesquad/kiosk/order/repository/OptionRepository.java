package team6.codesquad.kiosk.order.repository;

import javax.sql.DataSource;

import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

@Repository
public class OptionRepository {
	private NamedParameterJdbcTemplate jdbcTemplate;
	private SimpleJdbcInsert jdbcInsert;

	public OptionRepository(DataSource dataSource) {
		this.jdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
		this.jdbcInsert = new SimpleJdbcInsert(dataSource)
			.withTableName("options")
			.usingGeneratedKeyColumns("id");
	}

	public int findByName(String name) {
		String sql = "SELECT id FROM options WHERE name = :name";
		SqlParameterSource namedParameters = new MapSqlParameterSource("name", name);
		return jdbcTemplate.queryForObject(sql, namedParameters, Integer.class);
	}
}
