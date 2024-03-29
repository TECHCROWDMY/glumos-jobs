import { useEffect, useState } from 'react';
import JobCard   from './JobCard';

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
        window.open(url, '_blank');

      };

    return (
        <div className='grid grid-cols-3 gap-4 p-5 max-w-[1024px] mx-auto border border-black'>
            <ul role="list" className="py-10 col-span-2 border border-black">
                <h1 className='text-3xl font-circularStdMedium'>Latest Jobs</h1>
                {remoteJobs.map((job,i) => (
                    <JobCard 
                        key={i}
                        job={job}
                        handleJobClick={handleJobClick}
                    />
                ))}
            </ul>
            <div className='border border-black bg-[#b3cbff] rounded-lg'>

            </div>
        </div>

    )
}

export default Jobs