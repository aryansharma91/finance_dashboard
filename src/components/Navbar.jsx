// Navbar.jsx
export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      
      <h1 className="text-2xl font-semibold">Overview</h1>

      <div className="flex items-center gap-4">
        
        <input
          type="text"
          placeholder="Search"
          className="bg-[#111827] px-4 py-2 rounded-lg outline-none"
        />

        <div className="bg-[#111827] px-4 py-2 rounded-lg">
          Aryan
        </div>

      </div>
    </div>
  );
}