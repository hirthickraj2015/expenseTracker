const Budget = require("../models/budget.model");

exports.getBudget = async (req, res) => {
  try {
    const budget = await Budget.find();
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBudgetByMonth = async (req, res) => {
  try {
    const { month } = req.params;
    const budget = await Budget.find({ month: month });
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateOrCreateBudget = async (req, res) => {
  const { month, monthlyBudget, newItem } = req.body;

  try {
    const existingBudget = await Budget.findOne({ month });

    if (existingBudget) {
      if (monthlyBudget) existingBudget.monthlyBudget = monthlyBudget;
      existingBudget.budgets.push(newItem);
      await existingBudget.save();
      console.log("Budget updated successfully");
    } else {
      const budget = new Budget({
        month,
        monthlyBudget: monthlyBudget,
        budgets: [newItem],
      });
      await budget.save();
      console.log("New budget created successfully");
    }

    res.json({ message: "Updated Successfully!" });
  } catch (error) {
    console.error("Error updating budget:", error);
    res.json({ message: error.message });
  }
};
