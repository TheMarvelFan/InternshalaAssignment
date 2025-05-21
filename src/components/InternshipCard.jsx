import { MapPin, Clock, Briefcase, Calendar } from 'lucide-react';

export default function InternshipCard({ internship, isPremium }) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-4 hover:shadow-lg hover:translate-y-[-4px] hover:border-blue-300 border border-transparent transition-all duration-200 ease-in-out relative">
            {isPremium && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-800 text-xs font-medium px-2 py-1 rounded-bl-md">
                    Premium
                </div>
            )}
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{internship.title}</h3>
                    <p className="text-gray-600 mt-1">{internship.company_name}</p>
                </div>
                {internship.company_logo && (
                    <img
                        src="/assets/InternshalaLogo.png"
                        alt={`${internship.company_name} logo`}
                        className="w-15 h-15 object-contain"
                    />
                )}
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-1 text-gray-600">
                    <MapPin size={18} />
                    <span>{internship.location_names.join(', ')}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                    <Clock size={18} />
                    <span>{internship.duration}</span>
                </div>
                {internship.stipend && (
                    <div className="flex items-center gap-1 text-gray-600">
                        <Briefcase size={18} />
                        <span>{internship.stipend.salary}</span>
                    </div>
                )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
                {internship.labels_app_in_card && internship.labels_app_in_card.map((label, i) => (
                    <span key={i} className={`${
                        label === 'PPO' ? 'bg-green-50 text-green-600' :
                            label === 'Work from Home' ? 'bg-purple-50 text-purple-600' :
                                label === 'International' ? 'bg-amber-50 text-amber-600' :
                                    'bg-blue-50 text-blue-600'
                    } text-sm px-2 py-1 rounded`}>
                        {label}
                    </span>
                ))}
            </div>

            <div className="mt-4 flex items-center gap-1 text-gray-600">
                <Calendar size={18} />
                <span>{internship.start_date}</span>
            </div>

            <div className="mt-6 flex justify-between items-center">
                <div>
                    <p className={`text-sm ${
                        internship.posted_by_label_type === 'success' ? 'text-green-500' :
                            internship.posted_by_label_type === 'warning' ? 'text-amber-500' :
                                'text-gray-500'
                    }`}>
                        {internship.posted_by_label}
                    </p>
                    <p className="text-sm text-gray-500">{internship.expiring_in}</p>
                </div>
                <button className={`${
                    internship.eligible_for_easy_apply ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                } text-white px-4 py-2 rounded-md transition-colors duration-200`}>
                    {internship.eligible_for_easy_apply ? 'Easy Apply' : 'Apply Now'}
                </button>
            </div>
        </div>
    );
}
