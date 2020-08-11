import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backImg from "../../assets/images/icons/back.svg";

import "./styles.css";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  description,
}) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backImg} alt="voltar" />
        </Link>
        <img src={logoImg} alt="proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        <p>{description}</p>
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
