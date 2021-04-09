import React from 'react';
import { Link } from 'gatsby';
import { GithubRepo } from '../types/data';

export function ProjectInfo({ repo }: { repo: GithubRepo }) {
  return (
    <article className="flex flex-row mb-10 p-5 bg-main-secondary rounded shadow-navy">
      <div className="flex flex-col w-2/4 px-4 justify-center text-left">
        <div className="flex align-middle mb-5">
          <h3>{repo.name}</h3>
        </div>
        <i> Created at: {repo.createdAt}</i>
        <p className="my-2">{repo.description}</p>
        <div className='flex my-3'>
          <div>
            <Link
              className="py-1 px-5 mr-2 bg-main-interact rounded-sm font-mono shadow-pink"
              to={`/projects/${repo.name}/`}
            >
              READ MORE
            </Link>
          </div>
          <span>or</span>
          <div>
            <a
              className="py-1 px-5 ml-2 bg-main-interact rounded-sm font-mono shadow-pink"
              href={repo.url}
              rel="noreferrer"
              target="_blank"
            >
              VIEW SOURCE
            </a>
          </div>
        </div>
      </div>
      <div className='w-2/4 flex justify-center max-h-60'>
        <img
          src={repo.openGraphImageUrl}
          alt={repo.name + '-image'}  
          className='block'        
        />
      </div>
    </article>
  );
}
