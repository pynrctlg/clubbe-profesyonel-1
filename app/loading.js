
export default function Loading() {
  return (
    <div className="z-[99999] w-full h-screen flex items-center justify-center bg-sixth">
      <div className="flex gap-2">
        <div className="w-7 h-7 rounded-full animate-pulse bg-secondary"></div>
        <div className="w-7 h-7 rounded-full animate-pulse bg-secondary"></div>
        <div className="w-7 h-7 rounded-full animate-pulse bg-secondary"></div>
      </div>
    </div>
  );
}
