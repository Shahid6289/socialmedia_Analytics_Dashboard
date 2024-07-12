package controller;

import entity.Analytics;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.AnalyticsService;

import java.util.List;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {
    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping("/{id}")
    public Analytics getAnalytics(@PathVariable Long id) {
        return analyticsService.getAnalyticsById(id);
    }

    @GetMapping
    public List<Analytics> getAllAnalytics() {
        return analyticsService.getAllAnalytics();
    }

    @PostMapping
    public Analytics createAnalytics(@RequestBody Analytics analytics) {
        return analyticsService.saveAnalytics(analytics);
    }
}
