import Connect from '../../common/scripts/store/Connect';
import ProfileLayout from './profile';

export default Connect(
	ProfileLayout, 
	(state: any) => {
        return state
    } 
);