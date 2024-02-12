const Expense = require("../models/expense.model");

exports.getExpense = async (req, res) => {
  try {
    const expense = await Expense.find();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getExpenseByMonth = async (req, res) => {
  try {
    const expense = await Expense.find();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.postExpense = async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    await newExpense.save();
    res.status(201).json({ data: newExpense });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
