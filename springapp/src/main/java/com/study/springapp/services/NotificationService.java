package com.study.springapp.services;

import java.util.List;

import com.study.springapp.model.Notification;

public interface NotificationService {
    Notification createNotification(Notification notification);
    List<Notification> getNotificationsForUser(int userId);
}
