interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-accent border border-blue-100">
      {label}
    </span>
  );
}
