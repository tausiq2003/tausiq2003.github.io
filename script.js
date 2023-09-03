const nameInput = document.getElementsByName('name');
const emailInput = document.getElementsByName('email'); 
const messageInput = document.getElementsByName('message');
function validateInput() {

    let name = nameInput.value;
    let email = emailInput.value;
    let message = messageInput.value;
  
    if (name === '') {
      alert('Name is required');
      return false;
    }
    
    if (email === '') {
      alert('Email is required');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Invalid email format');
          return false;
        }
    }
  
    if (message === '') {
      alert('Message is required');  
      return false;
    }
  
    if (message.split(' ').length < 20 || message.split(' ').length > 100) {
      alert('Message must be between 20 - 100 words');
      return false;
    }
  
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  
    return true;
  
  }
  
validateInput();