import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f0f0f0;
`;

const NotificationsContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const NotificationsHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const NotificationList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NotificationItem = styled.li`
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
  cursor: pointer;
`;

const NotificationContent = styled.p`
  margin-bottom: 0;
  color: #333333;
  font-size: 1.2rem;
`;

const NotificationDetails = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const NotificationDetailsHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const NotificationDetailsContent = styled.p`
  color: #555555;
  font-size: 1rem;
`;

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      // Replace '1' with the logged-in user's ID
      const userId = 1;
      const response = await axios.get(`/api/notifications/user/${userId}`);
      setNotifications(response.data);
    } catch (error) {
      console.log('Error fetching notifications:', error);
    }
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  return (
    <Container>
      <NotificationsContainer>
        <NotificationsHeading>Notifications</NotificationsHeading>
        <NotificationList>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} onClick={() => handleNotificationClick(notification)}>
              <NotificationContent>{notification.content}</NotificationContent>
            </NotificationItem>
          ))}
        </NotificationList>
      </NotificationsContainer>
      {selectedNotification && (
        <NotificationDetails>
          <NotificationDetailsHeading>Notification Details</NotificationDetailsHeading>
          <NotificationDetailsContent>{selectedNotification.content}</NotificationDetailsContent>
          {/* Add more details here based on your notification data */}
        </NotificationDetails>
      )}
    </Container>
  );
};

export default NotificationPage;
