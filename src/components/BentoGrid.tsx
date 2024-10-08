import KanbanBoard from './KanbanBoard';
import ProjectSection from './ProjectSection.astro';
import BlogPostSection from './BlogPostSection.astro';
import NotesSection from './NotesSection.astro';

export default function BentoGrid() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Hero Section */}
                <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-4">Andrew's Digital Garden</h1>
                    <p className="text-xl">Full-Stack Developer, Content Creator, and Entrepreneur</p>
                </div>

                {/* Profile Picture */}
                <div className="bg-gray-200 p-4 rounded-lg shadow-lg flex items-center justify-center">
                    <img src="/public/codingatnight.png" alt="" class="w-[200px] h-[200px] rounded-lg" />

                    {/* About Me */}
                    <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">About Me</h2>
                        <p>I'm a passionate developer with experience in React, Node.js, and cloud technologies. I love building scalable web applications and exploring new technologies.</p>
                    </div>

                    {/* Skills */}
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Skills</h2>
                        <ul className="list-disc list-inside">
                            <li>JavaScript (React, Node.js, TypeScript, Deno)</li>
                            <li>Python</li>
                            <li>Netlify, AWS, Google Cloud, Azure, Vercel</li>
                            <li>Docker, Kubernetes</li>
                            <li>Rest API, GraphQL</li>
                        </ul>
                    </div>

                    {/* Featured Project */}
                    <div className="md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Featured Project</h2>
                        <ProjectSection />
                    </div>

                    {/* Latest Blog Post */}
                    <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Latest Blog Post</h2>
                        <BlogPostSection limit={1} />
                    </div>

                    {/* Kanban */}
                    <div className="md:col-span-3 lg:col-span-4 bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Current Sprint</h2>
                        <KanbanBoard />
                    </div>

                    {/* Notes Preview */}
                    <div className="md:col-span-2 bg-green-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Recent Notes</h2>
                        <NotesSection limit={3} />
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-2 bg-yellow-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <p className="mb-4">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
                        <a href="mailto:andrew@geauxweisbeck4.dev" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
