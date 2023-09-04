import style from "@/components/project/list/item/ProjectListItem.module.scss";
import Image from "next/image";
import Link from "next/link";

interface ProjectListItemProps {
  project: MinimizedProject;
}

const ProjectListItem = (props: ProjectListItemProps) => {
  return (
    <div className={style.container}>
      <Link href={`/project?name=${props.project.name}`} passHref>
        <Image
          width={300}
          height={300}
          alt={props.project.name}
          src={props.project.appIconUrl}
        />
      </Link>
    </div>
  );
};

export default ProjectListItem;
