import React from 'react';

export function AboutSection({
  children, title
}: {
  children: React.ReactNode,
  title: string
}) {

  return (
    <section className="text-left bg-main-secondary rounded shadow-navy p-5 mb-10">
      <h3 className="mb-3">{title}</h3>
      {children}
    </section>
  );

}
