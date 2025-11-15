export default function Navbar({ title = "" }) {
  return (
    <header className="w-full bg-neutral-800 text-white border-b border-neutral-700 p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="flex items-center space-x-4">
        <span className="hidden sm:block text-neutral-300">Welcome, Admin</span>

        <img
          src="https://placehold.co/40x40/E2E8F0/4A5568?text=A"
          className="w-10 h-10 rounded-full border border-neutral-500"
        />
      </div>
    </header>
  );
}
