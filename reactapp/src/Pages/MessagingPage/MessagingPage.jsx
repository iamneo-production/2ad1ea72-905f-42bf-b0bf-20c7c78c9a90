import React, { useState } from 'react';
import { styled } from 'styled-components';

import profile from "../../profile1.png"

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const FollowerPanel = styled.div`
  width: 25%;
  background-color: #f0f0f0;
  padding: 20px;
  overflow-y: auto;
`;

const PanelHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FollowerItem = styled.button`
  margin-bottom: 10px;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  text-align: left;
  background-color: ${({ isActive }) => (isActive ? '#007bff' : '#f0f0f0')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
  border: none;
  border-radius: 5px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  &:hover {
    background-color: ${({ isActive }) =>
    isActive ? '#007bff' : '#e0e0e0'};
    color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
  }
`;

const MessageBox = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
`;

const MessageBoxTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const NoFollowerMessage = styled.p`
  color: #888888;
`;

const ChatScreen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MessageList = styled.ul`
  flex: 1;
  overflow-y: auto;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MessageItem = styled.li`
  margin-bottom: 10px;
`;

const MessageContent = styled.div`
  display: flex;
  align-items: center;
`;

const SenderAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MessageText = styled.p`
  background-color: #e9e9e9;
  padding: 8px;
  border-radius: 10px;
`;

const MessageInput = styled.div`
  display: flex;
  margin-top: 20px;
`;

const TextInput = styled.input`
  flex-grow: 1;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SendButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SendIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: #fff;
  margin-right: 6px;
`;

const MessagingPage = () => {
  const [activeFollower, setActiveFollower] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  const followers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alex Johnson' },
    // Add more followers as needed
  ];

  const handleFollowerClick = (followerId) => {
    setActiveFollower(followerId);
  };

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendMessage = () => {
    // Send the message using the input value
    console.log(`Message sent: ${messageInput}`);

    // Clear the input
    setMessageInput('');
  };

  return (
    <Container>
      <FollowerPanel>
        <PanelHeading>Have a Chat!</PanelHeading>
        <ul>
          {followers.map((follower) => (
            <FollowerItem
              key={follower.id}
              isActive={activeFollower === follower.id}
              onClick={() => handleFollowerClick(follower.id)}
            >
              {follower.name}
            </FollowerItem>
          ))}
        </ul>
      </FollowerPanel>
      <MessageBox>
        {activeFollower ? (
          <ChatScreen>
            <MessageBoxTitle>{`Chat with ${followers.find((follower) => follower.id === activeFollower).name
              }`}</MessageBoxTitle>
            <MessageList>
              <MessageItem>
                <MessageContent>
                  <SenderAvatar src={profile} alt="Profile" />
                  <MessageText>Hey, how's it going?</MessageText>
                </MessageContent>
              </MessageItem>
              {/* Add more message items as needed */}
            </MessageList>
            <MessageInput>
              <TextInput
                type="text"
                placeholder="Type your message"
                value={messageInput}
                onChange={handleInputChange}
              />
              <SendButton onClick={handleSendMessage}>
                <SendIcon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </SendIcon>
              </SendButton>
            </MessageInput>
          </ChatScreen>
        ) : (
          <NoFollowerMessage>
            Select a follower to open the chat.
          </NoFollowerMessage>
        )}
      </MessageBox>
    </Container>
  );
};

export default MessagingPage;
