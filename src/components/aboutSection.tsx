import React from 'react';

export function AboutSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="text-left bg-main-secondary rounded shadow-navy mb-10">
      <div className="bg-layout-primary text-heading-color rounded-t p-5">
        <h3 className="mb-3">{title}</h3>
      </div>
      <ul className="p-5 flex flex-col divide-main-accent divide-y-2">{children}</ul>
    </section>
  );
}
