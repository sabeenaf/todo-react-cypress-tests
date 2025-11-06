


# Cypress UI Test Suite – TodoMVC (React)

This project contains end-to-end UI automation tests for the **TodoMVC React** example application, implemented using **Cypress**.  
The goal of this project is to demonstrate practical test design, maintainable automation structure, and clear test coverage for core user workflows.

---


## 🧪 Scope of Testing

The test suite validates core functionality of a shopping list-style application:

| Test Case | Description |
|----------|-------------|
| Add Items to List | Verifies that new items can be successfully added. |
| Remove Items from List | Ensures deleting an item removes it from the UI. |
| Filter Active Items | Displays only unchecked items when filter is applied. |
| Filter Completed Items | Displays only checked items when filter is applied. |
| View Total Item Count | Confirms the count in the footer matches actual visible items. |
| Negative Test: Add Empty Input | Prevents adding empty or whitespace-only entries. |

---

## 🧪 Application Under Test
**TodoMVC (React)**  
https://todomvc.com/examples/react/dist/


## 📁 Project Structure

/cypress
/e2e
addItemToList.cy.js
removeItemFromList.cy.js
filterActiveItems.cy.js
filterCompletedItems.cy.js
viewItemCount.cy.js
negativeAddEmptyInput.cy.js
/fixtures
shoppinglist.json
/support
shoppingListHelper.js
cypress.config.js
README.md


- **fixtures/** contains test data (shopping list items)
- **support/** contains reusable helper functions to avoid repetition
- **e2e/** contains test case specifications

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v14+ recommended)
- npm (comes with Node)
- Cypress installed globally or locally in the project

### **Install Dependencies**
npm install

### **Open Cypress UI**
npx cypress open

### **Run Cypress Tests**
npx cypress run

---
## 🎯 Key Highlights

- Uses **data fixtures** for scalable input-driven testing  
- Implements **helper functions** to improve maintainability  
- Covers **both positive and negative** user flows  
- Uses **UI state assertions** rather than hardcoded waits for reliability  

---

## 🌱 Future Enhancements

- **CI Pipeline integration** using GitHub Actions  
- **Visual regression testing** (e.g., Percy / Applitools)  
- **Mobile viewport test coverage**  
- **Enhanced reporting** using Allure or Mochawesome  

