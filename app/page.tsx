export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black mb-6 border-8 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1">
            AI Engineer
          </h1>
          <div className="mt-8 border-4 border-black p-6 bg-yellow-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-2xl">
            <p className="text-xl leading-relaxed font-medium">
              I build real production systems with LLMs, RAG pipelines, and agent workflows.
            </p>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-8 border-b-6 border-black pb-2 inline-block">
            What I Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black mb-3 text-pink-600">Model Fine-Tuning</h3>
              <p className="font-medium">
                Fine tuned models like Qwen and Llama for production use cases
              </p>
            </div>
            <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black mb-3 text-blue-600">Document Automation</h3>
              <p className="font-medium">
                Shipped document automation pipelines that process complex workflows
              </p>
            </div>
            <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black mb-3 text-green-600">Retrieval Services</h3>
              <p className="font-medium">
                Designed fast retrieval services for efficient information access
              </p>
            </div>
            <div className="border-4 border-black p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black mb-3 text-purple-600">Agent Workflows</h3>
              <p className="font-medium">
                Experiment with MCP servers and coding agents for automation
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-8 border-b-6 border-black pb-2 inline-block">
            Open Source
          </h2>
          <div className="space-y-6">
            <div className="border-4 border-black p-8 bg-cyan-200 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <h3 className="text-2xl font-black mb-3">CommandRex</h3>
              <p className="font-medium text-lg">
                Open source tool for command-line AI interactions
              </p>
            </div>
            <div className="border-4 border-black p-8 bg-lime-200 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <h3 className="text-2xl font-black mb-3">Junior Researcher</h3>
              <p className="font-medium text-lg">
                Research automation tool for AI-powered investigation
              </p>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-8 border-b-6 border-black pb-2 inline-block">
            Community
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-4 border-black p-6 bg-orange-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-black mb-2">📝</div>
              <h3 className="text-xl font-black mb-2">Research</h3>
              <p className="font-medium">Publish research papers</p>
            </div>
            <div className="border-4 border-black p-6 bg-pink-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-black mb-2">🎓</div>
              <h3 className="text-xl font-black mb-2">Teaching</h3>
              <p className="font-medium">Lead technical workshops</p>
            </div>
            <div className="border-4 border-black p-6 bg-violet-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-black mb-2">🔬</div>
              <h3 className="text-xl font-black mb-2">Experiments</h3>
              <p className="font-medium">Explore cutting-edge AI</p>
            </div>
          </div>
        </section>

        {/* Focus Section */}
        <section>
          <div className="border-6 border-black p-10 bg-gradient-to-br from-yellow-200 to-pink-200 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            <h2 className="text-3xl md:text-4xl font-black mb-4">My Focus</h2>
            <p className="text-xl font-bold leading-relaxed">
              Turning complex AI ideas into reliable products that teams use every day.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t-4 border-black">
          <p className="font-black text-lg">
            Building the future of AI, one production system at a time.
          </p>
        </footer>
      </div>
    </main>
  );
}
