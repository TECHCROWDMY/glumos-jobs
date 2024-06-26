import { useEffect, useState } from 'react';
import JobCard   from './JobCard';

const Jobs = () => {

    const [remoteJobs, setRemoteJobs] = useState([]);
    console.log(remoteJobs)

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
        <div className='container grid grid-cols-1 md:grid-cols-3 gap-24 py-5'>
            <ul role="list" className="col-span-2">
                <h1 className='py-5 text-3xl font-circularStdMedium'>Latest Jobs</h1>
                {remoteJobs.map((job,i) => (
                    <div key={i} className="border-b-[1px] border-black-500">
                        <JobCard 
                        job={job}
                        handleJobClick={handleJobClick}
                        />
                    </div>
                ))}
            </ul>
            <div className='font-circularStdMedium px-5 py-6 md:max-w-[288px] col-span-1 bg-[#f9fafb] border border-[#e5e7eb] rounded-lg'>
                <h1 className="text-[16px]">Job category</h1>
            </div>
        </div>

    )
}

export default Jobs