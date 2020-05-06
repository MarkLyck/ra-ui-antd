import { createMuiTheme } from '@material-ui/core/styles';
import { lighten } from 'polished';

const MAIN_COLOR = '#3f51b5';
const ERROR_COLOR = '#f50057';
const SUCCESS_COLOR = '#45cea5';

const theme: any = createMuiTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff',
        },
        type: 'light',
        primary: {
            light: '#7986cb',
            main: MAIN_COLOR,
            dark: '#303f9f',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff4081',
            main: ERROR_COLOR,
            dark: '#c51162',
            contrastText: '#fff',
        },
        error: {
            // @ts-ignore
            lighter: lighten(0.45, ERROR_COLOR),
            light: ERROR_COLOR,
            main: ERROR_COLOR,
            dark: '#c51162',
            contrastText: '#fff',
        },
        // @ts-ignore - warning colors
        warning: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
            contrastText: '#fff',
        },
        success: {
            // @ts-ignore
            lighter: lighten(0.38, SUCCESS_COLOR),
            main: SUCCESS_COLOR,
            dark: '#388e3c',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        grey: {
            50: '#FAFAFC',
            100: '#FBFCFC',
            // @ts-ignore
            150: '#F4F4FB',
            200: '#eeeeee',
            250: '#F0F2F8',
            300: '#ECF0F4',
            400: '#DCD9E9',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#d5d5d5',
            A200: '#aaaaaa',
            A400: '#303030',
            A700: '#616161',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            // @ts-ignore
            accent: '#9A9CB2',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
        divider: 'rgba(0, 0, 0, 0.12)',
        background: {
            paper: '#fff',
            default: '#F9F9FC',
        },
        action: {
            active: 'rgba(0, 0, 0, 0.26)',
            hover: '#F0F2F8',
            // @ts-ignore
            hoverButton: MAIN_COLOR,
            hoverOpacity: 0.02,
            selected: 'rgba(0, 0, 0, 0.08)',
            disabled: 'rgba(0, 0, 0, 0.26)',
            disabledBackground: 'rgba(0, 0, 0, 0.12)',
        },
        // @ts-ignore - scale colors
        scale: {
            worst: ERROR_COLOR,
            bad: '#E48C34',
            okay: '#f9dd4d',
            good: SUCCESS_COLOR,
            perfect: SUCCESS_COLOR,
        },
        border: '#ebedf5',
        hoverBackground: 'rgba(0, 0, 0, 0.02)',
    },
    logos: {
        horizontal: '/static/colony_logo_horizontal.svg',
    },
    shadows: [
        'none',
        '0px 4px 14px 0px rgba(111, 120, 156, 0.08)',
        '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
        '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
        '0px 2px 4px 0px rgba(50, 50, 93, 0.2)',
        '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
        '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
        '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
        '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
        '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
        '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
        '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
        '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
        '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
        '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
        '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
        '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
        '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
        '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
        '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
        '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
        '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
        '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
        '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
        '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
    ],
    typography: {
        htmlFontSize: 16,
        fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 300,
            fontSize: '6rem',
            lineHeight: 1.167,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 400,
            fontSize: '3.75rem',
            lineHeight: 1.2,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 400,
            fontSize: '3rem',
            lineHeight: 1.167,
            letterSpacing: '0em',
        },
        h4: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 400,
            fontSize: '2.125rem',
            lineHeight: 1.235,
            letterSpacing: '0.00735em',
        },
        h5: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: 1.334,
            letterSpacing: '0em',
        },
        h6: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.6,
            letterSpacing: '0.0075em',
        },
        subtitle1: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.75,
            letterSpacing: '0.00938em',
        },
        subtitle2: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.57,
            letterSpacing: '0.00714em',
        },
        body1: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: 1.43,
            letterSpacing: '0.01071em',
        },
        button: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            textTransform: 'uppercase',
        },
        caption: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 1.66,
            letterSpacing: '0.03333em',
        },
        overline: {
            fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(
                ','
            ),
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 2.66,
            letterSpacing: '0.08333em',
            textTransform: 'uppercase',
        },
    },
    shape: {
        borderRadius: 4,
    },
    zIndex: {
        mobileStepper: 1000,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
    },
    sidebar: {
        width: 240, // The default value is 240
        closedWidth: 55, // The default value is 55
    },
    overrides: {
        MuiFilledInput: {
            input: {
                padding: '10px 12px',
                borderRadius: '2px',
                border: '1px solid #d9d9d9',
                background: 'white',
                '&:hover': {
                    borderColor: MAIN_COLOR,
                },
                '&:focus': {
                    borderColor: MAIN_COLOR,
                },
            },
            underline: {
                '&:before': {
                    content: 'none',
                },
                '&:after': {
                    content: 'none',
                },
            },
        },
        MuiInputLabel: {
            filled: {
                transform: 'translate(12px, 14px) scale(1)',
            },
            shrink: {
                '&&&': {
                    transform: 'translate(12px, -16px) scale(0.75)',
                },
            },
        },
        MuiChip: {
            root: {
                borderRadius: '4px',
            },
            clickable: {},
        },
    },
});

export default theme;
