import Connect from '../../common/scripts/store/Connect';
import InfoInput from '../../components/info-input/info-input';

export default Connect(
	InfoInput, 
	(state: any) => {
        return state
    } 
);