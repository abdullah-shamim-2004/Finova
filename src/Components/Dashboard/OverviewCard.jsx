import React from "react";

const OverviewCard = ({ item }) => {
  return (
    <div
      className="group relative p-6 rounded-[2rem] bg-white border border-slate-100
               shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${item.color}
                  opacity-0 group-hover:opacity-100 transition duration-300`}
      />

      {/* Top Row — Icon + Title */}
      <div className="relative flex items-center gap-3 mb-5">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center
                    text-xl ${item.iconBg}
                    group-hover:scale-110 transition-transform duration-300`}
        >
          {item.icon}
        </div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
          {item.title}
        </h3>
      </div>

      {/* Amount */}
      <div className="relative mb-2">
        <h2 className={`text-3xl font-extrabold ${item.amountColor}`}>
          ${item.amount.toLocaleString()}
        </h2>
      </div>

      {/* Trend badge */}
      <div className="relative flex items-center gap-2 mb-3">
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full
                    ${
                      item.trendUp
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-rose-50 text-rose-500"
                    }`}
        >
          {item.trend}
        </span>
      </div>

      {/* Description */}
      <p className="relative text-sm text-slate-400 leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
};

export default OverviewCard;
