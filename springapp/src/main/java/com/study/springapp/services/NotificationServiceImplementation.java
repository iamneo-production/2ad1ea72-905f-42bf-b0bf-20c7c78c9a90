package com.study.springapp.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import com.study.springapp.model.Notification;
import com.study.springapp.repository.NotificationRepository;

@Service
public class NotificationServiceImplementation implements NotificationService {

    private final NotificationRepository notificationRepository;

    @Autowired
    public NotificationServiceImplementation(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    @Override
    public Notification createNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Notification> getNotificationsForUser(int userId) {
        return notificationRepository.findByToUserId(userId);
    }
}