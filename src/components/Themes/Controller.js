import hexToRgb from './utils/hexToRgb';
import { themes } from './Themes';

function Theme(props){
    let theme = themes.find(choice => choice.name === props.theme);

    return (
        <style type='text/css'>
            :root {`{`}
                --bs-body-bg: {theme.colors.background.base};
                --bs-body-color: {theme.colors.background.text};

                --bs-primary: {theme.colors.primary.base};
                --bs-primary-hover: {theme.colors.primary.hover};
                --bs-primary-text: {theme.colors.primary.text};
                --bs-secondary: {theme.colors.secondary.base};
                --bs-secondary-hover: {theme.colors.secondary.hover};
                --bs-secondary-text: {theme.colors.secondary.text};
                --bs-success: {theme.colors.success.base};
                --bs-success-hover: {theme.colors.success.hover};
                --bs-success-text: {theme.colors.success.text};
                --bs-info: {theme.colors.info.base};
                --bs-info-hover: {theme.colors.info.hover};
                --bs-info-text: {theme.colors.info.text};
                --bs-warning: {theme.colors.warning.base};
                --bs-warning-hover: {theme.colors.warning.hover};
                --bs-warning-text: {theme.colors.warning.text};
                --bs-danger: {theme.colors.danger.base};
                --bs-danger-hover: {theme.colors.danger.hover};
                --bs-danger-text: {theme.colors.danger.text};
        
                --bs-primary-rgb: {hexToRgb(theme.colors.primary.base)};
                --bs-primary-hover-rgb: {hexToRgb(theme.colors.primary.hover)};
                --bs-secondary-rgb: {hexToRgb(theme.colors.secondary.base)};
                --bs-secondary-hover-rgb: {hexToRgb(theme.colors.secondary.hover)};
                --bs-success-rgb: {hexToRgb(theme.colors.success.base)};
                --bs-info-rgb: {hexToRgb(theme.colors.info.base)};
                --bs-warning-rgb: {hexToRgb(theme.colors.warning.base)};
                --bs-danger-rgb: {hexToRgb(theme.colors.danger.base)};
                {`}`}
            .modal {`{`}
                --bs-modal-bg: {theme.colors.background.base};
                {`}`}
        </style>
        );
}

export default Theme;
