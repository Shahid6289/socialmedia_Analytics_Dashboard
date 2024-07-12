package service;

import entity.Analytics;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.AnalyticsRepository;

import java.util.List;

@Service
public class AnalyticsService {
    @Autowired
    private AnalyticsRepository analyticsRepository;

    public Analytics getAnalyticsById(Long id) {
        return analyticsRepository.findById(id).orElse(null);
    }

    public List<Analytics> getAllAnalytics() {
        return analyticsRepository.findAll();
    }

    public Analytics saveAnalytics(Analytics analytics) {
        return analyticsRepository.save(analytics);
    }
}
