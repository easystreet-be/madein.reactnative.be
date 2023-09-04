import style from "@/components/project/list/ProjectList.module.scss";
import ProjectListItem from "./item/ProjectListItem";
import Link from "next/link";
import { translations } from "@/util/locale/localization";

interface ProjectListProps {
  title?: string;
  projects: Array<MinimizedProject>;
}

const ProjectList = (props: ProjectListProps) => {
  return (
    <div>
      {props.title == null ? <></> : <h2>{props.title}</h2>}
      <div className={style.container}>
        {props.projects.map((project, index) => (
          <ProjectListItem key={index} project={project} />
        ))}
        <Link
          href="https://github.com/easystreet-be/reactnative.be_data/wiki/projects"
          className={style.addProjectContainer}
          target="_blank"
          aria-label={translations.projects_add_project_btn}
        >
          +
        </Link>
      </div>
    </div>
  );
};

export default ProjectList;
