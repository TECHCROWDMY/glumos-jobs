import PropTypes from 'prop-types';

const JobCard = ({ job, handleJobClick }) => {
  return (
    <li key={job.id} className="hover:bg-[#b3cbff] flex justify-between gap-x-6 py-5 hover:cursor-pointer rounded-lg" onClick={() => handleJobClick(job.url)}  >
        <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50 " src={job.company_logo} alt="" />
            <div className="min-w-0 flex-auto font-circularStdMedium tracking-wide">
                <p className="text-sm font-semibold leading-6 text-[#484848]">{job.title}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{job.category}</p>
            </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
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
        </div>
    </li>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    company_logo: PropTypes.string.isRequired,
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
