package com.study.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.study.springapp.model.Notification;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Integer> {

    @Query(value = "SELECT * FROM noti WHERE toUserId = ?1", nativeQuery = true)
    List<Notification> findByToUserId(int toUserId);

}
