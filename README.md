# Tracker (Revamped)

## Mission Statement

Tracker empowers individuals to take control of their finances with an intuitive, data-driven platform. By combining powerful analytics with a clean, engaging user experience, Tracker helps users understand their spending, optimize savings, and reach their financial goals with clarity and confidence.

## Product Vision

Our vision is to deliver an all-in-one personal finance solution that is both **smart** and **approachable**.
With this revamped version, we’re introducing:

* **Interactive Charts & Visualizations** – Real-time insights into spending, saving, and goal progress.
* **Plaid API Integration** – Securely link bank accounts to automatically import and categorize transactions.
* **Enhanced UX** – Streamlined navigation, improved accessibility, and a cleaner, more modern interface.

Tracker combines these improvements with our core features:

* **Dynamic Budget Page** – Track and categorize expenses in real-time, compare actual vs. projected spending, and receive personalized recommendations.
* **Goals Page** – Create personal or shared financial goals, simulate “What-If” scenarios, and visualize progress toward milestones.
* **Collaboration Tools** – Share budgets and savings goals with friends, family, or partners to work toward joint objectives.
* **Smart Insights** – AI-driven suggestions and interactive dashboards to help users make better financial decisions.

## Technology Stack

* **Frontend**: React.js
* **Backend**: Node.js + Express.js
* **Database**: MongoDB
* **API Integrations**: Plaid API for secure bank account linking and transaction imports
* **Data Visualization**: Chart.js / Recharts for interactive graphs
* **Authentication**: JWT-based secure login

## Planned Features for Revamp

1. **Charts Functionality** – Interactive charts for expense breakdowns, income trends, and goal tracking.
2. **Plaid API Integration** – Direct bank connectivity to reduce manual entry and improve accuracy.
3. **UX Improvements** – Modernized layout, better responsiveness, and enhanced accessibility features.
4. **Optimized Performance** – Faster load times and smoother data syncing.

## Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/TrackerRevamped.git
   cd TrackerRevamped
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Environment Variables**

   * `MONGO_URI` – MongoDB connection string
   * `PLAID_CLIENT_ID` & `PLAID_SECRET` – Plaid API credentials
   * `JWT_SECRET` – Secret key for authentication

4. **Run the Development Server**

   ```bash
   npm run dev
   ```

## Core Team

* **Chris Bobadilla** ([GitHub](https://github.com/chrisbobadilla)) – Lead Developer & UX Designer