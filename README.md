# React Native Expo Project with Jest Testing

## Project Description

This is a React Native project created with Expo. The primary focus of this project is to demonstrate the implementation of Unit Testing and End-to-End (E2E) testing using Jest. Additionally, this project incorporates Zod for schema validation and data validation purposes.

### Features

- **Unit Testing**: Comprehensive unit tests to ensure individual components and functions perform as expected.
- **End-to-End Testing (E2E)**: E2E tests to simulate real user scenarios and verify the entire flow of the application.
- **Zod for Validation**: Utilizes Zod for schema validation to ensure the data meets the required format and constraints.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- Node.js and npm installed on your local machine.
- Expo CLI installed globally (`npm install -g expo-cli`).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/react-native-expo-jest-zod.git
    cd react-native-expo-jest-zod
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

You can start the application on different platforms using the following npm scripts:

- Start the development server:
    ```bash
    npm start
    ```
- Run the app on an Android device/emulator:
    ```bash
    npm run android
    ```
- Run the app on an iOS simulator:
    ```bash
    npm run ios
    ```
- Run the app on a web browser:
    ```bash
    npm run web
    ```

## Testing the Application

This project uses Jest for running tests. The test setup includes both Unit Tests and End-to-End (E2E) Tests.

### Running Tests

To run all tests in watch mode, use the following command:
```bash
npm run test
