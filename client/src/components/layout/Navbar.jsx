export default function Navbar({ title = "" }) {
  return (
    <header
      className="
    w-full px-5 py-4 bg-[#e8e2d6]
    border-b-[4px] border-[#4d4c4a]
    shadow-[0_6px_0_#4d4c4a]
    flex justify-between items-center rounded-b-2xl
  "
    >
      <h2 className="text-xl font-bold text-[#4d4c4a]">{title}</h2>

      <div className="flex items-center space-x-4">
        <span className="hidden sm:block text-[#4d4c4a]/70">
          Welcome, Admin
        </span>

        <img
          src="https://placehold.co/40x40/E2E8F0/4A5568?text=A"
          className="
        w-10 h-10 rounded-full 
        border-[3px] border-[#4d4c4a] 
        shadow-[3px_3px_0_#4d4c4a]
      "
        />
      </div>
    </header>
  );
}
