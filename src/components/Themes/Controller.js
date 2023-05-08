import hexToRgb from './utils/hexToRgb';

function Theme(props){
    const themes = require('./themes.json');

    let themeData = themes.find(choice => choice.name === props.theme);

    return (
        <style type='text/css'>
            :root {`{`}
                --bs-primary:{themeData.primary};
                --bs-primary-hover{themeData.primaryHover};
                --bs-secondary:{themeData.secondary};
                --bs-secondary-hover:{themeData.secondaryHover};
                --bs-success:{themeData.success};
                --bs-info:{themeData.info};
                --bs-warning:{themeData.warning};
                --bs-danger:{themeData.danger};
                --bs-light:{themeData.light};
                --bs-dark:{themeData.dark};
                --bs-primary-rgb:{hexToRgb(themeData.primary)};
                --bs-primary-hover-rgb:{hexToRgb(themeData.primaryHover)};
                --bs-secondary-rgb:{hexToRgb(themeData.secondary)};
                --bs-secondary-hover-rgb:{hexToRgb(themeData.secondaryHover)};
                --bs-success-rgb:{hexToRgb(themeData.success)};
                --bs-info-rgb:{hexToRgb(themeData.info)};
                --bs-warning-rgb:{hexToRgb(themeData.warning)};
                --bs-danger-rgb:{hexToRgb(themeData.danger)};
                --bs-light-rgb:{hexToRgb(themeData.light)};
                --bs-dark-rgb:{hexToRgb(themeData.dark)};
                {`}`}
        </style>
        );
}

export default Theme;
