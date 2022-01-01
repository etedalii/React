import Expenses from "./components/Expenses/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.65,
      date: new Date(2021, 12, 31),
    },
    {
      id: "e2",
      title: "Car Insurance2",
      amount: 194.65,
      date: new Date(2021, 10, 31),
    },
    {
      id: "e3",
      title: "Car Insurance3",
      amount: 27.65,
      date: new Date(2021, 11, 12),
    },
    {
      id: "e4",
      title: "Car Insurance4",
      amount: 69.65,
      date: new Date(2021, 7, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
