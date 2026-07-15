interface Props {
  title: string;
  description: string;
}

export default function PremiumCard({
  title,
  description,
}: Props) {
  return (
    <div className="premium-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
