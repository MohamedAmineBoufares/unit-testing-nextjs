import { useStore } from "@store/index";

function Badge() {
  const favs = useStore((state) => state.favs);

  return (
    <span
      data-cy="badge"
      className="flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg"
    >
      Items
      <span
        data-cy="favs-count"
        data-testid="favs-count"
        className="flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-yellow-300 bg-black rounded-full"
      >
        {favs.length}
      </span>
    </span>
  );
}

export default Badge;
