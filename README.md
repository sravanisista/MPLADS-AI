# MPLADS Monitoring Dashboard

## Project Title

**MPLADS Monitoring Dashboard – Project Risk & Anomaly Monitoring**

## About the Project

This is a basic prototype for monitoring projects implemented under the **Members of Parliament Local Area Development Scheme (MPLADS)**.

The dashboard helps users:

* View project records
* Monitor financial and physical progress
* Identify high-risk projects
* Compare financial progress with physical progress
* View complete project details
* Understand possible anomalies
* Download a project report

## Prototype Features

### 1. Dashboard

Displays:

* Total Projects
* Total Sanctioned Funds
* High Risk Projects
* Average Physical Progress

### 2. Project Risk Map

Projects are represented on a simple India-based visual map.

Different markers indicate projects that require different levels of attention.

### 3. Risk Overview

Projects are classified into:

* 🔴 High Risk
* 🟡 Medium Risk
* 🟢 Low Risk

### 4. Project Records

Users can:

* Search projects
* Filter by state
* Filter by risk level
* Select a project to view complete details

### 5. Project Details

Each project displays:

* Project ID
* State
* District
* MP / Constituency
* Work Description
* Work Category
* Sanctioned Amount
* Released Amount
* Utilized Amount
* Physical Progress
* Financial Progress
* Sanction Date
* Completion Status
* Risk Score

### 6. Anomaly Detection

The prototype uses a simple rule-based approach.

For example:

**Financial Progress = 99%**
**Physical Progress = 68%**

The large difference indicates a possible mismatch and the project is flagged for closer monitoring.

> This is a prototype rule-based anomaly indicator, not a trained AI/ML model.

### 7. Project Report

Users can click **Download Project Report** to generate a text report containing the project's details and risk information.

---

# Technology Stack

## Frontend

* HTML5
* CSS3
* JavaScript

## Data

* CSV
* Self-created prototype dataset

## Analysis

* JavaScript-based rule engine
* Financial vs Physical Progress comparison

## Tools

* Visual Studio Code
* Web Browser

---

# Project Structure

```text
MPLADS-Monitoring/
│
├── index.html
├── style.css
├── script.js
├── projects.csv
└── README.md
```

---

# How to Run

### Step 1

Open the project folder in **Visual Studio Code**.

### Step 2

Make sure all five files are present:

```text
index.html
style.css
script.js
projects.csv
README.md
```

### Step 3

Open `index.html`.

You can either:

* Double-click `index.html`, or
* Right-click `index.html` → **Open with Live Server**

### Step 4

The **MPLADS Monitoring Dashboard** will open in your browser.

---

# How to Use

1. Open the dashboard.
2. Check the summary cards.
3. View the project risk map.
4. Check the Risk Overview section.
5. Scroll to Project Records.
6. Search or filter projects.
7. Click any project.
8. View complete project details.
9. Check the financial and physical progress.
10. View the anomaly explanation.
11. Click **Download Project Report**.

---

# Demo Data Disclaimer

The data used in this prototype is **self-created sample data for demonstration purposes only**.

It does not represent official MPLADS records.

For a production system, verified government datasets and authorized MPLADS/MoSPI data sources would be integrated.

---

# Future Scope

The prototype can later be extended with:

* Real MPLADS government data integration
* Machine Learning-based anomaly detection
* GIS-based India map
* District-level visualization
* Historical expenditure analysis
* Contractor/work-agency analysis
* Automated alerts
* Role-based government access
* Database and backend integration
* Audit trail
* Advanced fraud-risk scoring
* Real-time monitoring

---

## Project Objective

**To provide a transparent and intelligent monitoring interface that can help identify unusual project patterns and support better decision-making, accountability, and efficient utilization of MPLADS funds.**
