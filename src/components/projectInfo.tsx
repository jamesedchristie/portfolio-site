import React from 'react';
import { Link } from 'gatsby';
import { GithubRepo } from '../types/data';

export function ProjectInfo({ repo }: { repo: GithubRepo }) {
  return (
    <article className="flex flex-col md:flex-row mb-10 p-5 bg-main-secondary rounded shadow-navy">
      <div className="flex flex-col md:w-2/4 px-4 justify-center text-left">
        <div className="flex align-middle mb-5">
          <h3 className="text-">{repo.name}</h3>
        </div>
        <i className="pt-2 border-t-2 border-main-accent"> Created at: {new Date(repo.createdAt).toLocaleDateString()}</i>
        <p className="my-2">{repo.description}</p>
        <div className='flex flex-col align-middle justify-center text-center md:flex-row my-3'>
          <div className="mb-5 md:mr-5 md:mb-0">
            <Link
              className="py-1 px-5 bg-main-interact rounded-sm font-mono border-2 border-main-accent hover:text-starwars-red"
              to={`/projects/${repo.name}/`}
            >
              READ MORE
            </Link>
          </div>
          
          <div>
            <a
              className="py-1 px-5 bg-main-interact rounded-sm font-mono border-2 border-main-accent hover:text-starwars-red"
              href={repo.url}
              rel="noreferrer"
              target="_blank"
            >
              VIEW SOURCE
            </a>
          </div>
        </div>
      </div>
      <div className='md:w-2/4 flex justify-center align-middle text-center max-h-60'>
        <img
          src={repo.openGraphImageUrl}
          alt={repo.name + '-image'}  
          className='block rounded border-4 border-main-accent'        
        />
      </div>
    </article>
  );
}
