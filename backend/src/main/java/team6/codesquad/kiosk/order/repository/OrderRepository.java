package team6.codesquad.kiosk.order.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import team6.codesquad.kiosk.order.domain.Order;

@Repository
public class OrderRepository {
	private JdbcTemplate jdbcTemplate;

	public OrderRepository(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public void save(Order order) {
		// jdbcTemplate.update("INSERT INTO order(total_amount, received_amount, change)")


		// public void save(Article article) {
		// 	jdbcTemplate.update("INSERT INTO article(writer, title, contents, created_at) values (?, ?, ?, ?)",
		// 		article.getWriter(),
		// 		article.getTitle(),
		// 		article.getContents(),
		// 		article.getCreateAt());
		// }
	}
}
