import * as React from 'react';


interface IFooterProps {

}

const Footer: React.FunctionComponent<IFooterProps> = () => {
    return (
        <div className=" bg-slate-900 shadow-md text-white text-base text-center py-5">
            Copyright &copy; 2026 URL Shortner | Vidhi Singh
        </div>
    );
}

export default Footer;