import React, { useState } from 'react';
import { Avatar, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Stack, Box, HStack } from '@chakra-ui/react';
import { FaShare, FaCheck } from 'react-icons/fa';

const UserItem = ({ user, isSelected, handleClick }) => {
  return (
    <HStack spacing={2} alignItems="center">
      {isSelected && <FaCheck />}
      <Avatar size="lg" name={user.name} src={user.profilePicture} />
      <Button
        variant={isSelected ? 'solid' : 'outline'}
        onClick={handleClick}
      >
        {user.name}
      </Button>
    </HStack>
  );
};

const ShareModal = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleUserClick = (user) => {
    setSelectedUser((prevSelectedUser) => {
      if (prevSelectedUser && prevSelectedUser.name === user.name) {
        return null;
      } else {
        return user;
      }
    });
  };

  const handleSend = () => {
    // Send the post to the selected user
    if (selectedUser) {
      console.log('Post sent to:', selectedUser.name);
    }
    handleCloseModal();
  };

  return (
    <div>
      {/* Post content */}
      <IconButton icon={<FaShare />} onClick={handleOpenModal} />

      <Modal isOpen={isOpen} onClose={handleCloseModal} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send To...</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <UserItem
                user={{ name: 'User1', profilePicture: '/path/to/user1.jpg' }}
                isSelected={selectedUser && selectedUser.name === 'User1'}
                handleClick={() => handleUserClick({ name: 'User1' })}
              />
              <UserItem
                user={{ name: 'User2', profilePicture: '/path/to/user2.jpg' }}
                isSelected={selectedUser && selectedUser.name === 'User2'}
                handleClick={() => handleUserClick({ name: 'User2' })}
              />
              <UserItem
                user={{ name: 'User3', profilePicture: '/path/to/user3.jpg' }}
                isSelected={selectedUser && selectedUser.name === 'User3'}
                handleClick={() => handleUserClick({ name: 'User3' })}
              />
              {/* Add more users as needed */}
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSend} disabled={!selectedUser}>
              Send
            </Button>
            <Button variant="ghost" onClick={handleCloseModal}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ShareModal;
