interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({ title, subtitle, align = 'left' }: SectionHeadingProps) => {
  return (
    <div className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center' : ''}`}>
      <h2
        className={`text-2xl md:text-3xl font-semibold mb-3 ${
          align === 'left' ? 'section-heading' : ''
        }`}
        style={{ color: 'var(--color-text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
