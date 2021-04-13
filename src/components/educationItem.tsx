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
    <li className="py-4">
      <div className="flex flex-row flex-wrap justify-between md:justify-start mb-3">
        <h4 className="mr-4">{qualification}</h4>
        <strong className="mr-4 my-auto">{institute}</strong>
        <span className="my-auto">{year}</span>
      </div>
      <p>{children}</p>
    </li>
  );
}
