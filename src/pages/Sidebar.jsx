// Sidebar.jsx
import { FaHome, FaChartPie } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-20 bg-[#111827] h-screen flex flex-col items-center py-6 gap-6">

      <div className="text-xl font-bold">⚡</div>

      <FaHome className="text-white bg-white/10 p-2 rounded-lg" size={30} />
      <FaChartPie size={30} />

    </div>
  );
}