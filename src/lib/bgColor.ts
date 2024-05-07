export function bgLevelColor(level: number) {
  switch (level) {
    case 1:
      return "bg-blue-500";
    case 2:
      return "bg-green-500";
    case 3:
      return "bg-yellow-500";
    case 4:
      return "bg-red-500";
    case 5:
      return "bg-purple-500";
    case 6:
      return "bg-indigo-500";
    case 7:
      return "bg-pink-500";
    case 8:
      return "bg-teal-500";
    case 9:
      return "bg-gray-500";
    case 10:
      return "bg-orange-500";
    default:
      return "bg-gray-500";
  }
}
