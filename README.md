# E-Commerce Product Dashboard

## Setup and Running the Application

### Clone the Repository:

#### `git clone https://github.com/ryanskystack/ecom.git`

### Navigate to the Project Directory

#### `cd ecom`

### Install Dependencies

#### `npm install`

### Run the project

Start the fake server
#### `npx json-server db.json`

Start the application:
#### `npm start`
The application will be available at http://localhost:3000.

### Run test
#### `npm test`
This command launches the test runner in the interactive watch mode.


## Application Overview

The E-Commerce Product Dashboard is a React application designed to showcase expertise in React, API integration, state management, and front-end testing. The primary goal is to create a simplified e-commerce platform where users can view products and add them to their shopping cart. While the project name suggests a dashboard, the focus is primarily on the product listing page.

## Key Features:

- **Product Listing:** Display a list of products with essential details (image, description, price). Include an “Add to Cart” button for each product.
- **Product Search and Filter:** Implement search functionality to find products by name. Create filters to categorize products (e.g., by categories).
- **Responsive Design:** Ensure the application works well across different devices and screen sizes.

## Architecture and Technologies Used

The project follows a specific folder structure and uses a variety of technologies for its development.

### Folder Structure:

ecom/

├── __mocks__/

│   └── js_fileMock.js

├── __tests__/

│   ├── integration/

│   └── unit/

├── node_modules/

├── public/

├── src/

│   ├── components/

│   ├── constants/

│   ├── page/

│   ├── api/

│   ├── utils/

│   ├── App.css

│   ├── App.tsx

│   ├── index.css

│   ├── index.tsx

│   └── logo.svg

├── .gitignore

├── jest.setup.js

├── package-lock.json

├── package.json

├── README.md

└── tsconfig.json


### Technologies Used:

- **React:** Chosen for its component-based architecture, reusability, and efficient rendering.
- **JSON Server:** A powerful tool that allows us to create a fake REST API from a JSON file.
- **Redux:** A predictable state container for JavaScript apps. It helps manage application state, making it consistent across different environments (client, server, and native).
- **Jest for Testing:** A delightful JavaScript testing framework with a focus on simplicity.
- **Styled Components:** A CSS-in-JS library that lets you write CSS code directly in your JavaScript files.
- **Axios:** Used for making API requests to retrieve product data from the mock server.
- **React Router:** Enables routing within the application.


## Project Discussion

### Project Scope:

The checkout page and the entire order and payment process are not included in the current scope of the project. 

#### Checkout Page:
Create a new route for the checkout page (e.g., /checkout).
Design the checkout form where users can enter their shipping details, payment information, and review their order.(Integration with Strip, etc)
Implement validation for user inputs (e.g., valid email, required fields).

#### Order Handling:
Set up an API endpoint to handle order creation. (Integration with Strip, etc)
When a user completes the checkout process, send an order request.
Store relevant order details (products, quantities, user information) in a database or session.

#### Payment Integration:
Choose a payment gateway (e.g., Stripe, PayPal, or a mock payment service).
Integrate the payment gateway into your checkout process.
Handle payment confirmation and error scenarios.

#### Confirmation Page:
After successful payment, redirect users to a confirmation page.
Display order details and a thank-you message.
Remember that integrating payment gateways involves security considerations and sensitive data handling. 


### Assumptions

When submitting the order, the user should have already registered.

Security issues have already been addressed.

Backend side has already set up strategies to Handle high concurrency events:
e.g. 
#### Caching: 
Implement caching mechanisms to reduce the load on the database. Cached data can be served directly to users, reducing the number of database queries.

#### Database Sharding: 
Distribute the database across multiple servers to distribute the load. Each shard handles a subset of the data, allowing for better scalability.

#### Load Balancing: 
Use load balancers to distribute incoming traffic across multiple servers. This ensures that no single server becomes overwhelmed with requests.

#### Asynchronous Processing: 
Offload non-critical tasks to background processes or queues. 

#### Optimized Queries: 
Ensure that database queries are optimized for performance. This includes using indexes, avoiding unnecessary joins, and fetching only the required data.