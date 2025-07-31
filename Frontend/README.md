# Uber Clone Frontend

A React-based frontend implementation of an Uber-like ride-hailing application.

## Features

### User Features
- User authentication (login/signup)
- Location-based ride booking
- Vehicle type selection
- Real-time ride tracking
- Payment processing interface
- Ride history

### Captain (Driver) Features
- Captain authentication (login/signup)
- Vehicle registration
- Ride acceptance/rejection
- Navigation interface
- Ride completion and payment collection
- Profile management

## Tech Stack

- React (with Vite)
- TailwindCSS for styling
- GSAP for animations
- Axios for API calls
- React Router for navigation
- Context API for state management

## Environment Variables

Create a `.env` file in the root directory with:

```env
VITE_BASE_URL=your_backend_api_url
VITE_API_URL=your_api_url
```

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/         # Reusable UI components
├── context/           # React Context providers
├── pages/             # Main route components
│   ├── user/         # User-related pages
│   └── captain/      # Captain-related pages
└── assets/           # Static resources

```

## Main Routes

### User Routes
- `/` - Landing page
- `/login` - User login
- `/register` - User registration
- `/home` - User dashboard
- `/riding` - Active ride view

### Captain Routes
- `/captain-login` - Captain login
- `/captain-signup` - Captain registration
- `/captain-home` - Captain dashboard
- `/captain-riding` - Active ride management

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
