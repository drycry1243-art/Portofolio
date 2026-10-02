export default function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-accent">
        <span className="text-muted">{index} {"//"}</span> {label}
      </p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
