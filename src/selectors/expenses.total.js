export default expenses => expenses.reduce((sum, exp) => sum + exp.amount, 0);
