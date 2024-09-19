import React, { useState } from 'react';

const categories = ['All', 'Content', 'Programming', 'Design', 'Entrepreneurship'];

interface Project {
    slug: string;
    data: {
        title: string;
        description: string;
        category: string;
        image: string;
        websiteUrl?: string;
        githubUrl?: string;
        projectPageUrl: string;
    };
}

interface ProjectGridProps {
    projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProjects = selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.data.category === selectedCategory);

    return (
        <div>
            <div className="flex justify-center space-x-4 mb-8">
                {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full ${
                        selectedCategory === category
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                      }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                    <div key={project.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                          src={project.data.image}
                          alt={project.data.title}
                          className="w-full h-64 object-cover project-image cursor-pointer"
                          style={{ maxWidth: '500px', maxHeight: '500px' }}
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{project.data.title}</h3>
                            <p className="text-gray-600 mb-4">{project.data.description}</p>
                            <div className="flex space-x-2">
                                {project.data.websiteUrl && (
                                    <a
                                      href={project.data.websiteUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-500 hover:underline"
                                    >
                                        Website
                                    </a>
                                )}
                                {project.data.githubUrl && (
                                    <a
                                      href={project.data.githubUrl}
                                      target="_blank"
                                      rel="noopener norefferer"
                                      className="text-blue-500 hover:underline"
                                    >
                                        GitHub
                                    </a>
                                )}
                                <a
                                  href={project.data.projectPageUrl}
                                  className="text-blue-500 hover:underline"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
