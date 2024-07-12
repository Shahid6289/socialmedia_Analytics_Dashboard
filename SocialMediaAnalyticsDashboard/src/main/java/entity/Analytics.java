package entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Analytics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private int followers;
    private int following;
    private int posts;
    private int accountReached;
    private int accountEngaged;
    private int contentShared;
    private int adsRun;
    private int activePromotions;
    private int totalStories;
    private int totalFollows;
    private int totalSaves;
    private int totalComments;
    private int totalShares;
}
