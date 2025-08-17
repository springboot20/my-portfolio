import { ProjectCardComponent } from "../../components/card/cards";
import ProjectDemoImage from "../../assets/images/project-demo-image.jpg";

export default function ProjectPageComponent() {
  return (
    <article className="w-full py-28">
      <div className="w-full">
        <header className="space-y-3">
          <h1 className="font-fira-code font-semibold text-3xl text-white">
            <span className="text-port-primary">/</span>projects
          </h1>
          <p className="text-white font-fira-code font-normal text-lg">List of my projects</p>
        </header>

        <section className="py-10">
          <div className="w-full space-y-10">
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-2 shrink-0 flex-1">
              <h2 className="text-white font-medium font-fira-code text-2xl">
                <span className="text-port-primary">#</span>completed projects
              </h2>
              <div className="h-0.5 w-full sm:w-1/2 bg-port-primary block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }, (_, index) => {
                return (
                  <ProjectCardComponent
                    key={index}
                    description="Minecraft servers hosting"
                    link="/"
                    image={ProjectDemoImage}
                    title="ChertNodes"
                    frameworks={["HTML", "CSS", "JavaScript", "Python", "Tailwind CSS"]}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="w-full space-y-10">
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-2 shrink-0 flex-1">
              <h2 className="text-white font-medium font-fira-code text-2xl">
                <span className="text-port-primary">#</span>small projects
              </h2>
              <div className="h-0.5 w-full sm:w-1/2 bg-port-primary block" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 5 }, (_, index) => {
                return (
                  <ProjectCardComponent
                    key={index}
                    description="Minecraft servers hosting"
                    link="/"
                    title="ChertNodes"
                    frameworks={["HTML", "CSS", "JavaScript", "Python", "Tailwind CSS"]}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
