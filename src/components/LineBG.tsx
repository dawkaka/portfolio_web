export function GridLineBG({
  children,
  bgColor,
  lineColor,
}: {
  children: React.ReactNode;
  bgColor: string;
  lineColor: string;
}) {
  return (
    <div className={`w-ful relative ${bgColor}`}>
      <div className="h-full w-full absolute">
        <div
          className={`c-container h-full grid grid-cols-12 gap-4 [&>div]:border ${lineColor} [&>div]:border-t-0 [&>div]:border-b-0 [&>div]:border-dashed`}
        >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {children}
    </div>
  );
}
