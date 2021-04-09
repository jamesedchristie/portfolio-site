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
    <li className="my-2">
      <strong>{role}</strong>
      <span className="ml-4">{company}</span>
      <span className="ml-4">{year}</span>
      <p>{children}</p>
    </li>
  );
}
