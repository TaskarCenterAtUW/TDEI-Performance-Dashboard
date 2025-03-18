# TDEI Performance Dashboard

This repository contains the front-end code for the **TDEI Performance Dashboard**, a React-based web dashboard providing comprehensive insights into transportation data metrics. The application uses Material UI for styling and layout.

---

## Application URL

- **Live Application:** [https://metrics.tdei.us](https://metrics.tdei.us)

---

## Features

- **System Usage Metrics:** Insights into user activity, project groups, dataset uploads/downloads, and API usage.
- **Data Metrics:** OSW, Flex, and Pathways datasets with detailed geographic statistics.
- **TDEI Metrics:** Performance analytics including annual trips, satisfaction rates, route coverage, and validation metrics.
- **TDEI Demonstration Regions:** Detailed breakdown of services and datasets associated with project groups like **US DOT ITS4US**.

---

## Local Development Setup

### Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher)

### Steps for Local Development

**Step 1: Clone the Repository**

```shell
git clone <repository-url>
```

**Step 2: Navigate to Project Directory**
```shell
cd tdei-metrics-ui
```

**Step 3: Install Dependencies**
```shell
npm install
```

**Step 4: Configure Environment Variables**

Create a .env file in the project's root directory and set your environment variables as shown below:

```shell
REACT_APP_API_BASE_URL=<Base URL for TDEI Metrics Backend APIs>
REACT_APP_PKI=<Your PKI value>
REACT_APP_ENCRYPTED_KEY=<Your Encrypted API Key>
REACT_APP_BASE_URL=<API Base URL>

# Environment-specific Project Group ID
REACT_APP_PROJECT_GROUP=<Project Group ID based on environment
```

### Environment-specific Project Group IDs:

| Environment  | Project Group Name      | Project Group ID                |
|--------------|-------------------------|---------------------------------|
| Development  | Dev_GS_Test_Group       | `<Development Project Group ID>`|
| Staging      | Stage_GS_Test_Group     | `<Staging Project Group ID>`    |
| Production   | US DOT ITS4US           | `<Production Project Group ID>` |

**Step 5: Run the Development Server**

```shell
npm start
```

**Step 6: View Application**

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build and Deployment

**Step 1: Confirm Dependencies**

```shell
npm install

```
**Step 2: Create Production Build**

```shell
npm run build

```
The production-ready build files will be placed in the build/ folder.