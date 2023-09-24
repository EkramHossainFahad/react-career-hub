import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src= {logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex gap-6 mt-4 mb-4">
                    <h2 className="flex gap-2"> <MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn> {location} </h2>
                    <h2 className="flex"><AiOutlineDollar className="text-xl"></AiOutlineDollar> Salary: {salary} </h2>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary border-0 bg-[#9873FF] text-white ">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;