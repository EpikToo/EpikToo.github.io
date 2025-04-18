import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectsWindow = () => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');

    const getProjects = () => {
        const projects = [];
        let index = 1;

        while (t(`about.projectscontent${index}`, { defaultValue: null })) {
            const content = t(`about.projectscontent${index}`);
            const [name, description] = content.split(':');
            projects.push({
                id: index,
                name: name.trim(),
                description: description.trim()
            });
            index++;
        }

        return projects;
    };

    const projects = getProjects();

    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 h-full overflow-auto bg-white font-win98 cursor-win98-default">
            <div className="mb-4">
                <input
                    type="text"
                    className="w-full p-1 border-2 border-gray-400 shadow-win98-btn focus:outline-none"
                    placeholder={t('projects.search_placeholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {filteredProjects.length === 0 ? (
                <div className="text-center p-4">
                    {t('projects.no_results')}
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="border-2 border-gray-400 p-2 shadow-win98-window cursor-win98-default hover:bg-gray-100"
                        >
                            <h3 className="text-lg font-bold text-win98-window-title-active">{project.name}</h3>
                            <p className="text-sm mt-1">{project.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectsWindow;