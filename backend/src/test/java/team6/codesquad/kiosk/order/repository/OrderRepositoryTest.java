package team6.codesquad.kiosk.order.repository;

import static org.assertj.core.api.Assertions.*;

import javax.sql.DataSource;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.jdbc.Sql;

import team6.codesquad.kiosk.order.domain.Order;

@JdbcTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Sql("classpath:schema.sql")
class OrderRepositoryTest {

	private OrderRepository repository;
	private PaymentRepository paymentRepository;

	@Autowired
	public OrderRepositoryTest(DataSource dataSource) {
		this.repository = new OrderRepository(dataSource);
		this.paymentRepository = new PaymentRepository(dataSource);
	}

	@BeforeEach
	void setUp(@Autowired DataSource dataSource) {
		JdbcTemplate template = new JdbcTemplate(dataSource);
		template.update("drop table orders");
		template.update("CREATE TABLE IF NOT EXISTS `kiosk`.`orders`\n"
			+ "(\n"
			+ "    `id`              INT NOT NULL AUTO_INCREMENT,\n"
			+ "    `total_amount`    INT NOT NULL COMMENT '총 결제금액',\n"
			+ "    `received_amount` INT NOT NULL COMMENT '지불금액',\n"
			+ "    `changes`         INT NOT NULL COMMENT '거스름돈',\n"
			+ "    `payment_id`      INT NOT NULL,\n"
			+ "    PRIMARY KEY (`id`),\n"
			+ "    INDEX `fk_order_payment1_idx` (`payment_id` ASC) VISIBLE\n"
			+ ") ENGINE = InnoDB");
	}

	@Test
	@DisplayName("Orders 객체를 넘겨주면 데이터베이스에 저장 후 키를 반환한다.")
	void saveTest() {
		//given
		int totalAmount = 10000;
		int receivedAmount = 4000;
		int change = totalAmount - receivedAmount;
		Order order = new Order(totalAmount, receivedAmount, change, paymentRepository.findByName("cash"));

		//when
		int saveKey = repository.save(order);

		//then
		assertThat(1).isEqualTo(saveKey);
	}
}
