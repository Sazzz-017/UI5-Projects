# Employee Directory (SAP UI5 Project)

## 📌 Overview
This is a **basic SAP UI5 application** that demonstrates how to build a simple **Employee Directory**.  
The app allows users to:
- Add employees to a temporary list  
- Move employees from the temporary list into the main employee directory  
- Delete employees from the directory  

This project is aimed at beginners to learn core **UI5 concepts** such as:
- MVC architecture (Model-View-Controller)  
- JSONModel for data handling  
- UI controls like Input, Button, List, CustomListItem, VBox, and HBox  
- Event handling in controllers  

---

## 🛠️ Project Structure
emp1/
│── index.html # Entry point of the application
│── Component.js # Initializes the app and sets up the JSON model
│── view/
│ └── App.view.xml # UI layout (View)
│── controller/
│ └── App.controller.js # Handles app logic (Controller)
│── model/
│ └── models.js # (Optional) Model configurations
│── manifest.json # Application descriptor (metadata, routing, resources)

---

## 🚀 Features
- **Add Employee**: Enter a name and click **Add Employee** → added to a temporary list  
- **Show List**: Moves all temporary employees to the main list  
- **Delete Employee**: Remove an employee from the list  

---

## 💻 Technologies Used
- [SAP UI5 (OpenUI5)](https://ui5.sap.com/)  
- JavaScript (ES6)  
- XML Views  
- JSON Model  

---

## ▶️ How to Run
1. Clone or download the project.  
2. Place the project folder inside a web server (e.g., Apache, UI5 Tooling, or simply use VS Code Live Server).  
3. Open `index.html` in your browser.  

---

## 📷 UI Preview
The application contains:
- Input field to enter employee name  
- Buttons: **Add Employee** and **Show List**  
- List of employees with a **Delete** button for each item  

---

## 🧩 Key Learnings
- Initializing a `JSONModel` in `Component.js`  
- Binding list items with `{emplist>/task}`  
- Handling button press events (`onAdd`, `onshow`, `ondelete`) in controllers  
- Using UI5 layout controls (`VBox`, `HBox`, `Page`, `App`)  

---

##References

SAP UI5 SDK

OpenUI5 Tutorials
