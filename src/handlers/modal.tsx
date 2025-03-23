import useUserHandlers from './user';

const useModal = () => {
    const { handleUpdateUser, handleAddUser } = useUserHandlers();
    /**
     * handleButtonClick - general function for clicking a button
     * @param action - a string identifier that identifies the function to be called
     * @param item - data parameter
     */
    const handleButtonClick = (action: string | null, item: Object | null) => {
        switch (action) {
            case 'saveEditUser':
                handleUpdateUser(item);
                break;
            case 'saveAddUser':
                handleAddUser(item);
                break;
            // Add other cases for different actions as needed
            default:
            break;
        }
    };

    return { handleButtonClick }
}

export default useModal