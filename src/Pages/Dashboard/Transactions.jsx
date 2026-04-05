import React from "react";
import { transactions } from "../../data/mockData";
import OverviewCard from "../../Components/Dashboard/OverviewCard";
import { AiOutlineWallet } from "react-icons/ai";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";

const Transactions = () => {
  // total income
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  // console.log(totalIncome);

  // Total expenses
  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  // console.log(totalExpense);

  // total balance
  const balance = totalIncome - totalExpense;
  console.log(balance);

  const dashData = [
    {
      icon: <AiOutlineWallet />,
      amount: totalIncome,
      title: "Total Income",
      desc: "⬆️ 3 months combined",
      color: "from-emerald-500/10 via-transparent to-teal-500/10",
      iconBg: "bg-emerald-50 text-emerald-600",
      amountColor: "text-emerald-600",
      trend: "+12% vs last month",
      trendUp: true,
    },
    {
      icon: <BsGraphDownArrow />,
      amount: totalExpense,
      title: "Total Expenses",
      desc: "⬇️ Across 10 categories",
      color: "from-rose-500/10 via-transparent to-red-500/10",
      iconBg: "bg-rose-50 text-rose-500",
      amountColor: "text-rose-500",
      trend: "+5% vs last month",
      trendUp: false,
    },
    {
      icon: <BsGraphUpArrow />,
      amount: balance,
      title: "Net Balance",
      desc: "💰 Income minus expenses",
      color: "from-indigo-500/10 via-transparent to-purple-500/10",
      iconBg: "bg-indigo-50 text-indigo-600",
      amountColor: "text-indigo-600",
      trend: "Healthy savings rate",
      trendUp: true,
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full">
        {dashData.map((item) => (
          <OverviewCard item={item} key={item.id} />
        ))}
      </div>{" "}
    </div>
  );
};

export default Transactions;
