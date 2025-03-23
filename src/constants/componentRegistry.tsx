import { EditUserForm } from '@/components/user/edit-user-form';
import { AddUserForm } from '@/components/user/add-user-form';
import { ComponentRegistryInterface } from '@/interfaces/componentRegistry';

const EditUserFormComponent = () => <EditUserForm />
const AddUserFormComponent = () => <AddUserForm />
const Default = () => <></>

export const ComponentRegistry: ComponentRegistryInterface = {
    EditUserFormComponent,
    AddUserFormComponent,
    Default,
  // You can add more components here
};