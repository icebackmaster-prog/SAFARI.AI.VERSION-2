interface StatusCardProps {
  title: string;
  caption: string;
}

export default function StatusCard({
  title,
  caption,
}: StatusCardProps) {
  return (
    <div className="status-card">
      <h2>{title}</h2>
      <p>{caption}</p>
    </div>
  );
}
