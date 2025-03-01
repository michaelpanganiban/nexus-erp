import { UserForm } from '@/components/user/user-form';
import { ComponentRegistryInterface } from '@/interfaces/componentRegistry';

const UserFormComponent = () => <UserForm />
const Default = () => <></>

export const ComponentRegistry: ComponentRegistryInterface = {
    UserFormComponent,
    Default,
  // You can add more components here
};