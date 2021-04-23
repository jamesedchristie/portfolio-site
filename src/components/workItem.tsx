import React from 'react';

export function WorkItem({
  role,
  company,
  year,
  children,
}: {
  role: string;
  company: string;
  year: string;
  children: React.ReactNode;
}) {
  return (
    <li className="py-4">
      <div className="flex flex-row flex-wrap justify-between md:justify-start mb-1">
        <h4 className="mr-4 my-auto">{role}</h4>
        <strong className="mr-4 my-auto">{company}</strong>
        <span className="my-auto">{year}</span>
      </div>
      <p>{children}</p>
    </li>
  );
}
