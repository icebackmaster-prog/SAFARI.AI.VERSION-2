interface Props {
  views: number;
}

export default function StatusViews({
  views,
}: Props) {
  return (
    <div className="status-views">
      👁 {views} Views
    </div>
  );
}
