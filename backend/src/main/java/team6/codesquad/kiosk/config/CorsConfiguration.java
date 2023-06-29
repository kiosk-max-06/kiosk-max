package team6.codesquad.kiosk.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
			.allowedOrigins("http://13.125.16.208:80",
				"http://localhost:3000",
				"http://localhost:8080",
				"http://127.0.0.1:3000")
			.allowedMethods("GET", "POST", "OPTION", "PUT");
	}
}
