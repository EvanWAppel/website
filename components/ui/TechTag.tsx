interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-950 text-accent border border-blue-100 dark:border-blue-900">
      {label}
    </span>
  );
}
