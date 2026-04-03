// Home.jsx
import Sidebar from "../components/Common/Sidebar";
import Navbar from "../components/Common/Navbar";

export default function Home() {
  return (
    <div className="flex bg-[#0B0F17] text-white min-h-screen">
      
      <Sidebar />

      <div className="flex-1 p-6">
        <Navbar />

        <div className="mt-6">
          {/* Dashboard will come here */}
        </div>

      </div>
    </div>
  );
}