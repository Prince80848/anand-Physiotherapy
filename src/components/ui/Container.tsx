interface Props {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: Props) {
  return (
    <Tag className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
