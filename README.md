# Quote Application

This is a frontend application that allows users to login, view a paginated list of quotes, and create new quotes with text and image uploads. The application interacts with a backend API to perform these actions.

## Features

1. **Login Page**: 
    - Users can enter their username and OTP to login.
    - On successful login, a token is stored for authenticated requests.

2. **Quote List Page**: 
    - Displays a paginated list of quotes.
    - Each quote shows the associated image, text, username, and creation date.
    - Infinite scrolling to load more quotes as the user scrolls down.
    - A floating action button to navigate to the quote creation page.

3. **Quote Creation Page**: 
    - Users can enter quote text and upload an image.
    - The image is uploaded to get a media URL, which is then used to create the quote.

## Technologies Used
- React
- React Router
- Axios
- CSS for styling

## Installation

1. **Clone the repository:**
   git clone https://github.com/shivaniKushwahh/craftoApp.git

2. **Install dependencies**:
npm install

3. **Start the development server**:
npm start
