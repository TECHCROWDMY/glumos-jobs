import { useEffect, useState } from 'react';

const Jobs = () => {

    const [remoteJobs, setRemoteJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch('https://remotive.com/api/remote-jobs?limit=5');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setRemoteJobs(data.jobs);
            } catch (error) {
            console.error('Error fetching remote jobs:', error);
            }
        };

        fetchData();
    }, []);

    const handleJobClick = (url) => {
        // Redirect the user to the specified URL
        window.location.href = url;
      };

    return (
        <div className='p-5 max-w-[1024px] mx-auto'>
            <ul role="list" className="divide-y divide-gray-100">
                {remoteJobs.map((job) => (
                <li key={job.id} className="flex justify-between gap-x-6 py-5 hover:cursor-pointer" onClick={() => handleJobClick(job.url)}  >
                    <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={job.company_logo} alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{job.title}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{job.category}</p>
                    </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">{job.role}</p>
                    {job.lastSeen ? (
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                        Last seen <time dateTime={job.lastSeenDateTime}>{job.lastSeen}</time>
                        </p>
                    ) : (
                        <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">{job.salary}</p>
                        </div>
                    )}
                    </div>
                </li>
                ))}
            </ul>
        </div>

    )
}

export default Jobs