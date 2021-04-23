import React from 'react';
import { Planet } from './planet';

export function AboutSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="text-left bg-main-secondary rounded shadow-navy mb-10">
      <div className="bg-layout-primary text-heading-color rounded-t p-5 flex flex-row justify-between">
        <h3 className="mb-3">{title}</h3>
        <Planet diameter={70} />
      </div>
      <ul className="p-5 flex flex-col divide-main-accent divide-y-2">{children}</ul>
    </section>
  );
}
