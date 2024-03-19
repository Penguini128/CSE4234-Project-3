const colors = {
    skyBlue: '#13B6F6',
    coral: '#FF4782',
    smokeyWhite: '#F5F5F5',
    white: '#FFFFFF',
    mutePurple: "#523D4F",
    lightGray: "#E2E2E2",
    midGray: "#B0B0B0",
    babyPink: "#FEECF2"
}

const tableCellPadding = "10px 15px"
const cardBorderRadius = '30px'
const cardFlipTime = '0.5s'

const style = {
    funTitle: {
        display: 'inline-block',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'rotateY(0)'
        }
    },
    app: {
        margin: '0rem',
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, serif',
        padding: '0rem',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    navHeader: {
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        background: colors.smokeyWhite,
        color: 'aliceblue',
        padding: '20px 30px',
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 0px 30px'
    },
    navTitle: {
        display: 'inline-block',
        witdth: 'auto',
        margin: '0px',
        background: `linear-gradient(to right, ${colors.skyBlue}, ${colors.coral})`,
        backgroundClip: 'text',
        color: 'transparent',
        verticalAlign: 'center'
    },
    navHeaderMenu: {
        display: 'inline-block',
        marginLeft: 'auto',
        margin: 0
    },
    navHeaderItem: {
        display: 'inline-block',
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundColor : colors.white,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        borderRadius: '10px',
        margin: '0.5em',
        transition: 'transform 0.15s',
        '&:hover': {
            transform: 'translateY(-3px)'
        },
        '&:active': {
            transition: 'transform 0s',
            transform: 'translateY(0)'
        }
      
    },
    navHeaderAnchor: {
        display: 'inline-block',
        borderColor: '#fff',
        color: colors.mutePurple,
        textDecoration: 'none',
        padding: '10px 20px',
        '&:hover': {
            textDecoration: 'underline',
            cursor: "pointer"
        }
    },
    mainBody: {
        padding: '0px 30px',
        alignItems: 'center'
    },
    tableContent: {
        display: "flex",
        flexDirection: 'column'
    },
    tableCellHeader: {
        margin: "0px 1px",
        padding: tableCellPadding,
        backgroundColor: colors.midGray
    },
    productRow: {
        display: "grid",
        gridTemplateColumns: "4fr 2fr 3fr 2fr 2fr 2fr 2fr",
        borderRadius: "12px",
        overflow: "hidden",
    },
    customerRow: {
        display: "grid",
        gridTemplateColumns: "2fr 2fr 3fr 2fr 1fr",
        borderRadius: "12px",
        overflow: "hidden",
    },
    alignRight: {
        float: 'right',
        margin: 0
    },
    tableCellColored: {
        width: 'auto',
        height: 'auto',
        margin: "0px 1px",
        padding: tableCellPadding,
        backgroundColor: colors.lightGray
    },
    tableCellHovered: {
        margin: "0px 1px",
        padding: tableCellPadding,
        backgroundColor: colors.babyPink
    },
    tableCellWhite: {
        margin: "0px 1px",
        padding: tableCellPadding,
        backgroundColor: colors.white
    },
    sortArrow: {
        '&:hover': {
            cursor: "pointer"
        }
    },
    centerImage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    headshotPhoto: {
        display: 'inline-block',
        borderRadius: "50%",
        
    },
    teamContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    teamImage: {
        width: '300px',
        height: '300px',
        borderRadius : '50%'
    },
    flipCard: {
        display: 'inline-block',
        margin: '30px',
        backgroundColor: 'transparent',
        borderRadius: cardBorderRadius,
        width: '400px',
        height: '400px',
        perspective: '1000px',
        transition: `transform ${cardFlipTime}`,
    },
    flipCardInner: {
        width: '400px',
        height: '400px',
        textAlign: 'center',
        transition: `transform ${cardFlipTime}`,

        transformStyle: 'preserve-3d',
        '&:hover': {
            transform: 'rotateY(180deg)'
        }
    },

    flipCardFront:  {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: cardBorderRadius,

        backgroundColor: colors.white,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        color: 'black',

        webkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',

    },

    flipCardBack: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        webkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        borderRadius: cardBorderRadius,
        boxSizing: 'border-box',
        padding: '0px 40px',


        backgroundColor: colors.white,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
        color: 'black',
        transform: 'rotateY(180deg)'

    },
    fadeBackground: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: '199',
        backgroundColor: '#000000A0',
        boxShadow: 'rgba(0, 0, 0, .8) 0px 0px 200px 50px inset'
    },
    popupWindow: {
        borderRadius: cardBorderRadius,
        border: 'solid',
        borderWidth: '2px',
        borderColor: colors.midGray,
        position: 'fixed',
        top: '50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: colors.lightGray,
        boxShadow: 'rgba(0, 0, 0, 0.75) 0px 0px 16px',
        width: "500px",
        height: "500px",
        zIndex: '200',
        padding: '30px'
    },
    learnMoreButton: {
        border: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        padding: '4px 10px',
        borderColor: colors.midGray,
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 0px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: colors.lightGray
        },
        '&:active': {
            boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 0px inset',
            transform: 'translateY(3px)'
        }
    },
    closePopup: {
        float: 'right',
        padding: 'auto',
        height: '30px',
        width: '30px',
        fontSize: 16,
        border: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.midGray,
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 3px 0px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: colors.lightGray
        },
        '&:active': {
            boxShadow: 'rgba(0, 0, 0, 0.3) 0px 3px 0px inset',
            transform: 'translateY(3px)'
        }
    }
}
export default style;