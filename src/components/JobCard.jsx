import PropTypes from 'prop-types';

const JobCard = ({ job, handleJobClick }) => {
  return (
    <li key={job.id} className="rounded-xl hover:bg-[#b3cbff] hover:cursor-pointer font-circularStdBook flex justify-between gap-x-6 py-6 px-5 " onClick={() => handleJobClick(job.url)}  >
        <div className="flex min-w-0 gap-x-5 align-middle items-center justify-center">
            <img className="border border-1 border-gray-300 h-[56px] w-[56px] flex-auto rounded-full bg-gray-50 " src={job.company_logo} alt="" />
            <div className="min-w-0 flex flex-col gap-3 tracking-wide">
                <p className="text-[13px] font-circularStdMedium text-[#484848]">{job.company_name}</p>
                <p className="text-[20px] font-semibold leading-6 text-[#484848]">{job.title}</p>
                <div className='flex'>
                  <div className='px-3 py-1 rounded-md bg-[#f3f4f6]'>
                    <p className="text-[13px] truncate leading-5 text-[#6b7280]">{job.category}</p>
                  </div>
                </div>
            </div>
        </div>
        {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{job.role}</p>
            {job?.lastSeen ? (
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
        </div> */}
    </li>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    company_logo: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    lastSeen: PropTypes.string,
    lastSeenDateTime: PropTypes.string,
    salary: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  handleJobClick: PropTypes.func.isRequired,
};

export default JobCard
