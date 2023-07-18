import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';


export default function PostPage() {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    const formData = new FormData();
    formData.append('description', description);
    formData.append('image', image);

  };

  return (
    <Container style={{ maxWidth: '400px', marginTop: '50px' }}>
      <h1>Create a Post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          {imageUrl && (
            <div style={{ marginBottom: '10px' }}>
              <img src={imageUrl} alt="Selected" style={{ maxWidth: '100%' }} />
            </div>
          )}
          <Form.Control type="file" onChange={handleImageChange} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label> 
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter your post description"
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ backgroundColor: 'black', borderColor: 'black', marginRight: '10px' }}>
          Create Post
        </Button>
      </Form>
    </Container>
  );
}
