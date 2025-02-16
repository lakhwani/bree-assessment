# OFAC Screening Application

This project consists of a frontend and a backend to screen customers against the publicly available OFAC Specially Designated Nationals (SDN) list.

![breedemo](https://github.com/user-attachments/assets/202bc008-8183-4995-80da-e859bca0fbc1)

## Prerequisites

- Node.js (>= 14.x)
- npm (>= 6.x)

## Accessing the Publicly Accessible URL.
The frontend of the application is deployed on: [https://bree-assessment.vercel.app/](https://bree-assessment.vercel.app/)
**Note**: Ensure the backend is running locally on `http://localhost:4000` for the frontend to communicate with it.

## Setup Instructions

### Backend

1. **Navigate to the backend directory**:

   ```sh
   cd backend
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Create a `.env` file** by copying the `.env.example`:

   ```sh
   cp .env.example .env
   ```

4. **Update the `.env` file** with your configuration:
   ```env
   OFAC_API_KEY=<your-ofac-api-key>
   PORT=4000
   FRONTEND_URL=https://bree-assessment.vercel.app
   ```

### Frontend

1. **Navigate to the frontend directory**:

   ```sh
   cd frontend
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Create a `.env` file** by copying the `.env.example`:

   ```sh
   cp .env.example .env
   ```

4. **Update the `.env` file** with your configuration:
   ```env
   NEXT_PUBLIC_BACKEND_DOMAIN=http://localhost:4000
   ```

## Environment Variables

### Backend

The backend requires the following environment variables, defined in the `.env` file:

- `OFAC_API_KEY`: Your OFAC API key.
- `PORT`: The port on which the backend server will run.
- `FRONTEND_URL`: The URL of the frontend application (e.g., `https://bree-assessment.vercel.app`).

### Frontend

The frontend requires the following environment variables, defined in the `.env` file:

- `NEXT_PUBLIC_BACKEND_DOMAIN`: The URL of the backend server (e.g., `http://localhost:4000`).

## Running the Application

### Backend

1. **Build the backend**:

   ```sh
   npm run build
   ```

2. **Start the backend server**:
   ```sh
   npm start
   ```

### Frontend

1. **Start the frontend server**:
   ```sh
   npm run dev
   ```

### Accessing the Application

- Open your browser and navigate to `http://localhost:3000` to access the frontend.

### Assumptions Made
- Use of date of birth instead of birth year for more precise matching.
- Displaying hits for DoB and Country only when the full name is a hit
