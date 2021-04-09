import React from 'react';

export function EducationItem({
  qualification,
  institute,
  year,
  children,
}: {
  qualification: string;
  institute: string;
  year: string;
  children: React.ReactNode;
}) {
  return (
    <li className="my-2">
      <strong>{qualification}</strong>
      <span className="ml-4">{institute}</span>
      <span className="ml-4">{year}</span>
      <p>{children}</p>
    </li>
  );
}
