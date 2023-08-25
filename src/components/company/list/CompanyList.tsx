import style from "@/components/company/list/CompanyList.module.scss";
import CompanyListItem from "./item/CompanyListItem";
import Link from "next/link";
import { translations } from "@/util/locale/localization";

interface CompanyListProps {
  companies: Array<MinimizedCompany>;
}

const CompanyList = (props: CompanyListProps) => {
  return (
    <div className={style.container}>
      {props.companies.map((company, index) => (
        <CompanyListItem key={index} company={company} />
      ))}
      <Link
        className={style.addCompanyContainer}
        href="https://github.com/easystreet-be/madein.reactnative.be_data/wiki/companies"
        target="_blank"
        aria-label={translations.companies_add_company_btn}
      >
        +
      </Link>
    </div>
  );
};

export default CompanyList;
