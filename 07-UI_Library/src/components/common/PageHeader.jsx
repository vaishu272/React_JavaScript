export function PageHeader({ title, subtitle }) {
  return (
    <div className="mb-6 space-y-1">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
