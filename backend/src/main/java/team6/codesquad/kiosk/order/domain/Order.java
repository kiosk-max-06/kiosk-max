package team6.codesquad.kiosk.order.domain;

import java.time.LocalDateTime;

import lombok.NoArgsConstructor;


public class Order {
    private Integer id;
    private int totalAmount;
    private Integer orderStatusId;
    private int receivedAmount;
    private int change;
    private Integer paymentId;

    public Order(int totalAmount, int receivedAmount, int change) {
        this(null, totalAmount, null, receivedAmount, change, null);
    }

    public Order(Integer id, int totalAmount, Integer orderStatusId, int receivedAmount, int change,
        Integer paymentId) {
        this.id = id;
        this.totalAmount = totalAmount;
        this.orderStatusId = orderStatusId;
        this.receivedAmount = receivedAmount;
        this.change = change;
        this.paymentId = paymentId;
    }
}
