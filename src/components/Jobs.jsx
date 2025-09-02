import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const jobCategories = [
  { name: "All Jobs", value: "" }, // Default checked
  { name: "Product", value: "product" },
  { name: "Writing", value: "writing" },
  { name: "Marketing", value: "marketing" },
  { name: "Software Development", value: "software-dev" },
  { name: "Customer Service", value: "customer-support" },
  { name: "Data Analysis", value: "data" },
  { name: "DevOps / Sysadmin", value: "devops" },
  { name: "Design", value: "design" },
  { name: "QA", value: "qa" },
];

const Jobs = () => {
  const [remoteJobs, setRemoteJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let apiUrl = `https://remotive.com/api/remote-jobs?limit=${limit}`;
        if (selectedCategory) {
          apiUrl = `https://remotive.com/api/remote-jobs?category=${selectedCategory}&limit=${limit}`;
        }
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRemoteJobs(data.jobs);
      } catch (error) {
        console.error("Error fetching remote jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit, selectedCategory]);

  const handleJobClick = (url) => {
    window.open(url, "_blank");
  };

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 5);
  };

  const handleCategoryChange = (value) => {
    if (value === "") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(value);
    }
    setLimit(5); // Reset limit when changing category
  };

  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-24 py-5">
        {/* Job Listings */}
        <div className="col-span-2">
          <h1 className="py-5 text-3xl font-circularStdMedium">Latest Jobs</h1>

          {loading ? (
            <div className="flex justify-center items-center py-5">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
            </div>
          ) : (
            remoteJobs.map((job, i) => (
              <div
                key={i}
                className={`${i !== remoteJobs.length - 1 ? "border-b-[1px] border-black-500" : ""}`}
              >
                <JobCard job={job} handleJobClick={handleJobClick} />
              </div>
            ))
          )}

          {/* Load More Button */}
          {!loading && remoteJobs.length > 0 && (
            <div className="flex justify-center mt-5">
              <button
                onClick={handleLoadMore}
                className="font-circularStdBook px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Job Categories */}
        <div className="font-circularStdMedium px-5 py-6 md:max-w-[288px] bg-[#f9fafb] border border-[#e5e7eb] rounded-lg self-start">
          <h1 className="text-[16px] mb-3 font-semibold">Job Categories</h1>
          <ul>
            {jobCategories.map(({ name, value }, index) => (
              <li key={index} className="flex items-center gap-2 py-1">
                <input
                  type="checkbox"
                  id={value}
                  className="w-4 h-4 text-blue-500"
                  checked={selectedCategory === value}
                  onChange={() => handleCategoryChange(value)}
                />
                <label htmlFor={value} className="text-sm">{name}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
