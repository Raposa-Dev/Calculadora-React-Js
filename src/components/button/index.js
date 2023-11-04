import {StyleButton} from './style'
const button = ({label, onClick}) => {
    return (
        <StyleButton onClick={onClick} type='button'>
            {label}
        </StyleButton>
    );
}

export default button;