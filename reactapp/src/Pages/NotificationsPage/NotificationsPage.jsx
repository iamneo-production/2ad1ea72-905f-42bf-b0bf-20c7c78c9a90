import React from 'react';
import { styled } from 'styled-components';

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
`;

const NotificationContent = styled.p`
  margin-bottom: 0;
  color: #333333;
  font-size: 1.2rem;
`;

const NotificationPage = () => {
  const notifications = [
    {
      id: 1,
      content: 'You have a new follower: John Doe',
    },
    {
      id: 2,
      content: 'Jane Smith liked your post',
    },
    {
      id: 3,
      content: 'Alex Johnson commented on your photo',
    },
    // Add more notifications as needed
  ];

  return (
    <Container>
      <NotificationsContainer>
        <NotificationsHeading>Notifications</NotificationsHeading>
        <NotificationList>
          {notifications.map((notification) => (
            <NotificationItem key={notification.id}>
              <NotificationContent>{notification.content}</NotificationContent>
            </NotificationItem>
          ))}
        </NotificationList>
      </NotificationsContainer>
      {/* Add notification details or content section here */}
    </Container>
  );
};

export default NotificationPage;
